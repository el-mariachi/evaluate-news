import { displayResults } from '../src/client/js/displayResults';

describe('Testing the submit functionality', () => {
    test('Testing the displayResults() function', () => {
        // function has no return value
        // the only test is for it to be defined
        expect(displayResults).toBeDefined();
    });
});