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
});