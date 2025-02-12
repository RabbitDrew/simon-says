import levelOptionsObj from "../0_data/0_option-data";
import taskObj from "../0_data/1_ task-data";

const restartTheGame = function () {
  for (let k in levelOptionsObj) {
    levelOptionsObj[k] = false;
  }
  taskObj.taskArr.length = 0;
  taskObj.roundsAmount = 0;
  taskObj.attempts =0
  taskObj.isWin = false;
};

export default restartTheGame;
