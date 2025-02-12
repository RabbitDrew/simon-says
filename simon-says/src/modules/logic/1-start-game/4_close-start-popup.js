import levelOptionsObj from "../0_data/0_option-data";

const closePopUp = function () {
  const pageStart = document.querySelector(".page-start");
    const isValuesFalse = Object.values(levelOptionsObj).every(el => el === false);
  if (pageStart && !isValuesFalse) {
    pageStart.classList.add("anim-start--close");
    setTimeout(() => {
      pageStart.remove();
    }, 490);
  } else {
    return;
  }
};

export default closePopUp;
