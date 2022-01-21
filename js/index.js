let innerTint = 25;
let outerTint = 57;

//Resizable buttons
var buttons = document.getElementsByClassName("resizableButton");

for (var i = 0; i < buttons.length; i++) {
    var videoElement = buttons[i].querySelector(".interactiveVideo");
        videoElement.pause();

    buttons[i].addEventListener("mouseover", function() {
        var videoElement = this.querySelector(".interactiveVideo");
        videoElement.play();

        this.style.width = '75%';

        this.style.setProperty('--innerTint', innerTint + '%');
        this.style.setProperty('--outerTint', outerTint + '%');
    });

    buttons[i].addEventListener("mouseleave", function() {
        var videoElement = this.querySelector(".interactiveVideo");
        videoElement.pause();
        videoElement.currentTime = 0;

        this.style.width = '50%';
        this.style.setProperty('--innerTint', '0%');
        this.style.setProperty('--outerTint', '0%');
    });
}