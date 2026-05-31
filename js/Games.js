const projects = Array.from(document.querySelectorAll("#projects > .project"));
const backgrounds = Array.from(document.querySelectorAll("#backgrounds > img"));
const standaloneGamesPage = document.body.contains(document.getElementById("backgrounds"));
const projectExpansionLayerDuration = 1500;
const projectExpansionImageDuration = 1500;
const expansionDuration = Math.max(projectExpansionLayerDuration, projectExpansionImageDuration);
const projectAssetWaitLimit = 3000;

let activeExpansionLayer = null;
let activeProject = null;
let activeContentLoad = null;
let loadedProjectContent = null;

document.documentElement.style.setProperty("--projectExpansionLayerDuration", `${projectExpansionLayerDuration}ms`);
document.documentElement.style.setProperty("--projectExpansionImageDuration", `${projectExpansionImageDuration}ms`);

function setActiveBackground(index) {
	backgrounds.forEach((background, backgroundIndex) => {
		background.classList.toggle("active", backgroundIndex === index);
	});
}

function normalizeResourceUrl(url) {
	return new URL(url, window.location.href).href;
}

function isStylesheetLoaded(href) {
	const stylesheetUrl = normalizeResourceUrl(href);

	return Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(link => {
		return normalizeResourceUrl(link.getAttribute("href")) === stylesheetUrl;
	});
}

function loadProjectStylesheet(stylesheet) {
	const href = stylesheet.getAttribute("href");

	if (!href || isStylesheetLoaded(href)) {
		return Promise.resolve();
	}

	return new Promise(resolve => {
		const importedStylesheet = stylesheet.cloneNode(true);
		importedStylesheet.href = normalizeResourceUrl(href);
		importedStylesheet.dataset.loadedProjectResource = "true";
		importedStylesheet.addEventListener("load", resolve, { once: true });
		importedStylesheet.addEventListener("error", resolve, { once: true });
		document.head.appendChild(importedStylesheet);
	});
}

async function importProjectStyles(sourceDocument) {
	const stylesheets = Array.from(sourceDocument.querySelectorAll('link[rel="stylesheet"]'));

	await Promise.all(stylesheets.map(loadProjectStylesheet));
}

function isScriptLoaded(src) {
	const scriptUrl = normalizeResourceUrl(src);

	return Array.from(document.querySelectorAll("script[src]")).some(script => {
		return normalizeResourceUrl(script.getAttribute("src")) === scriptUrl;
	});
}

function runInlineProjectScript(sourceScript) {
	const script = document.createElement("script");
	script.textContent = sourceScript.textContent;
	script.dataset.loadedProjectResource = "true";
	document.body.appendChild(script);
}

function loadProjectScript(src) {
	if (isScriptLoaded(src)) {
		return Promise.resolve();
	}

	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = normalizeResourceUrl(src);
		script.async = false;
		script.dataset.loadedProjectResource = "true";
		script.addEventListener("load", resolve, { once: true });
		script.addEventListener("error", reject, { once: true });
		document.body.appendChild(script);
	});
}

async function importProjectScripts(sourceDocument) {
	const scripts = Array.from(sourceDocument.querySelectorAll("script"));

	for (const sourceScript of scripts) {
		const src = sourceScript.getAttribute("src");

		if (!src) {
			runInlineProjectScript(sourceScript);
			continue;
		}

		if (src.includes("backButton.js")) {
			continue;
		}

		await loadProjectScript(src);
	}
}

function getProjectContentFrame(sourceDocument) {
	return sourceDocument.querySelector("#contentframe, #contentFrame");
}

function waitForImage(image) {
	if (image.complete) {
		return Promise.resolve();
	}

	return new Promise(resolve => {
		const timeout = window.setTimeout(resolve, projectAssetWaitLimit);
		const finish = () => {
			window.clearTimeout(timeout);
			resolve();
		};

		image.addEventListener("load", finish, { once: true });
		image.addEventListener("error", finish, { once: true });
	});
}

async function waitForProjectContentImages(contentContainer) {
	const images = Array.from(contentContainer.querySelectorAll("img"));

	await Promise.all(images.map(waitForImage));
}

async function loadProjectContent(url) {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Could not load ${url}`);
	}

	const html = await response.text();
	const sourceDocument = new DOMParser().parseFromString(html, "text/html");
	const contentFrame = getProjectContentFrame(sourceDocument);

	if (!contentFrame) {
		throw new Error(`No #contentframe found in ${url}`);
	}

	await importProjectStyles(sourceDocument);

	const contentContainer = document.createElement("div");
	contentContainer.className = "loadedProjectContent";
	contentContainer.style.opacity = "0";
	contentContainer.appendChild(contentFrame.cloneNode(true));
	contentContainer.projectSourceDocument = sourceDocument;

	return contentContainer;
}

