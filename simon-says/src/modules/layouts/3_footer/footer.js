import elCreator from "../../global/el-creator";
import elRendering from "../../global/el-rendering";

const getPage = document.querySelector(".page");

const createFooter = function () {
  const footer = elCreator("footer", "page-footer");
  elRendering(getPage, footer);
  const footerWrapper = elCreator("ul", "footer__wrapper");
  elRendering(footer, footerWrapper);
  const createGitItem = createFooterGitItem();
  elRendering(footerWrapper, createGitItem);
  const createYearItem = createFooterYearItem();
  elRendering(footerWrapper, createYearItem);
  const createRsItem = createFooterRsItem();
  elRendering(footerWrapper, createRsItem);
};

const createFooterGitItem = () => {
    const footerItem = elCreator("li", "footer-item");
  
    const link = elCreator("a", "item-link-git");
    link.href = "https://github.com/RabbitDrew";
  
    // Создание SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute("viewBox", "0 0 256 256");
    svg.setAttribute("width", "50px");
    svg.setAttribute("height", "50px");
  
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("fill", "#ffffff");
    group.setAttribute("fill-rule", "nonzero");
    group.setAttribute("stroke", "none");
    group.setAttribute("stroke-width", "1");
    group.setAttribute("stroke-linecap", "butt");
    group.setAttribute("stroke-linejoin", "miter");
    group.setAttribute("stroke-miterlimit", "10");
    group.setAttribute("stroke-dasharray", "");
    group.setAttribute("stroke-dashoffset", "0");
    group.setAttribute("font-family", "none");
    group.setAttribute("font-weight", "none");
    group.setAttribute("font-size", "none");
    group.setAttribute("text-anchor", "none");
    group.setAttribute("style", "mix-blend-mode: normal");
  
    const innerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    innerGroup.setAttribute("transform", "scale(16,16)");
  
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M7.5,1c-3.58984,0 -6.5,2.90625 -6.5,6.48828c0,2.86719 1.86328,5.30078 4.44531,6.16016c0.32422,0.05859 0.55469,-0.27344 0.55469,-0.52344c0,-0.15234 0.00391,-0.33594 0,-0.875c-1.80859,0.39063 -2.375,-0.875 -2.375,-0.875c-0.29687,-0.75 -0.65625,-0.96484 -0.65625,-0.96484c-0.58984,-0.40234 0.04297,-0.39062 0.04297,-0.39062c0.65234,0.04297 0.98828,0.60547 0.98828,0.60547c0.5,0.875 1.62891,0.78906 2,0.625c0,-0.39844 0.04297,-0.6875 0.15234,-0.87109c-2.04297,-0.35937 -3.15625,-1.53906 -3.15234,-3.17188c0.00391,-0.96484 0.33594,-1.71484 0.875,-2.26953c-0.23437,-0.29687 -0.39453,-1.3125 0.08594,-1.9375c1.20703,0 1.92578,0.87109 1.92578,0.87109c0,0 0.56641,-0.24609 1.60938,-0.24609c1.04687,0 1.60937,0.23438 1.60937,0.23438c0,0 0.72266,-0.85937 1.92969,-0.85937c0.48047,0.625 0.32031,1.64063 0.13281,1.91797c0.51563,0.54297 0.83203,1.29297 0.83203,2.28906c0,1.63281 -1.10937,2.8125 -3.14844,3.16797c0.12891,0.19531 0.14844,0.46875 0.14844,0.875c0,0.86719 0,1.66016 0,1.875c0,0.25 0.22656,0.58594 0.55859,0.52344c2.58203,-0.86328 4.44141,-3.29297 4.44141,-6.16016c0,-3.58203 -2.91016,-6.48828 -6.5,-6.48828z");
  
    innerGroup.appendChild(path);
    group.appendChild(innerGroup);
    svg.appendChild(group);
  
    link.appendChild(svg);
    footerItem.appendChild(link);
    return footerItem;
  };

const createFooterYearItem = () => {
  const footerItem = elCreator("li", "footer-item");

  const yearTitle = elCreator("h2", "item-year-title");
  yearTitle.textContent = "2025";

  footerItem.appendChild(yearTitle);

  return footerItem;
};

const createFooterRsItem = () => {
    const footerItem = elCreator("li", "footer-item");
  
    const link = elCreator("a", "item-link-rs");
    link.href = "https://rs.school/";
  
    const img = elCreator("img", "rs-image");
    img.src = "./assets/rsschool.png";
    img.alt = "img";
  
    link.appendChild(img);
    footerItem.appendChild(link);
  
    return footerItem;
  };

createFooter();
