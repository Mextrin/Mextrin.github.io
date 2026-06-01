var currentDisplayID = 'none';

function CodeButton(id) {
    if (id == currentDisplayID) {
        document.getElementById(currentDisplayID).style.maxHeight = '0px';
        currentDisplayID = 'none';
    }
    else {
        if (currentDisplayID != 'none')
            document.getElementById(currentDisplayID).style.maxHeight = '0px';
        
        currentDisplayID = id;
        document.getElementById(currentDisplayID).style.maxHeight = '50%';
    }
}