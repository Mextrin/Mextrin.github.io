var currentDisplayID = 'none';

function CodeButton(id) {
    const openHeight = 'var(--codebox-open-height)';

    if (id == currentDisplayID) {
        const currentDisplay = document.getElementById(currentDisplayID);
        currentDisplay.style.maxHeight = '0px';
        currentDisplay.classList.remove('open');
        currentDisplayID = 'none';
    }
    else {
        if (currentDisplayID != 'none') {
            const previousDisplay = document.getElementById(currentDisplayID);
            previousDisplay.style.maxHeight = '0px';
            previousDisplay.classList.remove('open');
        }
        
        currentDisplayID = id;
        const currentDisplay = document.getElementById(currentDisplayID);
        currentDisplay.style.maxHeight = openHeight;
        currentDisplay.classList.add('open');
    }
}
