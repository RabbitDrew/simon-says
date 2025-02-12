import elCreator from "../../global/el-creator.js";
import elRendering from "../../global/el-rendering.js";

const getPage = document.querySelector(".page");

const createHeader = function () {
  const header = elCreator("header", "page-header");
  elRendering(getPage, header);
  const logo = createLogo();
  elRendering(header, logo);
  const options = createOptions();
  elRendering(header, options);
};

const createLogo = () => {
  const headerLogo = elCreator("div", "header-logo");
  const logoTitle = elCreator("h1", "logo-title");
  logoTitle.textContent = "Simon says";
  elRendering(headerLogo, logoTitle);
  return headerLogo;
};

const createOptions = () => {
  const headerOptions = elCreator("ul", "header-options");
  const options = [
    //"Chose level",
    "Repeat sequence",
    "New game/restart the game",
  ];
  options.forEach((optionTitle) => {
    const optionsItem = elCreator("li", "options-item");
          optionsItem.classList.add('option--hide')
    const optionItemTitle = elCreator("h2", "option-item-title");
    optionItemTitle.textContent = optionTitle;

    elRendering(optionsItem, optionItemTitle);
    elRendering(headerOptions, optionsItem);
  });

  return headerOptions;
};

createHeader();
