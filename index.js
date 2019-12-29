var currentIndex = 0;

function Init() {
    SetPage(currentIndex, false);
}

function SetPage(index, animate = true) {
    currentIndex = index;
    var pages = document.getElementsByClassName('contentPage');
    for (i = 0; i < pages.length; i++) {
        pages[i].style.left = window.innerWidth * (i - currentIndex);
        pages[i].style.right = window.innerWidth * -(i - currentIndex);
    }
}

function SetBackground(index) {
    
}