const racingProjects = Array.from(document.querySelectorAll("#projects > .project"));
const racingBackgrounds = Array.from(document.querySelectorAll("#backgrounds > img"));

function setActiveRacingBackground(index) {
	racingBackgrounds.forEach((background, backgroundIndex) => {
		background.classList.toggle("active", backgroundIndex === index);
	});
}

racingProjects.forEach((project, index) => {
	project.dataset.index = index;

	project.addEventListener("mouseenter", () => {
		setActiveRacingBackground(index);
	});

	project.addEventListener("focus", () => {
		setActiveRacingBackground(index);
	});
});

setActiveRacingBackground(0);
