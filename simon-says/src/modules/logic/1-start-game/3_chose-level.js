import levelOptionsObj from "../0_data/0_option-data";


const choseLevel = function (event) {
    const optionTitel = document.querySelectorAll('.level-list-item-title')
    optionTitel.forEach((el) => {
        const currElTextContent = el.textContent.toLowerCase()
        if (el === event.target.closest('.level-list-item-title')) {
            levelOptionsObj[currElTextContent] =true
        } else {
            levelOptionsObj[currElTextContent]= false
        }
    })
}

export default choseLevel 