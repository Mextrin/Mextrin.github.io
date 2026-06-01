var currentDisplayID = 'none';
var generatedCodeboxID = 0;

function CodeButton(buttonOrId, id) {
    const hasButton = typeof buttonOrId !== 'string';
    const button = hasButton ? buttonOrId : null;
    const targetID = hasButton ? id : buttonOrId;
    const openHeight = 'var(--codebox-open-height)';
    const codebox = button ? button.closest('.codebox, #codebox') : document;
    const displays = Array.from(codebox.querySelectorAll('pre'));
    const targetDisplay = displays.find(display => display.id === targetID) || document.getElementById(targetID);

    if (!targetDisplay) {
        return;
    }

    const isOpen = targetDisplay.classList.contains('open');

    displays.forEach(display => {
        display.style.maxHeight = '0px';
        display.classList.remove('open');
    });

    if (codebox !== document) {
        Array.from(codebox.querySelectorAll('button')).forEach(codeButton => {
            codeButton.classList.remove('active');
        });
    }

    if (isOpen) {
        currentDisplayID = 'none';
        return;
    }

    targetDisplay.style.maxHeight = openHeight;
    targetDisplay.classList.add('open');

    if (button) {
        button.classList.add('active');
    }

    currentDisplayID = targetID;
}

function InitializeCodeboxes(root = document) {
    const codeboxes = Array.from(root.querySelectorAll('.codebox, #codebox'));

    codeboxes.forEach(codebox => {
        const buttons = Array.from(codebox.querySelectorAll('button'));

        if (buttons.length > 0 || codebox.dataset.codeboxInitialized === 'true') {
            return;
        }

        const codeBlocks = Array.from(codebox.querySelectorAll('pre'));
        const tabs = document.createElement('div');
        tabs.className = 'codeboxTabs';

        codeBlocks.forEach((codeBlock, index) => {
            const label = codeBlock.dataset.label || codeBlock.id || `Snippet ${index + 1}`;

            if (!codeBlock.id) {
                generatedCodeboxID++;
                codeBlock.id = `generatedCodebox${generatedCodeboxID}`;
            }

            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = label;
            button.addEventListener('click', () => CodeButton(button, codeBlock.id));
            tabs.appendChild(button);
        });

        codebox.prepend(tabs);
        codebox.dataset.codeboxInitialized = 'true';
    });
}

window.InitializeCodeboxes = InitializeCodeboxes;

document.addEventListener('DOMContentLoaded', () => InitializeCodeboxes());
