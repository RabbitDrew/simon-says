const elCreator = (tag, selectorName) => {
    const element = document.createElement(tag)
          element.className = selectorName
    return element
}

export default elCreator