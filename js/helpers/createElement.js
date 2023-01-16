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

function createIconButton(iconName, onClick) {
    const button = createElement('button', 'icon-button', { onclick: onClick });
    const icon = createElement('span', 'material-icons', { innerText: iconName });
    button.appendChild(icon);

    return button;
}

export {
    createElement,
    createIconButton
};
