import elCreator from "../../global/el-creator";
import elRendering from "../../global/el-rendering";

const getPage = document.querySelector(".page");

const createStartPopup = function () {
  const pageStart = elCreator("section", "page-start");
  elRendering(getPage, pageStart);
  const startWrapper = elCreator("div", "start__wrapper");
  elRendering(pageStart, startWrapper);
  const startTitle = startTitleWrapper();
  elRendering(startWrapper, startTitle);
  const levelList = createLevelList();
  elRendering(startWrapper, levelList);
  const startBtn = createStartButton() 
  elRendering(startWrapper, startBtn);
};

const startTitleWrapper = function () {
  const titleWrapper = elCreator("div", "start-title__wrapper");
  const title = elCreator("h2", "start-title");
  title.textContent = "Choose the game level!";
  elRendering(titleWrapper, title);
  return titleWrapper;
};

const createLevelList = function () {
  const levelList = elCreator("ul", "start-level-list");

  const levels = ["Easy", "Medium", "Hard"];
  levels.forEach((level) => {
    const listItem = elCreator("li", "level-list-item");
    const listItemTitle = elCreator("h2", "level-list-item-title");
    listItemTitle.textContent = level;
    elRendering(listItem, listItemTitle);
    elRendering(levelList, listItem);
  });

  return levelList;
};

const createStartButton = function () {
  const startBtn = elCreator("div", "start-btn");
  const btnTitle = elCreator("h2", "start-btn-title ");
  btnTitle.textContent = "Start the game";
  elRendering(startBtn, btnTitle);
  return startBtn;
};

createStartPopup();


export default createStartPopup