import levelOptionsObj from "../0_data/0_option-data";

const getInput = document.querySelector('.input-field');

const allowedInputVal = function () {
    if (levelOptionsObj.easy && !levelOptionsObj.medium && !levelOptionsObj.hard) {
        getInput.setAttribute("type", "number");
    } 
    else if (!levelOptionsObj.easy && levelOptionsObj.medium && !levelOptionsObj.hard) {
        getInput.value = getInput.value.replace(/[^a-zA-Z]/g, '')
    } 
}


export default allowedInputVal;
