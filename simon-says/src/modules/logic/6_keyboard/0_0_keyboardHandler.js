const getInput = document.querySelector('.input-field');

export const enableKeypadInput = () => {
    getInput.addEventListener('keydown', handleKeypadInput);
};

export const disableKeypadInput = () => {
    getInput.removeEventListener('keydown', handleKeypadInput);
};

const handleKeypadInput = (event) => {
    if (event.key === 'Backspace') {
        event.preventDefault();
    }
    if (
        event.key !== 'Enter' &&
        event.key !== 'Backspace' &&
        event.key !== 'Shift' &&
        event.key !== 'Control' &&
        event.key !== 'Tab' &&
        event.key !== 'NumLock'
    ) {
        getInput.value += event.key;
    }
};

enableKeypadInput ()