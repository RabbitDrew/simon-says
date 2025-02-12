import taskObj from "../0_data/1_ task-data";
const roundCounter = function ()  {
    if (taskObj.roundsAmount >= 0 && taskObj.roundsAmount <5 ) {
        taskObj.roundsAmount +=1
    }else {
        taskObj.roundsAmount = 1
    }
}

export default roundCounter