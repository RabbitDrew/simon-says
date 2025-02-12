import optionHandler from "./0_1_level-btn-handler"

document.addEventListener('click', (event) => {
    if (event.target.closest('.level-list-item')) {
        optionHandler(event);
    }
  });
  