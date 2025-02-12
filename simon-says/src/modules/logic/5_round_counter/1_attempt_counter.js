import taskObj from "../0_data/1_ task-data"

const attemptsCounter = function () {
    if (taskObj.attempts >=0 && taskObj.attempts < 2) {
        taskObj.attempts +=1
    }else {
        taskObj.attempts =0
    }

    console.log(taskObj.attempts)
} 

export default attemptsCounter