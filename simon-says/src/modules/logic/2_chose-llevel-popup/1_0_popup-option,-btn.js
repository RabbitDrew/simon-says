import levelPoppupOptionsHandler from "./1_1_popup-option-handler"
import taskObj from "../0_data/1_ task-data"
import generateTask from "../4_task-answer/1_task-genereator"

import highlightKeys from "../4_task-answer/2_highlight-keys"

document.addEventListener('click', (event) => {
    const dropDownItems = document.querySelectorAll('.drop-item')
    if (dropDownItems) {
            if (event.target.closest('.drop-item-title')){
                levelPoppupOptionsHandler(event.target, 
                                          event.target.closest('.drop-item'))
                taskObj.taskArr.length = 0
                generateTask()
               setTimeout(highlightKeys, 200) 
            }else {
                return
            }
    }else {
        return
    }
})