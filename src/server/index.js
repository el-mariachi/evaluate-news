require('dotenv').config();
// var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

const app = express();
const PORT = 8081;

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'));
});

app.post('/url', (req, res) => {
    console.log(req.body);
    res.status(500).send('Internal Server Error');
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1';

