require('dotenv').config();
var path = require('path');
const express = require('express');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

const app = express();
const PORT = 8081;

app.use(express.static('dist'));
app.use(cors());

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html');
    res.sendFile(path.resolve('src/client/views/index.html'));
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})
