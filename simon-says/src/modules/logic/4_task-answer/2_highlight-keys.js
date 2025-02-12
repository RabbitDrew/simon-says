import taskObj from "../0_data/1_ task-data";
import { enableKeypadInput, disableKeypadInput } from "../6_keyboard/0_0_keyboardHandler";

const highlightKeys = function () {
    const keys = document.querySelectorAll('.key');
    if (keys.length) {
        disableKeypadInput()
        keys.forEach(key => key.classList.add('disable'))
        taskObj.taskArr.forEach((currKey, i) => {
            setTimeout(() => {
                const key = Array.from(keys).find((k) => k.textContent === currKey);
                if (key) {
                    key.classList.add('key--anim');
                    setTimeout(() => {
                        key.classList.remove('key--anim');
                    }, 400);
                }
            }, i * 300);
        });

        setTimeout(() => {
            keys.forEach(key => key.classList.remove('disable'))
            enableKeypadInput()
        }, taskObj.taskArr.length *300 +400)
    }
};

export default highlightKeys