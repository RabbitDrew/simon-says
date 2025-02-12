import focusOption from "./2_focus-option"
import choseLevel from "./3_chose-level"
import taskObj from "../0_data/1_ task-data"
const optionHandler = function (event) {
      focusOption(event)
      choseLevel(event)
      taskObj.taskArr.length = 0
}

export default optionHandler