import elRendering from "../../global/el-rendering";
import { createNumKeypad, createLetterKeypad } from "../../layouts/2_main/keypad";
import levelOptionsObj from "../0_data/0_option-data";

const getMainKeypadSection = document.querySelector('.main-keypad')
const getLevelSubtitle = document.querySelector('.level-subtitle')
const geRoundSubtitle = document.querySelector('.round-subtitle')

const showKeypad = function (event) {
    const numKeypad = createNumKeypad()
    const letterKeypad = createLetterKeypad ()
    const arrKeys = Object.keys(levelOptionsObj)
    let key = ''
    for (let k in levelOptionsObj) {
        if (levelOptionsObj[k] === true) {
            key = `${k}`
        }
    }
    getLevelSubtitle.textContent = key
    geRoundSubtitle.textContent = '01'

    if (key === arrKeys[0]) {
        getMainKeypadSection.innerHTML = ''
        elRendering(getMainKeypadSection, numKeypad)
      
    }else if (key === arrKeys[1]){
        getMainKeypadSection.innerHTML = ''
        elRendering(getMainKeypadSection, letterKeypad)
    }else {
        getMainKeypadSection.innerHTML = ''
        elRendering(getMainKeypadSection, numKeypad)
        elRendering(getMainKeypadSection, letterKeypad)
    }
}

export default showKeypad