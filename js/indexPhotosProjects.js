const photosProjectsSource = "Photos.html";
const photosProjectsRevealDelay = 1500;
const photosProjectsExitDuration = 5000;
const photosCollectionColumnDelayStep = 100;
const photosCollectionRowDelayStep = 200;
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

function initializePhotosCollections(collectionsElement) {
	const collectionItems = Array.from(collectionsElement.querySelectorAll(":scope > .collection"))
		.filter(collection => window.getComputedStyle(collection).visibility !== "hidden")
		.map(collection => ({
			collection,
			rect: collection.getBoundingClientRect()
		}));

	const columns = [...new Set(collectionItems.map(item => Math.round(item.rect.left)))]
		.sort((first, second) => first - second);
	const rows = [...new Set(collectionItems.map(item => Math.round(item.rect.top)))]
		.sort((first, second) => first - second);
	const maxColumnIndex = columns.length - 1;
	const maxRowIndex = rows.length - 1;

	collectionItems.forEach(({ collection, rect }) => {
		const columnIndex = columns.indexOf(Math.round(rect.left));
		const rowIndex = rows.indexOf(Math.round(rect.top));
		const columnsFromRight = maxColumnIndex - columnIndex;
		const delay = (columnsFromRight * photosCollectionColumnDelayStep)
			+ (rowIndex * photosCollectionRowDelayStep);

		collection.style.setProperty("--collectionDelay", `${delay}ms`);
	});
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

	if (typeof setDynamicTintEnabled === "function") {
		setDynamicTintEnabled();
	}

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
	const sourceCollections = sourceDocument.querySelector("#collections");
	const sourceReturnButton = sourceDocument.querySelector(".returnButton");

	if (!sourceCollections) {
		return null;
	}

	photosProjectsElement = sourceCollections.cloneNode(true);
	photosProjectsElement.classList.add("indexPhotosCollections");
	document.body.appendChild(photosProjectsElement);

	if (sourceReturnButton) {
		photosReturnButtonElement = sourceReturnButton.cloneNode(true);
		photosReturnButtonElement.classList.add("indexPhotosReturnButton");
		photosReturnButtonElement.addEventListener("click", event => {
			event.preventDefault();
			window.history.back();
		});
		document.body.appendChild(photosReturnButtonElement);
	}

	initializePhotosCollections(photosProjectsElement);
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
