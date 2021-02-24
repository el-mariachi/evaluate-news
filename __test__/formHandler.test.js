import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing the submit functionality', () => {
    test('Testing the handleSubmit() function', () => {
        // function has no return value
        // the only test is for it to be defined
        expect(handleSubmit).toBeDefined();
    });
});