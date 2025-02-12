import elCreator from "../../global/el-creator";
import elRendering from "../../global/el-rendering";

const createResultWin = function (resTitle,btnTitle) {
  const createMainResult = elCreator("section", "main-result");
  const resultWin = elCreator("div", "result__win");
  elRendering(createMainResult, resultWin);
  const resultTitle = createResultTitle(resTitle);
  elRendering(resultWin, resultTitle);

  const resultNextBtn = createResultNextBtn(btnTitle);
  elRendering(resultWin, resultNextBtn);

  return createMainResult
};

const createResultTitle = (resTitle) => {
  const titleWrapper = elCreator("div", "result-title__wrapper");
  const resultTitleWin = elCreator("h2", "result-title");
  resultTitleWin.textContent = resTitle;
  elRendering(titleWrapper, resultTitleWin);

  return titleWrapper
};

const createResultScore = (winScore, loseScore) => {
  const scoreWrapper = elCreator("div", "result-score__wrapper");

  const scoreTitleWin = elCreator("h2", "score-title title--win");
  scoreTitleWin.textContent = winScore;
  elRendering(scoreWrapper, scoreTitleWin);

  const scoreSlash = elCreator("h2", "score-slash");
  scoreSlash.textContent = "/";
  elRendering(scoreWrapper, scoreSlash);

  const scoreTitleLose = elCreator("h2", "score-title title--lose");
  scoreTitleLose.textContent = loseScore;
  elRendering(scoreWrapper, scoreTitleLose);

  return scoreWrapper;
};

/* const resultScore = createResultScore (winScore, loseScore)
    elRendering(resultWin, resultScore)
*/

const createResultNextBtn = (btnTitle) => {
  const nextBtnWrapper = elCreator("div", "result-next-btn");

  const nextBtnTitle = elCreator("h2", "next-btn-title");
  nextBtnTitle.textContent = btnTitle;
  elRendering(nextBtnWrapper, nextBtnTitle);

  return nextBtnWrapper;
};

export default createResultWin

