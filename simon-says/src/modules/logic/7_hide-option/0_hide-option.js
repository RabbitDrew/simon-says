const getOptions = document.querySelectorAll('.options-item') 
const hideOptions = function () {
     getOptions.forEach(option => {
        if (option.classList.contains('option--hide')) {
            option.classList.remove('option--hide')
            option.classList.add('option--show')
        }else {
            option.classList.remove('option--show')
            option.classList.add('option--hide')
        }
     })
}

export default hideOptions