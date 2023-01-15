function createElement(tagName, className = undefined, elProps = undefined) {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    if (elProps) {
        Object.keys(elProps).forEach(key => {
            element[key] = elProps[key];
        });
    }
    return element;
}

export default createElement;
