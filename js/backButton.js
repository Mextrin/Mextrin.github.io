let backButtonHover = 2.5;
let backButtonFree = 1.5;

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

{
const gamesProjectReturnTransitionStorageKey = "gamesProjectReturnTransition";
const projectBackButtons = Array.from(document.querySelectorAll(".projectBackButton[href]"));

projectBackButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetUrl = new URL(button.getAttribute("href"), window.location.href);

        if (targetUrl.origin !== window.location.origin || !targetUrl.pathname.toLowerCase().endsWith("/games.html")) {
            return;
        }

        try {
            window.sessionStorage.setItem(gamesProjectReturnTransitionStorageKey, JSON.stringify({
                projectUrl: window.location.href
            }));
        } catch (error) {
            // Navigation should still work if sessionStorage is unavailable.
        }
    });
});
}
