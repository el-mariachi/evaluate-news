const displayErrorMessage = message => {
    const target = document.getElementById('results');
    if (!target) {
        return;
    }
    target.innerHTML = '';
    const messagePara = document.createElement('p');
    messagePara.className = 'error';
    messagePara.textContent = message;
    target.append(messagePara);
};

export { displayErrorMessage };