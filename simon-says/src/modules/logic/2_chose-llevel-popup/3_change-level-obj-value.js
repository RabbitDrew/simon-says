import levelOptionsObj from "../0_data/0_option-data";

const changeLevelValue = function  (el) {
    let key = el.textContent.trim().toLowerCase()  
    for (let k in levelOptionsObj) {
        if (k === key) {
            levelOptionsObj[k] = true
        }else  {
            levelOptionsObj[k] = false
        }
    }

    console.log(levelOptionsObj)
}

export default changeLevelValue