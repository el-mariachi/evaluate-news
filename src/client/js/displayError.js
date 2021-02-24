const displayError = message => {
    const error = Client.returnHTML('p', message);
    error.className = 'error';
    Client.renderOutput(error);
};

export { displayError };