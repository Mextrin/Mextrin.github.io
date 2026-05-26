const racingProjectsSource = "Racing.html";
const racingProjectsRevealDelay = 1000;
const racingProjectsExitDuration = 5000;
const racingProjectsUrl = "Racing.html";
const racingProjectsBox = document.querySelector(".selectionBox.rightBox");
const racingProjectsContainer = document.querySelector(".container");
const racingProjectsPreviewBoxes = Array.from(document.querySelectorAll(
	".selectionBox.leftBox, .selectionBox.centerBox, .selectionBox.rightBox"
));

let racingProjectsLoaded = false;
let racingProjectsElement = null;
let racingReturnButtonElement = null;
let racingProjectsRevealTimeout = null;
let racingProjectsExitTimeout = null;
let racingBackTilesTimeout = null;
let racingBackSelectionTimeout = null;
let racingRestartedPreviewInterval = null;
let racingCountdownInterval = null;

function formatRacingCountdown(milliseconds) {
	const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

function initializeRacingTimeline(timelineElement) {
	const timelineItems = Array.from(timelineElement.children);
	const timelineImageGroups = Array.from(timelineElement.querySelectorAll(".timelineImages"));

	timelineItems.forEach((item, index) => {
		item.style.setProperty("--timelineDelay", `${index * 100}ms`);
	});

	timelineImageGroups.forEach((imageGroup) => {
		Array.from(imageGroup.querySelectorAll("img")).forEach((image, index) => {
			image.style.setProperty("--imageIndex", index);
		});
	});

	const countdowns = Array.from(timelineElement.querySelectorAll(".countdown time"));

	function updateCountdowns() {
		const now = Date.now();

		countdowns.forEach((countdown) => {
			const targetDate = new Date(countdown.dateTime);
			const targetTime = targetDate.getTime();

			if (Number.isNaN(targetTime)) {
				return;
			}

			countdown.textContent = formatRacingCountdown(targetTime - now);
		});
	}

	if (countdowns.length > 0 && !racingCountdownInterval) {
		updateCountdowns();
		racingCountdownInterval = window.setInterval(updateCountdowns, 1000);
	}
}

function pushRacingProjectsHistoryState() {
	if (window.location.pathname.endsWith(racingProjectsUrl)) {
		return;
	}

	window.history.pushState({ racingProjectsView: true }, "", racingProjectsUrl);
}

function clearRacingProjectsRevealTimeout() {
	if (!racingProjectsRevealTimeout) {
		return;
	}

	window.clearTimeout(racingProjectsRevealTimeout);
	racingProjectsRevealTimeout = null;
}

function clearRacingProjectsExitTimeout() {
	if (!racingProjectsExitTimeout) {
		return;
	}

	window.clearTimeout(racingProjectsExitTimeout);
	racingProjectsExitTimeout = null;
}

function clearRacingBackAnimationTimeouts() {
	if (racingBackTilesTimeout) {
		window.clearTimeout(racingBackTilesTimeout);
		racingBackTilesTimeout = null;
	}

	if (racingBackSelectionTimeout) {
		window.clearTimeout(racingBackSelectionTimeout);
		racingBackSelectionTimeout = null;
	}
}

function clearRacingRestartedPreviewInterval() {
	if (!racingRestartedPreviewInterval) {
		return;
	}

	window.clearInterval(racingRestartedPreviewInterval);
	racingRestartedPreviewInterval = null;
}

function resetIndexRacingView() {
	clearRacingProjectsRevealTimeout();
	clearRacingProjectsExitTimeout();
	clearRacingBackAnimationTimeouts();

	if (racingProjectsElement) {
		racingProjectsElement.classList.add("isLeaving");
		racingProjectsElement.classList.remove("isVisible");
		racingProjectsExitTimeout = window.setTimeout(() => {
			racingProjectsElement.classList.remove("isLeaving");
			racingProjectsExitTimeout = null;
		}, racingProjectsExitDuration);
	}

	if (racingReturnButtonElement) {
		racingReturnButtonElement.classList.remove("isVisible");
	}

	racingBackTilesTimeout = window.setTimeout(() => {
		if (racingProjectsContainer) {
			racingProjectsContainer.classList.remove("isClicked");
			racingProjectsContainer.style.setProperty("--clickedOffsetX", "0vw");
			racingProjectsContainer.style.setProperty("--clickedOffsetY", "0vh");
		}

		racingBackTilesTimeout = null;
	}, indexBackAnimationStepDelay);

	racingBackSelectionTimeout = window.setTimeout(() => {
		racingProjectsPreviewBoxes.forEach(box => {
			box.classList.remove("isClickedBox", "isPreviewing");
		});

		if (typeof setDynamicTintEnabled === "function") {
			setDynamicTintEnabled();
		}

		if (typeof showNextPreview === "function") {
			showNextPreview();
			clearRacingRestartedPreviewInterval();
			racingRestartedPreviewInterval = window.setInterval(showNextPreview, 5000);
		}

		racingBackSelectionTimeout = null;
	}, indexBackAnimationStepDelay * 2);
}

function isIndexRacingViewActive() {
	return Boolean(
		racingProjectsRevealTimeout ||
		racingProjectsElement?.classList.contains("isVisible") ||
		racingReturnButtonElement?.classList.contains("isVisible")
	);
}

async function loadRacingProjects() {
	if (racingProjectsLoaded) {
		return racingProjectsElement;
	}

	const response = await fetch(racingProjectsSource);

	if (!response.ok) {
		return null;
	}

	const html = await response.text();
	const sourceDocument = new DOMParser().parseFromString(html, "text/html");
	const sourceTimeline = sourceDocument.querySelector("#timeline");

	if (!sourceTimeline) {
		return null;
	}

	racingProjectsElement = sourceTimeline.cloneNode(true);
	racingProjectsElement.classList.add("indexRacingTimeline");
	document.body.appendChild(racingProjectsElement);

	racingReturnButtonElement = racingProjectsElement.querySelector(".returnButton");

	if (racingReturnButtonElement) {
		racingReturnButtonElement.addEventListener("click", event => {
			event.preventDefault();
			window.history.back();
		});
	}

	initializeRacingTimeline(racingProjectsElement);
	racingProjectsLoaded = true;

	return racingProjectsElement;
}

const racingProjectsLoad = loadRacingProjects().catch(() => null);

if (racingProjectsBox) {
	racingProjectsBox.addEventListener("click", async () => {
		clearRacingBackAnimationTimeouts();
		clearRacingRestartedPreviewInterval();
		pushRacingProjectsHistoryState();

		const projectsElement = await racingProjectsLoad;

		if (!projectsElement) {
			return;
		}

		clearRacingProjectsRevealTimeout();
		clearRacingProjectsExitTimeout();
		racingProjectsRevealTimeout = window.setTimeout(() => {
			projectsElement.classList.remove("isLeaving");
			projectsElement.classList.add("isVisible");
			if (racingReturnButtonElement) {
				racingReturnButtonElement.classList.add("isVisible");
			}
			racingProjectsRevealTimeout = null;
		}, racingProjectsRevealDelay);
	});
}

racingProjectsPreviewBoxes.forEach(box => {
	box.addEventListener("click", clearRacingRestartedPreviewInterval);
});

window.addEventListener("popstate", () => {
	if (!window.location.pathname.endsWith(racingProjectsUrl) && isIndexRacingViewActive()) {
		resetIndexRacingView();
	}
});
