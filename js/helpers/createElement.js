function createElement(tagName, className = undefined, elProps = undefined) {
    const element = document.createElement(tagName);

    if (elProps) {
        Object.keys(elProps).forEach(key => {
            element[key] = elProps[key];
        });
    }
    if (className) {
        if (element.className) {
            element.className += " " + className;
        }
        else {
            element.className = className;
        }
    }

    return element;
}

function createIconButton(iconName, elProps) {
    const button = createElement('button', 'icon-button', elProps);
    const icon = createElement('span', 'material-icons', { innerText: iconName });
    button.appendChild(icon);

    return button;
}

export {
    createElement,
    createIconButton
};