function initializeLoadedProjectContentLinks(contentContainer) {
	const links = Array.from(contentContainer.querySelectorAll('a[href^="#"]'));

	links.forEach(link => {
		link.addEventListener("click", event => {
			const target = contentContainer.querySelector(link.getAttribute("href"));

			if (!target) {
				return;
			}

			event.preventDefault();
			target.scrollIntoView({ behavior: "smooth" });
		});
	});
}

function showProjectContent(contentContainer) {
	if (loadedProjectContent) {
		loadedProjectContent.remove();
	}

	loadedProjectContent = contentContainer;
	document.body.classList.add("hasLoadedProjectContent");
	document.body.appendChild(loadedProjectContent);
	window.scrollTo(0, 0);
	loadedProjectContent.scrollTop = 0;
	initializeLoadedProjectContentLinks(loadedProjectContent);

	loadedProjectContent.getBoundingClientRect();

	waitForProjectContentImages(loadedProjectContent).then(() => {
		if (loadedProjectContent !== contentContainer) {
			return;
		}

		window.requestAnimationFrame(() => {
			loadedProjectContent.style.opacity = "";
			loadedProjectContent.classList.add("isVisible");
		});
	});

	importProjectScripts(contentContainer.projectSourceDocument).catch(error => {
		console.error(error);
	});
}

function createExpansionLayer(project, image) {
	const projectBounds = project.getBoundingClientRect();
	const imageBounds = image.getBoundingClientRect();
	const expansionLayer = document.createElement("div");
	const expansionImage = image.cloneNode();

	expansionLayer.className = "projectExpansionLayer";
	expansionImage.className = "projectExpansionImage";
	expansionImage.removeAttribute("style");

	expansionLayer.style.setProperty("--projectClipTop", `${projectBounds.top}px`);
	expansionLayer.style.setProperty("--projectClipRight", `${window.innerWidth - projectBounds.right}px`);
	expansionLayer.style.setProperty("--projectClipBottom", `${window.innerHeight - projectBounds.bottom}px`);
	expansionLayer.style.setProperty("--projectClipLeft", `${projectBounds.left}px`);
	expansionLayer.style.setProperty("--projectImageLeft", `${imageBounds.left}px`);
	expansionLayer.style.setProperty("--projectImageTop", `${imageBounds.top}px`);
	expansionLayer.style.setProperty("--projectImageWidth", `${imageBounds.width}px`);
	expansionLayer.style.setProperty("--projectImageHeight", `${imageBounds.height}px`);

	expansionLayer.appendChild(expansionImage);
	document.body.appendChild(expansionLayer);

	return expansionLayer;
}

function expandProject(event, project) {
	event.preventDefault();

	if (project.classList.contains("isExpanding")) {
		return;
	}

	if (activeExpansionLayer) {
		activeExpansionLayer.remove();
	}

	if (activeProject) {
		activeProject.classList.remove("isExpanding");
	}

	const image = project.querySelector(".projectImage");

	if (!image) {
		return;
	}

	document.dispatchEvent(new CustomEvent("gamesProjectOpening", {
		detail: { project }
	}));

	activeProject = project;
	activeExpansionLayer = createExpansionLayer(project, image);
	activeContentLoad = loadProjectContent(project.href).catch(error => {
		console.error(error);
		return null;
	});
	project.classList.add("isExpanding");

	window.requestAnimationFrame(() => {
		window.requestAnimationFrame(() => {
			activeExpansionLayer.classList.add("isExpanded");
		});
	});

	window.setTimeout(() => {
		if (activeExpansionLayer) {
			activeExpansionLayer.classList.add("isComplete");
		}

		activeContentLoad.then(contentContainer => {
			if (contentContainer && activeProject === project) {
				showProjectContent(contentContainer);
			}
		});
	}, expansionDuration);
}

function initializeGamesProjectExpansion(projectsElement) {
	if (!projectsElement) {
		return;
	}

	const expansionProjects = Array.from(projectsElement.querySelectorAll(":scope > .project"));

	expansionProjects.forEach(project => {
		if (window.getComputedStyle(project).display === "none" || project.dataset.expansionInitialized === "true") {
			return;
		}

		project.dataset.expansionInitialized = "true";
		project.addEventListener("click", event => {
			expandProject(event, project);
		});
	});
}

window.initializeGamesProjectExpansion = initializeGamesProjectExpansion;

let visibleProjectIndex = 0;

projects.forEach(project => {
	if (window.getComputedStyle(project).display === "none") {
		return;
	}

	const projectIndex = visibleProjectIndex;
	visibleProjectIndex++;
	project.dataset.index = projectIndex;

	project.addEventListener("mouseenter", () => {
		setActiveBackground(projectIndex);
	});

	project.addEventListener("focus", () => {
		setActiveBackground(projectIndex);
	});
});

if (standaloneGamesPage) {
	initializeGamesProjectExpansion(document.getElementById("projects"));
	setActiveBackground(0);
}
