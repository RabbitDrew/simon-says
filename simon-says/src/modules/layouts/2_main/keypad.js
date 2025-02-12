import elCreator from "../../global/el-creator";
import elRendering from "../../global/el-rendering";
const getMainKeypad = document.querySelector('.main-keypad')

const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const qwertyAlphabet = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
];

export const createNumKeypad = () => {
    const keyPadNumWrapper = elCreator('div', 'keyapad-num')
    nums.forEach(num => {
        const numKey = elCreator('div', 'key')
              numKey.classList.add('disable')
        elRendering(keyPadNumWrapper, numKey)
         const keyTitle = elCreator('h2', 'key-title')
                 keyTitle.textContent = num
         elRendering(numKey, keyTitle)
    }) 

    return keyPadNumWrapper
}

const numKeypad = createNumKeypad ()
elRendering (getMainKeypad, numKeypad)

export const createLetterKeypad = () => {
    const keyPadLetterWrapper = elCreator('div', 'keyapad-letter')
    qwertyAlphabet.forEach(letter => {
        const numKey = elCreator('div', 'key')
        elRendering(keyPadLetterWrapper, numKey)
         const keyTitle = elCreator('h2', 'key-title')
                keyTitle.textContent = letter
         elRendering(numKey, keyTitle)
    }) 

    return keyPadLetterWrapper
}