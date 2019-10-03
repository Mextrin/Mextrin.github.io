var currentIndex = 0;
SetPage(currentIndex);

function SetPage(index)
{
    currentIndex = index;
    var pages = document.getElementsByClassName('contentPage');
    for (i = 0; i < pages.length; i++) {
        pages[i].style.left = window.innerWidth * (i - currentIndex);
        pages[i].style.right = window.innerWidth * -(i - currentIndex);
    }
}