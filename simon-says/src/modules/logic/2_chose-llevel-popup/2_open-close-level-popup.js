import elRendering from "../../global/el-rendering"
import createDropdownOptions from "../../layouts/1_header/drop-list"

const choseLevelBtn = document.querySelector('.options-item')

const popupToggler = function (event) {
    if (!event.target || !(event.target instanceof Element)) return;
    
    const choseLevelPopUp = document.querySelector('.option-item-drop');
    const createPopUp = createDropdownOptions();
    const optionItemTitle = event.target.closest('.option-item-title');
    const dropItemTitle = event.target.closest('.drop-item-title');
    if (optionItemTitle && !choseLevelPopUp) {
        createPopUp.classList.add('anim--open');
        elRendering(choseLevelBtn, createPopUp);
    }
    else if ((optionItemTitle || dropItemTitle) && choseLevelPopUp) {
        choseLevelPopUp.classList.remove('anim--open');
        choseLevelPopUp.classList.add('anim--close');
        setTimeout(() => {
            choseLevelPopUp.remove();
        }, 480);
    } else {
        return;
    }
};

export default popupToggler