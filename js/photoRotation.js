const photoRotationInterval = 5000;
const photoRotationDuration = 1000;
const photoRotationMinimumTransitionGap = 500;

let nextPhotoRotationTransitionTime = 0;

function schedulePhotoRotationTransition(callback) {
	const now = Date.now();
	const transitionTime = Math.max(now, nextPhotoRotationTransitionTime);
	const delay = transitionTime - now;

	nextPhotoRotationTransitionTime = transitionTime + photoRotationMinimumTransitionGap;
	window.setTimeout(callback, delay);
}

function initializePhotoRotation(root = document) {
	const collections = Array.from(root.querySelectorAll(".collection"));

	collections.forEach(collection => {
		if (collection.dataset.photoRotationInitialized === "true") {
			return;
		}

		const images = Array.from(collection.querySelectorAll(":scope > img"));

		if (images.length <= 1) {
			return;
		}

		collection.dataset.photoRotationInitialized = "true";
		let activeIndex = 0;

		images.forEach((image, index) => {
			image.style.transition = `transform ${photoRotationDuration}ms ease`;
			image.style.transform = index === activeIndex ? "translateX(0)" : "translateX(100%)";
			image.style.zIndex = index === activeIndex ? "1" : "0";
		});

		const label = collection.querySelector(":scope > p");

		if (label) {
			label.style.zIndex = "2";
		}

		window.setInterval(() => {
			schedulePhotoRotationTransition(() => {
				const currentImage = images[activeIndex];
				const nextIndex = (activeIndex + 1) % images.length;
				const nextImage = images[nextIndex];

				nextImage.style.transition = "none";
				nextImage.style.transform = "translateX(100%)";
				nextImage.style.zIndex = "1";
				currentImage.style.zIndex = "1";

				window.requestAnimationFrame(() => {
					nextImage.style.transition = `transform ${photoRotationDuration}ms ease`;
					currentImage.style.transform = "translateX(-100%)";
					nextImage.style.transform = "translateX(0)";
				});

				window.setTimeout(() => {
					currentImage.style.transition = "none";
					currentImage.style.transform = "translateX(100%)";
					currentImage.style.zIndex = "0";
					nextImage.style.zIndex = "1";
				}, photoRotationDuration);

				activeIndex = nextIndex;
			});
		}, photoRotationInterval);
	});
}

window.initializePhotoRotation = initializePhotoRotation;
initializePhotoRotation();
