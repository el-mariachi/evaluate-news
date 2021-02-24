const displayResults = results => {

    const status = Client.returnHTML('p', `Analysis result status: ${results.result}`);
    let messageContent;
    if (results.result === 'OK') {
        // status.className = 'result';
        messageContent = Client.returnHTML('table');
        messageContent.className = 'table';
        messageContent.innerHTML = `
        <tr><td>Polarity:</td><td>${results.score_tag}</td></tr>
        <tr><td>Subjectivity:</td><td>${results.subjectivity}</td></tr>
        <tr><td>Irony:</td><td>${results.irony}</td></tr>
        <tr><td>Confidence:</td><td>${results.confidence}</td></tr>
        `;
    } else {
        status.className = 'error';
        messageContent = Client.returnHTML('p', `Reason: ${results.msg}`);
    }
    const wrapper = document.createDocumentFragment();
    wrapper.append(status, messageContent);
    Client.renderOutput(wrapper);
    // target.append(status);
    // target.append(messageContent);
};

export { displayResults };