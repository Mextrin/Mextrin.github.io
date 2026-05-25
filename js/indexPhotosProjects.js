const photosProjectsSource = "Photos.html";
const photosProjectsRevealDelay = 1000;
const photosProjectsExitDuration = 5000;
const photosProjectsUrl = "Photos.html";
const photosProjectsBox = document.querySelector(".selectionBox.leftBox");
const photosProjectsContainer = document.querySelector(".container");
const photosProjectsPreviewBoxes = Array.from(document.querySelectorAll(
	".selectionBox.leftBox, .selectionBox.centerBox, .selectionBox.rightBox"
));

let photosProjectsLoaded = false;
let photosProjectsElement = null;
let photosReturnButtonElement = null;
let photosProjectsRevealTimeout = null;
let photosProjectsExitTimeout = null;
let photosRestartedPreviewInterval = null;
let photosCountdownInterval = null;

function formatPhotosCountdown(milliseconds) {
	const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

function initializePhotosTimeline(timelineElement) {
	const timelineItems = Array.from(timelineElement.children);
	const timelineImageGroups = Array.from(timelineElement.querySelectorAll(".timelineImages"));

	timelineItems.forEach((item, index) => {
		const reverseIndex = timelineItems.length - 1 - index;
		item.style.setProperty("--timelineDelay", `${reverseIndex * 100}ms`);
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

			countdown.textContent = formatPhotosCountdown(targetTime - now);
		});
	}

	if (countdowns.length > 0 && !photosCountdownInterval) {
		updateCountdowns();
		photosCountdownInterval = window.setInterval(updateCountdowns, 1000);
	}
}

function pushPhotosProjectsHistoryState() {
	if (window.location.pathname.endsWith(photosProjectsUrl)) {
		return;
	}

	window.history.pushState({ photosProjectsView: true }, "", photosProjectsUrl);
}

function clearPhotosProjectsRevealTimeout() {
	if (!photosProjectsRevealTimeout) {
		return;
	}

	window.clearTimeout(photosProjectsRevealTimeout);
	photosProjectsRevealTimeout = null;
}

function clearPhotosProjectsExitTimeout() {
	if (!photosProjectsExitTimeout) {
		return;
	}

	window.clearTimeout(photosProjectsExitTimeout);
	photosProjectsExitTimeout = null;
}

function clearPhotosRestartedPreviewInterval() {
	if (!photosRestartedPreviewInterval) {
		return;
	}

	window.clearInterval(photosRestartedPreviewInterval);
	photosRestartedPreviewInterval = null;
}

function resetIndexPhotosView() {
	clearPhotosProjectsRevealTimeout();
	clearPhotosProjectsExitTimeout();

	if (photosProjectsElement) {
		photosProjectsElement.classList.add("isLeaving");
		photosProjectsElement.classList.remove("isVisible");
		photosProjectsExitTimeout = window.setTimeout(() => {
			photosProjectsElement.classList.remove("isLeaving");
			photosProjectsExitTimeout = null;
		}, photosProjectsExitDuration);
	}

	if (photosReturnButtonElement) {
		photosReturnButtonElement.classList.remove("isVisible");
	}

	if (photosProjectsContainer) {
		photosProjectsContainer.classList.remove("isClicked");
		photosProjectsContainer.style.setProperty("--clickedOffsetX", "0vw");
		photosProjectsContainer.style.setProperty("--clickedOffsetY", "0vh");
	}

	photosProjectsPreviewBoxes.forEach(box => {
		box.classList.remove("isClickedBox", "isPreviewing");
	});

	if (typeof showNextPreview === "function") {
		showNextPreview();
		clearPhotosRestartedPreviewInterval();
		photosRestartedPreviewInterval = window.setInterval(showNextPreview, 5000);
	}
}

function isIndexPhotosViewActive() {
	return Boolean(
		photosProjectsRevealTimeout ||
		photosProjectsElement?.classList.contains("isVisible") ||
		photosReturnButtonElement?.classList.contains("isVisible")
	);
}

async function loadPhotosProjects() {
	if (photosProjectsLoaded) {
		return photosProjectsElement;
	}

	const response = await fetch(photosProjectsSource);

	if (!response.ok) {
		return null;
	}

	const html = await response.text();
	const sourceDocument = new DOMParser().parseFromString(html, "text/html");
	const sourceTimeline = sourceDocument.querySelector("#timeline");

	if (!sourceTimeline) {
		return null;
	}

	photosProjectsElement = sourceTimeline.cloneNode(true);
	photosProjectsElement.classList.add("indexPhotosTimeline");
	document.body.appendChild(photosProjectsElement);

	photosReturnButtonElement = photosProjectsElement.querySelector(".returnButton");

	if (photosReturnButtonElement) {
		photosReturnButtonElement.addEventListener("click", event => {
			event.preventDefault();
			window.history.back();
		});
	}

	initializePhotosTimeline(photosProjectsElement);
	photosProjectsLoaded = true;

	return photosProjectsElement;
}

const photosProjectsLoad = loadPhotosProjects().catch(() => null);

if (photosProjectsBox) {
	photosProjectsBox.addEventListener("click", async () => {
		clearPhotosRestartedPreviewInterval();
		pushPhotosProjectsHistoryState();

		const projectsElement = await photosProjectsLoad;

		if (!projectsElement) {
			return;
		}

		clearPhotosProjectsRevealTimeout();
		clearPhotosProjectsExitTimeout();
		photosProjectsRevealTimeout = window.setTimeout(() => {
			projectsElement.classList.remove("isLeaving");
			projectsElement.classList.add("isVisible");
			if (photosReturnButtonElement) {
				photosReturnButtonElement.classList.add("isVisible");
			}
			photosProjectsRevealTimeout = null;
		}, photosProjectsRevealDelay);
	});
}

photosProjectsPreviewBoxes.forEach(box => {
	box.addEventListener("click", clearPhotosRestartedPreviewInterval);
});

window.addEventListener("popstate", () => {
	if (!window.location.pathname.endsWith(photosProjectsUrl) && isIndexPhotosViewActive()) {
		resetIndexPhotosView();
	}
});
