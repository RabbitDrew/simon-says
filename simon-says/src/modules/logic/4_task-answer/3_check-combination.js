import taskObj from "../0_data/1_ task-data";
const inputField = document.querySelector('.input-field')

const  checkAnswer = function () {
    const inputValue = Array.from(inputField.value)
    if (taskObj.taskArr.length !==0 && 
        inputValue.length !== 0 && 
        inputValue.length === taskObj.taskArr.length) {
         taskObj.isWin = taskObj.taskArr.every((el, i) => el === inputValue[i])
    }else {
        taskObj.isWin = false
    }
}

export default checkAnswer 