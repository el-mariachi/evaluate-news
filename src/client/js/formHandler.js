function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const myFormData = new FormData(form);
    let result = {};
    for (let [key, value] of myFormData.entries()) {
        result[key] = value;
    }
    switch (result.select) {
        case '0': // URL
            // TODO validate input (regex taken from regex101)
            const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/i;
            const matchURL = result.input_url.trim().match(urlRegex);
            if (!matchURL) {
                Client.displayErrorMessage('Error: Bad URL format.');
                break;
            }
            // TODO send POST to backend
            Client.postToBackend('http://localhost:8081/url', { url: result.input_url.trim() })
            .then(res => {
                // display results
                Client.displayResults(res);
            })
            .catch(err => {
                Client.displayErrorMessage(err);
            });
            break;
        case '1': // Text
            // validate input
            const textRegex = /\w+/;
            const matchText = result.input_text.match(textRegex);
            if (!matchText) {
                Client.displayErrorMessage('Error: Please enter some meaningful text!');
                break;
            }
            // send POST to backend
            Client.postToBackend('http://localhost:8081/text', { text: result.input_text.trim() })
            .then(res => {
                // display results
                Client.displayResults(res);
            })
            .catch(err => {
                Client.displayErrorMessage(err);
            });
            break;
        default:
            // display error
            Client.displayErrorMessage('Error: SOMETHING WENT WRONG. You really shouldn\'t have seen this message.');
            break;
    }
    let formText = document.getElementById('name').value;

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.message;
    //     });
}

export { handleSubmit };