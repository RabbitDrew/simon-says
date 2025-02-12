import levelOptionsObj from "../0_data/0_option-data"
import taskObj from "../0_data/1_ task-data"
import shuffleArray from "../../global/arr-shafler"
const generateTask = function () {
    if (levelOptionsObj.easy 
        && !levelOptionsObj.medium 
        && !levelOptionsObj.hard) {
        const shuffledNumArr = shuffleArray(taskObj.keyNum)
        if (taskObj.taskArr.length === 0) {
            taskObj.taskArr = shuffledNumArr.slice(0, 2)
        }else {
            const nextIndex = taskObj.taskArr.length;
            taskObj.taskArr.push(...shuffledNumArr.slice(nextIndex, nextIndex + 2));
        }
        }else if (!levelOptionsObj.easy 
            && levelOptionsObj.medium 
            && !levelOptionsObj.hard)  {
            const shuffledLetterArr = shuffleArray(taskObj.keyLetters)
            const nextIndex = taskObj.taskArr.length;
            taskObj.taskArr.push(...shuffledLetterArr.slice(nextIndex, nextIndex + 2));
            }else {
                const shuffledNumArr = shuffleArray(taskObj.keyNum)
                const shuffledLetterArr = shuffleArray(taskObj.keyLetters)
                const nextIndex = taskObj.taskArr.length;
                taskObj.taskArr.push(...shuffledNumArr.slice(nextIndex, nextIndex + 1),...shuffledLetterArr.slice(nextIndex, nextIndex + 1));
            }

            taskObj.taskArr = shuffleArray(taskObj.taskArr)
}

export default generateTask