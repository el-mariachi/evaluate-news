require('dotenv').config();
// var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js');

const app = express();
const PORT = 8081;
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1';

const polarity = score_tag => {
    switch (score_tag) {
        case 'P+':
            return 'strong positive'
            break;
        case 'P':
            return 'positive';
            break;
        case 'NEU':
            return 'neutral';
            break;
        case 'N':
            return 'negative';
            break;
        case 'N+':
            return 'strong negative';
            break;
        default:
            return 'without sentimemt';
            break;
    }
};

const prepBody = () => {
    return {
        key: process.env.API_KEY,
        of: 'json',
        lang: 'en'
    };
}

const analyse = async body => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            if (res.status.code !== '0') {
                return {
                    result: 'Error',
                    response: `Cloud servece failed to analyse the source.\n{res.status.msg}`
                };
            } else {
                const { score_tag, subjectivity, confidence, irony } = res;
                return {
                    result: 'OK',
                    score_tag: polarity(score_tag),
                    subjectivity,
                    confidence,
                    irony
                };
            }
        });
        return response;
    } catch(err) {
        // in case of an error send it to frontend to be shown to user
          console.log(err);
          return {
              result: 'Error',
              response: err
          }
    }
};

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// send index.html
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'));
});
// route for url request
app.post('/url', async (req, res) => {
    const body = prepBody();
    Object.assign(body, {url: req.body.url});
    const apiResponse = await analyse(body);
    // any type of result is sent to the browser to display
    res.status(200).json(apiResponse);
});

// route for text request
app.post('/text', async (req, res) => {
    const body = prepBody();
    Object.assign(body, {txt: req.body.text});
    const apiResponse = await analyse(body);
    // any type of result is sent to the browser to display
    res.status(200).json(apiResponse);
});
// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

