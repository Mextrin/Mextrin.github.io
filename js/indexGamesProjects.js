const gamesProjectsSource = "Games.html";
const gamesProjectsRevealDelay = 1000;
const gamesProjectsExitDuration = 5000;
const gamesProjectsUrl = "Games.html";
const gamesProjectsBox = document.querySelector(".selectionBox.centerBox");
const gamesProjectsContainer = document.querySelector(".container");
const gamesProjectsPreviewBoxes = Array.from(document.querySelectorAll(
	".selectionBox.leftBox, .selectionBox.centerBox, .selectionBox.rightBox"
));
const gamesProjectBackgrounds = Array.from(document.querySelectorAll(".selectionBox.centerBox > img"));

let gamesProjectsLoaded = false;
let gamesProjectsElement = null;
let gamesReturnButtonElement = null;
let gamesProjectsRevealTimeout = null;
let gamesProjectsExitTimeout = null;
let gamesBackTilesTimeout = null;
let gamesBackSelectionTimeout = null;
let restartedPreviewInterval = null;

function setActiveGamesProjectBackground(index) {
	gamesProjectBackgrounds.forEach((background, backgroundIndex) => {
		background.classList.toggle("isPreviewImage", backgroundIndex === index);
	});
}

function initializeGamesProjects(projectsElement) {
	const projects = Array.from(projectsElement.querySelectorAll(":scope > .project"));
	let visibleProjectIndex = 0;

	projects.forEach((project, index) => {
		project.dataset.index = index;

		if (window.getComputedStyle(project).display !== "none") {
			project.style.setProperty("--projectDelay", `${visibleProjectIndex * 100}ms`);
			visibleProjectIndex++;
		}

		project.addEventListener("mouseenter", () => {
			setActiveGamesProjectBackground(index);
		});

		project.addEventListener("focus", () => {
			setActiveGamesProjectBackground(index);
		});
	});

	setActiveGamesProjectBackground(0);
}

function pushGamesProjectsHistoryState() {
	if (window.location.pathname.endsWith(gamesProjectsUrl)) {
		return;
	}

	window.history.pushState({ gamesProjectsView: true }, "", gamesProjectsUrl);
}

function clearGamesProjectsRevealTimeout() {
	if (!gamesProjectsRevealTimeout) {
		return;
	}

	window.clearTimeout(gamesProjectsRevealTimeout);
	gamesProjectsRevealTimeout = null;
}

function clearGamesProjectsExitTimeout() {
	if (!gamesProjectsExitTimeout) {
		return;
	}

	window.clearTimeout(gamesProjectsExitTimeout);
	gamesProjectsExitTimeout = null;
}

function clearGamesBackAnimationTimeouts() {
	if (gamesBackTilesTimeout) {
		window.clearTimeout(gamesBackTilesTimeout);
		gamesBackTilesTimeout = null;
	}

	if (gamesBackSelectionTimeout) {
		window.clearTimeout(gamesBackSelectionTimeout);
		gamesBackSelectionTimeout = null;
	}
}

function clearRestartedPreviewInterval() {
	if (!restartedPreviewInterval) {
		return;
	}

	window.clearInterval(restartedPreviewInterval);
	restartedPreviewInterval = null;
}

function resetIndexGamesView() {
	clearGamesProjectsRevealTimeout();
	clearGamesProjectsExitTimeout();
	clearGamesBackAnimationTimeouts();

	if (gamesProjectsElement) {
		gamesProjectsElement.classList.add("isLeaving");
		gamesProjectsElement.classList.remove("isVisible");
		gamesProjectsExitTimeout = window.setTimeout(() => {
			gamesProjectsElement.classList.remove("isLeaving");
			gamesProjectsExitTimeout = null;
		}, gamesProjectsExitDuration);
	}

	if (gamesReturnButtonElement) {
		gamesReturnButtonElement.classList.remove("isVisible");
	}

	gamesBackTilesTimeout = window.setTimeout(() => {
		if (gamesProjectsContainer) {
			gamesProjectsContainer.classList.remove("isClicked");
			gamesProjectsContainer.style.setProperty("--clickedOffsetX", "0vw");
			gamesProjectsContainer.style.setProperty("--clickedOffsetY", "0vh");
		}

		gamesBackTilesTimeout = null;
	}, indexBackAnimationStepDelay);

	gamesBackSelectionTimeout = window.setTimeout(() => {
		gamesProjectsPreviewBoxes.forEach(box => {
			box.classList.remove("isClickedBox", "isPreviewing");
		});

		if (typeof setDynamicTintEnabled === "function") {
			setDynamicTintEnabled();
		}

		if (typeof showNextPreview === "function") {
			showNextPreview();
			clearRestartedPreviewInterval();
			restartedPreviewInterval = window.setInterval(showNextPreview, 5000);
		}

		gamesBackSelectionTimeout = null;
	}, indexBackAnimationStepDelay * 2);
}

function isIndexGamesViewActive() {
	return Boolean(
		gamesProjectsRevealTimeout ||
		gamesProjectsElement?.classList.contains("isVisible") ||
		gamesReturnButtonElement?.classList.contains("isVisible")
	);
}

async function loadGamesProjects() {
	if (gamesProjectsLoaded) {
		return gamesProjectsElement;
	}

	const response = await fetch(gamesProjectsSource);

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

	gamesProjectsElement = sourceProjects.cloneNode(true);
	gamesProjectsElement.classList.add("indexGamesProjects");
	document.body.appendChild(gamesProjectsElement);

	if (sourceReturnButton) {
		gamesReturnButtonElement = sourceReturnButton.cloneNode(true);
		gamesReturnButtonElement.classList.add("indexGamesReturnButton");
		gamesReturnButtonElement.addEventListener("click", event => {
			event.preventDefault();
			window.history.back();
		});
		document.body.appendChild(gamesReturnButtonElement);
	}

	initializeGamesProjects(gamesProjectsElement);
	gamesProjectsLoaded = true;

	return gamesProjectsElement;
}

const gamesProjectsLoad = loadGamesProjects().catch(() => null);

if (gamesProjectsBox) {
	gamesProjectsBox.addEventListener("click", async () => {
		clearGamesBackAnimationTimeouts();
		clearRestartedPreviewInterval();
		pushGamesProjectsHistoryState();

		const projectsElement = await gamesProjectsLoad;

		if (!projectsElement) {
			return;
		}

		clearGamesProjectsRevealTimeout();
		clearGamesProjectsExitTimeout();
		gamesProjectsRevealTimeout = window.setTimeout(() => {
			projectsElement.classList.remove("isLeaving");
			projectsElement.classList.add("isVisible");
			if (gamesReturnButtonElement) {
				gamesReturnButtonElement.classList.add("isVisible");
			}
			gamesProjectsRevealTimeout = null;
		}, gamesProjectsRevealDelay);
	});
}

gamesProjectsPreviewBoxes.forEach(box => {
	box.addEventListener("click", clearRestartedPreviewInterval);
});

window.addEventListener("popstate", () => {
	if (!window.location.pathname.endsWith(gamesProjectsUrl) && isIndexGamesViewActive()) {
		resetIndexGamesView();
	}
});
