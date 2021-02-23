const renderOutput = element => {
    if (!element) {
        return;
    }
    const target = document.getElementById('results');
    target.innerHTML = '';
    target.append(element);
};

export { renderOutput };