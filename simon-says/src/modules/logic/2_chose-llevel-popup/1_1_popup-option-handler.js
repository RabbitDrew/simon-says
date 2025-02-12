import changeLevelValue from "./3_change-level-obj-value"
import showKeypad from "../1-start-game/5_show-keypad-level.-round"
import popupToggler from "./2_open-close-level-popup"


const levelPoppupOptionsHandler = function (event, el) {
    changeLevelValue(el)
    showKeypad ()
    popupToggler(event)
}

export default levelPoppupOptionsHandler