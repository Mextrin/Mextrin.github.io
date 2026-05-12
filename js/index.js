const turnTable = document.querySelector(".turnTable");
const boxes = document.querySelectorAll(".leftBox, .topBox, .rightBox");

let maxSpeed = 0.1;
let speedChange = 0.001;
let speed = 0.1;
let angle = 0;
let isHovering = false;

function update() {
    animate();
    changeSpeed();
	checkHover();

    //requestAnimationFrame(update);
}

function checkHover() {
    isHovering = [...boxes].some(box => box.matches(":hover"));
}

function changeSpeed() {
	if (isHovering) {
		speed = Math.max(speed - speedChange, 0);
	} else {
		speed = Math.min(speed + speedChange, maxSpeed);
	}
}

function animate() {
	angle += speed;

	turnTable.style.transform =
		`translate(0, 0%) rotate3d(1,0,0,70deg) rotateZ(${angle}deg)`;
	document.documentElement.style.setProperty("--turnTableAngle", `${-angle}deg`);
}

update();
