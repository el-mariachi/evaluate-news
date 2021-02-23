const returnHTML = (element, text) => {
    if(!element) {
        return document.createElement('div');
    } else {
        const el = document.createElement('element');
        el.textContent = text;
        return el;
    }
};

export { returnHTML };