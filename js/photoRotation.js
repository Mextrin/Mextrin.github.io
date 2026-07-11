const photoRotationInterval = 5000;
const photoRotationDuration = 1000;
const photoRotationMinimumTransitionGap = 500;
const photoRotationDirections = [
	{
		incomingTransform: "translateY(-100%)"
	},
	{
		incomingTransform: "translateX(100%)"
	},
	{
		incomingTransform: "translateY(100%)"
	},
	{
		incomingTransform: "translateX(-100%)"
	}
];

let nextPhotoRotationTransitionTime = 0;
let photoRotationDirectionIndex = 0;
let photoRotationIntervalId = null;
let previousPhotoRotationItem = null;
const photoRotationItems = [];

function schedulePhotoRotationTransition(callback) {
	const now = Date.now();
	const transitionTime = Math.max(now, nextPhotoRotationTransitionTime);
	const delay = transitionTime - now;

	nextPhotoRotationTransitionTime = transitionTime + photoRotationMinimumTransitionGap;
	window.setTimeout(callback, delay);
}

function getNextPhotoRotationDirection() {
	const direction = photoRotationDirections[photoRotationDirectionIndex];

	photoRotationDirectionIndex = (photoRotationDirectionIndex + 1) % photoRotationDirections.length;

	return direction;
}

function rotatePhotoCollection(rotationItem) {
	schedulePhotoRotationTransition(() => {
		const currentImage = rotationItem.images[rotationItem.activeIndex];
		const nextIndex = (rotationItem.activeIndex + 1) % rotationItem.images.length;
		const nextImage = rotationItem.images[nextIndex];
		const direction = getNextPhotoRotationDirection();

		nextImage.style.transition = "none";
		nextImage.style.transform = direction.incomingTransform;
		nextImage.style.zIndex = "2";
		currentImage.style.zIndex = "1";
		void nextImage.offsetWidth;

		window.requestAnimationFrame(() => {
			nextImage.style.transition = `transform ${photoRotationDuration}ms ease`;
			nextImage.style.transform = "translateX(0)";
		});

		window.setTimeout(() => {
			currentImage.style.transition = "none";
			currentImage.style.transform = direction.incomingTransform;
			currentImage.style.zIndex = "0";
			nextImage.style.zIndex = "1";
		}, photoRotationDuration);

		rotationItem.activeIndex = nextIndex;
		rotationItem.collection.dataset.activePhotoIndex = nextIndex;

		if (typeof window.updateActivePhotoCollectionBackground === "function") {
			window.updateActivePhotoCollectionBackground(rotationItem.collection);
		}
	});
}

function getRandomPhotoRotationItem() {
	const availableItems = photoRotationItems.filter(item => item !== previousPhotoRotationItem);
	const selectableItems = availableItems.length > 0 ? availableItems : photoRotationItems;

	return selectableItems[Math.floor(Math.random() * selectableItems.length)];
}

function startPhotoRotationInterval() {
	if (photoRotationIntervalId || photoRotationItems.length === 0) {
		return;
	}

	photoRotationIntervalId = window.setInterval(() => {
		const rotationItem = getRandomPhotoRotationItem();

		if (!rotationItem) {
			return;
		}

		previousPhotoRotationItem = rotationItem;
		rotatePhotoCollection(rotationItem);
	}, photoRotationInterval);
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
		const rotationItem = {
			activeIndex: 0,
			collection,
			images
		};

		collection.dataset.activePhotoIndex = rotationItem.activeIndex;

		images.forEach((image, index) => {
			const initialDirection = photoRotationDirections[(index - 1 + photoRotationDirections.length) % photoRotationDirections.length];

			image.style.transition = `transform ${photoRotationDuration}ms ease`;
			image.style.transform = index === rotationItem.activeIndex ? "translateX(0)" : initialDirection.incomingTransform;
			image.style.zIndex = index === rotationItem.activeIndex ? "1" : "0";
		});

		const label = collection.querySelector(":scope > p");

		if (label) {
			label.style.zIndex = "3";
		}

		photoRotationItems.push(rotationItem);
	});

	startPhotoRotationInterval();
}

window.initializePhotoRotation = initializePhotoRotation;
initializePhotoRotation();
