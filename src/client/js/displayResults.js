const displayResults = results => {
    const target = document.getElementById('results');
    if (!target) {
        return;
    }
    target.innerHTML = '';
    const status = document.createElement('p');
    status.textContent = `Analysis result status: ${results.result}`;
    let messageContent;
    if (results.result === 'OK') {
        // status.className = 'result';
        messageContent = document.createElement('table');
        messageContent.className = 'table';
        messageContent.innerHTML = `
        <tr><td>Polarity</td><td>${results.score_tag}</td></tr>
        <tr><td>Subjectivity</td><td>${results.subjectivity}</td></tr>
        <tr><td>Irony</td><td>${results.irony}</td></tr>
        <tr><td>Confidence</td><td>${results.confidence}</td></tr>
        `;
    } else {
        status.className = 'error';
        messageContent = document.createElement('p');
        messageContent.textContent = `Reason: ${results.msg}`;
    }
    target.append(status);
    target.append(messageContent);
};

export { displayResults };