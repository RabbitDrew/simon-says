
const focusOption = function (event)  { 
    const optionTitel = document.querySelectorAll('.level-list-item-title')
 optionTitel.forEach((el) => {
    if (el === event.target.closest('.level-list-item-title')) {
        el.classList.add('focus--color');
    } else {
        el.classList.remove('focus--color');
    }
})
}

export default focusOption