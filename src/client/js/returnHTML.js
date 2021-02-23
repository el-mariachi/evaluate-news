const returnHTML = (element = 'div', text) => {
    const el = document.createElement(element);
    el.textContent = text;
    return el;
};

export { returnHTML };