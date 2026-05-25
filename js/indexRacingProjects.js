const racingProjectsSource = "Racing.html";
const racingProjectsRevealDelay = 1000;
const racingProjectsExitDuration = 5000;
const racingProjectsUrl = "Racing.html";
const racingProjectsBox = document.querySelector(".selectionBox.rightBox");
const racingProjectsContainer = document.querySelector(".container");
const racingProjectsPreviewBoxes = Array.from(document.querySelectorAll(
	".selectionBox.leftBox, .selectionBox.centerBox, .selectionBox.rightBox"
));
const racingProjectBackgrounds = Array.from(document.querySelectorAll(".selectionBox.rightBox > img"));

let racingProjectsLoaded = false;
let racingProjectsElement = null;
let racingReturnButtonElement = null;
let racingProjectsRevealTimeout = null;
let racingProjectsExitTimeout = null;
let racingRestartedPreviewInterval = null;

function setActiveRacingProjectBackground(index) {
	racingProjectBackgrounds.forEach((background, backgroundIndex) => {
		background.classList.toggle("isPreviewImage", backgroundIndex === index);
	});
}

function initializeRacingProjects(projectsElement) {
	const projects = Array.from(projectsElement.querySelectorAll(":scope > .project"));
	let visibleProjectIndex = 0;

	projects.forEach((project, index) => {
		project.dataset.index = index;

		if (window.getComputedStyle(project).display !== "none") {
			project.style.setProperty("--projectDelay", `${visibleProjectIndex * 50}ms`);
			visibleProjectIndex++;
		}

		project.addEventListener("mouseenter", () => {
			setActiveRacingProjectBackground(index);
		});

		project.addEventListener("focus", () => {
			setActiveRacingProjectBackground(index);
		});
	});

	setActiveRacingProjectBackground(0);
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

	if (racingProjectsContainer) {
		racingProjectsContainer.classList.remove("isClicked");
		racingProjectsContainer.style.setProperty("--clickedOffsetX", "0vw");
		racingProjectsContainer.style.setProperty("--clickedOffsetY", "0vh");
	}

	racingProjectsPreviewBoxes.forEach(box => {
		box.classList.remove("isClickedBox", "isPreviewing");
	});

	if (typeof showNextPreview === "function") {
		showNextPreview();
		clearRacingRestartedPreviewInterval();
		racingRestartedPreviewInterval = window.setInterval(showNextPreview, 5000);
	}
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
	const sourceProjects = sourceDocument.querySelector("#projects");
	const sourceReturnButton = sourceDocument.querySelector(".returnButton");

	if (!sourceProjects) {
		return null;
	}

	racingProjectsElement = sourceProjects.cloneNode(true);
	racingProjectsElement.classList.add("indexRacingProjects");
	document.body.appendChild(racingProjectsElement);

	if (sourceReturnButton) {
		racingReturnButtonElement = sourceReturnButton.cloneNode(true);
		racingReturnButtonElement.classList.add("indexRacingReturnButton");
		racingReturnButtonElement.addEventListener("click", event => {
			event.preventDefault();
			window.history.back();
		});
		document.body.appendChild(racingReturnButtonElement);
	}

	initializeRacingProjects(racingProjectsElement);
	racingProjectsLoaded = true;

	return racingProjectsElement;
}

const racingProjectsLoad = loadRacingProjects().catch(() => null);

if (racingProjectsBox) {
	racingProjectsBox.addEventListener("click", async () => {
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
