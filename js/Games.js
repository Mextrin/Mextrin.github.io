const projects = Array.from(document.querySelectorAll("#projects > .project"));
const backgrounds = Array.from(document.querySelectorAll("#backgrounds > img"));

function setActiveBackground(index) {
	backgrounds.forEach((background, backgroundIndex) => {
		background.classList.toggle("active", backgroundIndex === index);
	});
}

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

setActiveBackground(0);
