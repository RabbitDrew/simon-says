import choseLevelBtnHandler from "./0_1_chose-level-hendler"
const choseLevelBtn = document.querySelectorAll('.options-item')[0]

choseLevelBtn.addEventListener('click', (event) => {
    choseLevelBtnHandler(event)
})