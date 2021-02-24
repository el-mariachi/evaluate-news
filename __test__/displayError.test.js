import { displayError } from '../src/client/js/displayError';

describe('Testing the submit functionality', () => {
    test('Testing the displayError() function', () => {
        // function has no return value
        // the only test is for it to be defined
        expect(displayError).toBeDefined();
    });
});