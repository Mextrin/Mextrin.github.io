const projects = Array.from(document.querySelectorAll("#projects > .project"));
const backgrounds = Array.from(document.querySelectorAll("#backgrounds > img"));

function setActiveBackground(index) {
	backgrounds.forEach((background, backgroundIndex) => {
		background.classList.toggle("active", backgroundIndex === index);
	});
}

projects.forEach((project, index) => {
	project.dataset.index = index;

	project.addEventListener("mouseenter", () => {
		setActiveBackground(index);
	});

	project.addEventListener("focus", () => {
		setActiveBackground(index);
	});
});

setActiveBackground(0);
