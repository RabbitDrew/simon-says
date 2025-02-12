const geInput = document.querySelector('.input-field')

const keyClicker = function (event) {
    geInput.value += event.target.textContent
}

export default keyClicker