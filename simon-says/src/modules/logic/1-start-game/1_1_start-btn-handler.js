import closePopUp from "./4_close-start-popup"
import showKeypad from "./5_show-keypad-level.-round"
import generateTask from "../4_task-answer/1_task-genereator"
import highlightKeys from "../4_task-answer/2_highlight-keys"
import levelOptionsObj from "../0_data/0_option-data"
import roundCounter from "../5_round_counter/0_count-rounds"
import taskObj from "../0_data/1_ task-data"

import hideOptions from "../7_hide-option/0_hide-option";

const startBtnHandler  = function (event) {
    if (!levelOptionsObj.easy &&
        !levelOptionsObj.medium &&
        !levelOptionsObj.hard
    ) {
        return;
    }else {
    closePopUp()
    showKeypad(event)
    generateTask()
    roundCounter()
    taskObj.isRepeaiUsed = false
    hideOptions()
    setTimeout (() => {highlightKeys()},550) 
}
}

export default startBtnHandler