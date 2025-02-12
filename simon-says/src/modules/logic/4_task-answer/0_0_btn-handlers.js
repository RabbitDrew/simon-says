import generateTask from "./1_task-genereator";
import highlightKeys from "./2_highlight-keys";
import checkAnswer from "./3_check-combination";
import taskObj from "../0_data/1_ task-data";
import resultWinToggler from "./5_modlal-resolt -open-close";
import roundCounter from "../5_round_counter/0_count-rounds";
import restartTheGame from "./6_clear-stats";
import createStartPopup from "../../layouts/4_start_game_popup/start-popup";
import attemptsCounter from "../5_round_counter/1_attempt_counter";

import hideOptions from "../7_hide-option/0_hide-option";
import allowedInputVal from "./7_input_restircions"
const answerBtn = document.querySelector(".answer-btn");
const repeatBtn = document.querySelectorAll(".options-item")[0];
const restartBtn = document.querySelectorAll(".options-item")[1];
const getInput = document.querySelector(".input-field");
const getScoreTitle = document.querySelector(".round-subtitle");
const getKeys = document.querySelectorAll('.key')

//answerBtn
answerBtn.addEventListener("click", () => {
  checkAnswer();
  if (taskObj.taskArr.length > getInput.value.length) {
    return;
  }
  if (taskObj.isWin && 
      taskObj.roundsAmount >= 0 && 
      taskObj.roundsAmount < 5) {
    resultWinToggler("You have won the round", "Next");
  } else if (
    !taskObj.isWin &&
    taskObj.roundsAmount >= 0 &&
    taskObj.roundsAmount < 5
  ) {
    resultWinToggler("You have lost the round", "Next");
    attemptsCounter();
  } else if (taskObj.isWin && taskObj.roundsAmount === 5) {
    resultWinToggler("You have won the round", "New game");
  } else if (!taskObj.isWin && taskObj.roundsAmount === 5) {
    attemptsCounter();
    resultWinToggler("You have lost the round", "New game");
  }
  taskObj.isRepeaiUsed = false
});
//?????
getInput.addEventListener("keydown", (event) => {
  allowedInputVal()
  if (event.key === "Enter") {
    checkAnswer();
    if (taskObj.taskArr.length > getInput.value.length) {
      return;
    }

    if (
      taskObj.isWin &&
      taskObj.roundsAmount >= 0 &&
      taskObj.roundsAmount < 5
    ) {
      resultWinToggler("You have won the round", "Next");
    } else if (
      !taskObj.isWin &&
      taskObj.roundsAmount >= 0 &&
      taskObj.roundsAmount < 5
    ) {
      resultWinToggler("You have lost the round", "Next");
      attemptsCounter();
    } else if (taskObj.isWin && taskObj.roundsAmount === 5) {
      resultWinToggler("You have won the round", "New game");
    } else if (!taskObj.isWin && taskObj.roundsAmount === 5) {
      attemptsCounter();
      resultWinToggler("You have lost the round", "New game");
    }
    taskObj.isRepeaiUsed = false
    hideOptions()
  }
});

getInput.addEventListener('input', ()=> {
  allowedInputVal()
})

/*next-btn*/
document.addEventListener("click", (event) => {
  if (event.target.closest(".result-next-btn")) {
    if (taskObj.roundsAmount < 5 && taskObj.attempts < 2) {
      console.log("click");
      generateTask();
      setTimeout(highlightKeys, 100);
      resultWinToggler("-", "-");
      roundCounter();
      getInput.value = "";
      getScoreTitle.textContent = String(taskObj.roundsAmount).padStart(2, "0");
    } else {
      resultWinToggler("-", "-");
      restartTheGame();
      getInput.value = "";
      getScoreTitle.textContent = "--/--";
      createStartPopup();
      hideOptions()
    }

  } else {
    return;
  }
});

// repeat sequnce btn
repeatBtn.addEventListener("click", () => {
  if (!taskObj.isRepeaiUsed) {
    highlightKeys();
    getInput.value = "";
    taskObj.isRepeaiUsed = true
  }else {
    return;
  }
});

restartBtn.addEventListener("click", () => {
  restartTheGame();
  getInput.value = "";
  getScoreTitle.textContent = "--/--";
  createStartPopup();
  taskObj.isRepeaiUsed = false
  hideOptions()
});
