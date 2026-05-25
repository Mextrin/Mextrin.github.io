const gamesProjectsSource = "Games.html";
const gamesProjectsRevealDelay = 1000;
const gamesProjectsBox = document.querySelector(".selectionBox.centerBox");
const gamesProjectBackgrounds = Array.from(document.querySelectorAll(".selectionBox.centerBox > img"));

let gamesProjectsLoaded = false;
let gamesProjectsElement = null;

function setActiveGamesProjectBackground(index) {
	gamesProjectBackgrounds.forEach((background, backgroundIndex) => {
		background.classList.toggle("isPreviewImage", backgroundIndex === index);
	});
}

function initializeGamesProjects(projectsElement) {
	const projects = Array.from(projectsElement.querySelectorAll(":scope > .project"));

	projects.forEach((project, index) => {
		project.dataset.index = index;

		project.addEventListener("mouseenter", () => {
			setActiveGamesProjectBackground(index);
		});

		project.addEventListener("focus", () => {
			setActiveGamesProjectBackground(index);
		});
	});

	setActiveGamesProjectBackground(0);
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

	if (!sourceProjects) {
		return null;
	}

	gamesProjectsElement = sourceProjects.cloneNode(true);
	gamesProjectsElement.classList.add("indexGamesProjects");
	document.body.appendChild(gamesProjectsElement);
	initializeGamesProjects(gamesProjectsElement);
	gamesProjectsLoaded = true;

	return gamesProjectsElement;
}

const gamesProjectsLoad = loadGamesProjects().catch(() => null);

if (gamesProjectsBox) {
	gamesProjectsBox.addEventListener("click", async () => {
		const projectsElement = await gamesProjectsLoad;

		if (!projectsElement) {
			return;
		}

		window.setTimeout(() => {
			projectsElement.classList.add("isVisible");
		}, gamesProjectsRevealDelay);
	});
}
