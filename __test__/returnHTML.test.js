/**
 * @jest-environment jsdom
 */
import { returnHTML } from '../src/client/js/returnHTML';

describe("Testing returnHTML functionality", () => {
    test('Testing returnHTML() function', () => {
        expect(returnHTML).toBeDefined();
    });
    test('Testing returnHTML() with no arguments', () => {
        const div = document.createElement('div');
        expect(returnHTML()).toEqual(div);
    });
    test('Testing returnHTML() to create any element', () => {
        const elName = 'p';
        const content = 'Test content';
        const el = document.createElement(elName);
        el.textContent = content;
        expect(returnHTML(elName, content)).toEqual(el);
    });
});