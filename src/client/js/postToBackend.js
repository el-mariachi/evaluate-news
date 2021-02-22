const postToBackend = (url = '', data = {}) => {
    console.log(data);
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            Client.displayErrorMessage(`Server error: ${err}`);
        });
};

export { postToBackend };