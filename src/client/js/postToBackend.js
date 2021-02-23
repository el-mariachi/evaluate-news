const postToBackend = (url = '', data = {}) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.error(err);
            Client.displayErrorMessage(`Localhost server error: ${err}`);
        });
};

export { postToBackend };