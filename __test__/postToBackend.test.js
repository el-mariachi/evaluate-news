import { postToBackend } from '../src/client/js/postToBackend';
import 'regenerator-runtime/runtime';
global.fetch = require('node-fetch');

describe("Testing postToBackend functionality", () => {
    test('Testing postToBackend() function', () => {
        expect(postToBackend).toBeDefined();
    });
    const url = 'http://localhost:8081/text';
    test('Testing postToBackend succsessful return value', () => {
        const text = { text: 'The country passed the grim toll around 5 p.m., and bells began tolling at the National Cathedral, resounding across a capital with flags lowered to half-staff. About an hour later, Mr. Biden appeared in the Cross Hall of the White House and pulled a card from his jacket pocket that he said was updated each day with the number of those infected with the coronavirus and those who died of Covid-19.' };
        const expected = {
            result: expect.any(String),
            score_tag: expect.any(String),
            subjectivity: expect.any(String),
            confidence: expect.any(String),
            irony: expect.any(String)
        }
        expect.assertions(1);
        return expect(postToBackend(url, text)).resolves.toMatchObject(expected);
    });

    test('Testing postToBackend with incorrect input data', () => {
        const plainString = 'The country passed the grim toll around 5 p.m., and bells began tolling at the National Cathedral, resounding across a capital with flags lowered to half-staff. About an hour later, Mr. Biden appeared in the Cross Hall of the White House and pulled a card from his jacket pocket that he said was updated each day with the number of those infected with the coronavirus and those who died of Covid-19.';
        expect.assertions(1);
        return postToBackend(url, plainString).catch(e => {
            expect(Object.getPrototypeOf(e).name).toEqual('FetchError');
        });
    });
});
