let activePhotoBackgroundIndex = 0;
let activePhotoCollection = null;
let activePhotoBackgrounds = [];

function getActiveCollectionImage(collection) {
	const images = Array.from(collection.querySelectorAll(":scope > img"));

	if (images.length === 0) {
		return null;
	}

	const activeIndex = Number(collection.dataset.activePhotoIndex);

	if (!Number.isNaN(activeIndex) && images[activeIndex]) {
		return images[activeIndex];
	}

	return images[0];
}

function setActivePhotoBackground(image) {
	if (!image || activePhotoBackgrounds.length === 0) {
		return;
	}

	const imageSource = image.currentSrc || image.src;

	if (!imageSource) {
		return;
	}

	const currentBackground = activePhotoBackgrounds[activePhotoBackgroundIndex];

	if (currentBackground && currentBackground.classList.contains("active") && currentBackground.src === imageSource) {
		return;
	}

	const nextPhotoBackgroundIndex = activePhotoBackgrounds.length > 1
		? (activePhotoBackgroundIndex + 1) % activePhotoBackgrounds.length
		: activePhotoBackgroundIndex;
	const nextBackground = activePhotoBackgrounds[nextPhotoBackgroundIndex];

	nextBackground.src = imageSource;
	nextBackground.alt = image.alt || "";
	activePhotoBackgrounds.forEach((background, backgroundIndex) => {
		background.classList.toggle("active", backgroundIndex === nextPhotoBackgroundIndex);
	});
	activePhotoBackgroundIndex = nextPhotoBackgroundIndex;
}

function setActivePhotoCollection(collection) {
	activePhotoCollection = collection;
	setActivePhotoBackground(getActiveCollectionImage(collection));
}

function updateActivePhotoCollectionBackground(collection) {
	if (collection === activePhotoCollection) {
		setActivePhotoBackground(getActiveCollectionImage(collection));
	}
}

function getPhotoBackgroundImages(backgroundsRoot) {
	if (backgroundsRoot.id === "backgrounds") {
		return Array.from(backgroundsRoot.querySelectorAll(":scope > img"));
	}

	return Array.from(backgroundsRoot.querySelectorAll("#backgrounds > img"));
}

function initializePhotoCollectionBackgrounds(collectionsRoot = document, backgroundsRoot = document) {
	const photoCollections = Array.from(collectionsRoot.querySelectorAll("#collections > .collection, .collection"));
	activePhotoBackgrounds = getPhotoBackgroundImages(backgroundsRoot);
	activePhotoBackgroundIndex = 0;
	activePhotoCollection = null;

	photoCollections.forEach(collection => {
		if (collection.dataset.photoBackgroundInitialized === "true" || window.getComputedStyle(collection).visibility === "hidden") {
			return;
		}

		collection.dataset.photoBackgroundInitialized = "true";
		collection.addEventListener("mouseenter", () => {
			setActivePhotoCollection(collection);
		});

		collection.addEventListener("focusin", () => {
			setActivePhotoCollection(collection);
		});
	});

	const initialCollection = photoCollections.find(collection => window.getComputedStyle(collection).visibility !== "hidden");

	if (initialCollection) {
		setActivePhotoCollection(initialCollection);
	}
}

window.initializePhotoCollectionBackgrounds = initializePhotoCollectionBackgrounds;
window.updateActivePhotoCollectionBackground = updateActivePhotoCollectionBackground;
initializePhotoCollectionBackgrounds();

const timelineImageGroups = Array.from(document.querySelectorAll(".timelineImages"));

timelineImageGroups.forEach((imageGroup) => {
	Array.from(imageGroup.querySelectorAll("img")).forEach((image, index) => {
		image.style.setProperty("--imageIndex", index);
	});
});

if (document.body.classList.contains("photosPage")) {
	const timeline = document.querySelector("body.photosPage #timeline");
	const lightbox = document.createElement("div");
	const lightboxImage = document.createElement("img");

	lightbox.className = "photoLightbox";
	lightbox.setAttribute("aria-hidden", "true");

	lightboxImage.alt = "";
	lightbox.appendChild(lightboxImage);
	document.body.appendChild(lightbox);

	function closePhotoLightbox() {
		lightbox.classList.remove("isOpen");
		lightbox.setAttribute("aria-hidden", "true");
		lightboxImage.removeAttribute("src");
		lightboxImage.alt = "";
	}

	function openPhotoLightbox(image) {
		lightboxImage.src = image.currentSrc || image.src;
		lightboxImage.alt = image.alt || "Photo";
		lightbox.classList.add("isOpen");
		lightbox.setAttribute("aria-hidden", "false");
	}

	if (timeline) {
		timeline.addEventListener("click", (event) => {
			const image = event.target.closest(".timelineImages img");

			if (!image) {
				return;
			}

			event.preventDefault();
			openPhotoLightbox(image);
		});
	}

	lightbox.addEventListener("click", closePhotoLightbox);

	window.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && lightbox.classList.contains("isOpen")) {
			closePhotoLightbox();
		}
	});
}

const countdowns = Array.from(document.querySelectorAll(".countdown time"));

function formatCountdown(milliseconds) {
	const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

function updateCountdowns() {
	const now = Date.now();

	countdowns.forEach((countdown) => {
		const targetDate = new Date(countdown.dateTime);
		const targetTime = targetDate.getTime();

		if (Number.isNaN(targetTime)) {
			return;
		}

		countdown.textContent = formatCountdown(targetTime - now);
	});
}

if (countdowns.length > 0) {
	updateCountdowns();
	setInterval(updateCountdowns, 1000);
}
