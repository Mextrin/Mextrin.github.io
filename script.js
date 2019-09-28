var currentDisplayID = 'none';

function CodeButton(id) {
    if (id == currentDisplayID) {
        document.getElementById(currentDisplayID).style.height = '0px';
        currentDisplayID = 'none';
    }
    else {
        currentDisplayID = id;
        document.getElementById(currentDisplayID).style.height = '50%';
    }
}