const racingProjects = Array.from(document.querySelectorAll("#projects > .project"));
const racingBackgrounds = Array.from(document.querySelectorAll("#background > img"));

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

const timelineImageGroups = Array.from(document.querySelectorAll(".timelineImages"));

timelineImageGroups.forEach((imageGroup) => {
	Array.from(imageGroup.querySelectorAll("img")).forEach((image, index) => {
		image.style.setProperty("--imageIndex", index);
	});
});

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
