import elCreator from "../../global/el-creator";
import elRendering from "../../global/el-rendering";

const createDropdownOptions = () => {
    const optionItemDrop = elCreator('ul', 'option-item-drop');  

    const dropdownOptions = [
        'Easy',
        'Medium',
        'Hard'
    ];

    dropdownOptions.forEach(optionTitle => {
        const dropItem = elCreator('li', 'drop-item');
        const dropItemTitle = elCreator('h2', 'drop-item-title');
        dropItemTitle.textContent = optionTitle;

        elRendering(dropItem, dropItemTitle);
        elRendering(optionItemDrop, dropItem);
    });

    return optionItemDrop;
};


export default createDropdownOptions