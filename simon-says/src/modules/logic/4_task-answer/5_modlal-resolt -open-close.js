import elRendering from "../../global/el-rendering"
import createResultWin from "../../layouts/5_result-popup/5_modlal-resolt -win"
const getPage = document.querySelector('.page')

const resultWinToggler = function (resultTitle, btnTitle) {
    const isResultWinExist = document.querySelector('.main-result')
    if (!isResultWinExist) {
        const resultWin = createResultWin(resultTitle, btnTitle)
        elRendering(getPage, resultWin)  
    }else {
        isResultWinExist.classList.add('main-result--close')
        setTimeout(() => {
        isResultWinExist.remove()
        }, 900)
    }

}

export default resultWinToggler