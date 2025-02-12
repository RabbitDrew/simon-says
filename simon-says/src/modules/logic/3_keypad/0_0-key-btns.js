import keysBtnHandler from "./0_1_keys-btn-click-handler"

document.addEventListener('click', (event) => {
    const keys= document.querySelectorAll('.key')
    if (keys.length) {
      if (event.target.closest('.key-title')|| event.target.closest('.key')) {
        keysBtnHandler(event)
      }else {
        return
      }
    }else {
        return
    }
    

})