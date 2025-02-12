import startBtnHandler from "./1_1_start-btn-handler"

document.addEventListener('click', (event) => {
    if (event.target.closest('.start-btn')) {
        startBtnHandler(event);
    }
});