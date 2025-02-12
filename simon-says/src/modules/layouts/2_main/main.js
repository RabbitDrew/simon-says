import elCreator from "../../global/el-creator";
import elRendering from "../../global/el-rendering";

//test 
//import { createNumKeypad, createLetterKeypad } from "./keypad";

const getPage = document.querySelector(".page");

const createMain = function () {
  const main = elCreator("main", "page-main");
  elRendering(getPage, main);
  const mainInfo = createMainInfo();
  elRendering(main, mainInfo);
  const mainInput = createMainInput()
  elRendering(main, mainInput);
  const mainKeypad = createMainKeypad();
  elRendering(main, mainKeypad);
  const answerKeyBtn = createKeyAnswer()
  elRendering(main, answerKeyBtn)
};

const createMainInfo = () => {
  const mainInfo = elCreator("section", "main-info");

  const infoLevel = elCreator("div", "info-level");
  const levelTitle = elCreator("h2", "level-title");
  levelTitle.textContent = "Level:";
  const levelSubtitle = elCreator("h2", "level-subtitle");
  levelSubtitle.textContent = "--";

  elRendering(infoLevel, levelTitle);
  elRendering(infoLevel, levelSubtitle);

  const infoRound = elCreator("div", "info-round");
  const roundTitle = elCreator("h2", "round-title");
  roundTitle.textContent = "Round:";
  const roundSubtitle = elCreator("h2", "round-subtitle");
  roundSubtitle.textContent = "-/-";

  elRendering(infoRound, roundTitle);
  elRendering(infoRound, roundSubtitle);

  elRendering(mainInfo, infoLevel);
  elRendering(mainInfo, infoRound);

  return mainInfo;
};

const createMainInput = () => {
  const mainInput = elCreator("section", "main-input");

  const inputField = elCreator("input", "input-field");
  inputField.type = "text";
  inputField.name = "answer";
  inputField.id = "input";
  inputField.autocomplete="off"
  inputField.placeholder = "Enter your answer here !";
  inputField.readOnly = true;

  const inputStyleBorder = elCreator("div", "input-style-border");

  elRendering(mainInput, inputField);
  elRendering(mainInput, inputStyleBorder);

  return mainInput;
};

const createMainKeypad = () => {
  const mainKeypad = elCreator('section', 'main-keypad')
  //const numKeypad = createNumKeypad()
  //elRendering(mainKeypad, numKeypad)
  //const letterKeypad = createLetterKeypad()
  //elRendering(mainKeypad, letterKeypad)
  return mainKeypad
}

const createKeyAnswer = () => {
  const mainAnswer = elCreator('div', 'main-answer')
  const answerBtn = elCreator('div', 'answer-btn')
  elRendering(mainAnswer, answerBtn)
  const answerBtnTitle = elCreator('h2', 'answer-btn-title')
  answerBtnTitle.textContent = 'Answer'
  elRendering(answerBtn, answerBtnTitle)

  return mainAnswer
}

createMain();
