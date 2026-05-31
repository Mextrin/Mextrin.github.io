const previewBoxes = document.querySelectorAll(
	".selectionBox.leftBox, .selectionBox.centerBox, .selectionBox.rightBox"
);
const container = document.querySelector(".container");
const photosBox = document.querySelector(".selectionBox.leftBox");
const gamesBox = document.querySelector(".selectionBox.centerBox");
const racingBox = document.querySelector(".selectionBox.rightBox");

const previewDuration = 5000;
const indexBackAnimationStepDelay = 250;
const nextImageIndexes = new Array(previewBoxes.length).fill(0);
let previewIndex = 0;
let previewInterval;

function setPreviewImage(box, imageIndex) {
	const images = box.querySelectorAll("img");

	images.forEach((image, index) => {
		image.classList.toggle("isPreviewImage", index === imageIndex);
	});
}

function setDynamicTintEnabled(activeBox = null) {
	previewBoxes.forEach(box => {
		box.classList.toggle(
			"dynamicTintEnabled",
			box === activeBox && box.classList.contains("dynamicTint")
		);
	});
}

function showNextPreview() {
	if ([...previewBoxes].some(box => box.matches(":hover"))) {
		return;
	}

	const fadingOutIndex = (previewIndex + 1) % previewBoxes.length;
	const waitingIndex = (previewIndex + 2) % previewBoxes.length;

	previewBoxes.forEach((box, index) => {
		const isActiveBox = index === previewIndex;
		const isWaitingBox = index === waitingIndex;

		box.classList.toggle("isPreviewing", isActiveBox || isWaitingBox);

		if (index === fadingOutIndex) {
			box.classList.remove("isPreviewing");
			return;
		}

		if (!isActiveBox) {
			return;
		}

		const images = box.querySelectorAll("img");

		if (images.length === 0) {
			return;
		}

		setPreviewImage(box, nextImageIndexes[index]);
		nextImageIndexes[index] = (nextImageIndexes[index] + 1) % images.length;
	});

	previewIndex = (previewIndex + 1) % previewBoxes.length;
}

function setClickedBox(clickedBox, offsetX, offsetY) {
	if (previewInterval) {
		clearInterval(previewInterval);
		previewInterval = null;
	}

	container.classList.add("isClicked");
	container.style.setProperty("--clickedOffsetX", offsetX);
	container.style.setProperty("--clickedOffsetY", offsetY);

	previewBoxes.forEach(box => {
		box.classList.toggle("isClickedBox", box === clickedBox);
	});

	setDynamicTintEnabled(clickedBox);
}

if (previewBoxes.length > 0) {
	previewBoxes.forEach(box => setPreviewImage(box, 0));
	showNextPreview();
	previewInterval = setInterval(showNextPreview, previewDuration);
}

if (container && photosBox) {
	photosBox.addEventListener("click", () => {
		setClickedBox(photosBox, "100vw", "0vh");
	});
}

if (container && gamesBox) {
	gamesBox.addEventListener("click", () => {
		setClickedBox(gamesBox, "0vw", "100vh");
	});
}

if (container && racingBox) {
	racingBox.addEventListener("click", () => {
		setClickedBox(racingBox, "-100vw", "0vh");
	});
}
