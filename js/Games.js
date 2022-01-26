let innerTint = 25;
let outerTint = 57;

let backButtonHover = 2.5;
let backButtonFree = 1.5;

var headerHeight = getComputedStyle(document.body).getPropertyValue('--headerHeight');

//Resizable buttons
var buttons = document.getElementsByClassName("resizableButton");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
        this.style.setProperty('--backButtonMul', backButtonHover);
    });

    buttons[i].addEventListener("mouseleave", function() {
        this.style.setProperty('--backButtonMul', backButtonFree);
    });
}