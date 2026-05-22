const previewBoxes = document.querySelectorAll(
	".selectionBox.leftBox, .selectionBox.centerBox, .selectionBox.rightBox"
);

const previewDuration = 2500;
const nextImageIndexes = new Array(previewBoxes.length).fill(0);
let previewIndex = 0;

function setPreviewImage(box, imageIndex) {
	const images = box.querySelectorAll("img");

	images.forEach((image, index) => {
		image.classList.toggle("isPreviewImage", index === imageIndex);
	});
}

function showNextPreview() {
	if ([...previewBoxes].some(box => box.matches(":hover"))) {
		return;
	}

	previewBoxes.forEach((box, index) => {
		const isActiveBox = index === previewIndex;
		box.classList.toggle("isPreviewing", isActiveBox);

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

if (previewBoxes.length > 0) {
	previewBoxes.forEach(box => setPreviewImage(box, 0));
	showNextPreview();
	setInterval(showNextPreview, previewDuration);
}
