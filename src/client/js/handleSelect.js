/**
 * Input type selector handler
 */
export function handleSelect() {
    const form = document.forms[0];
    switch (this.selectedIndex) {
        case 0:
            form.classList.remove('form--input-text');
            form.classList.add('form--input-url');
            break;
        case 1:
            form.classList.add('form--input-text');
            form.classList.remove('form--input-url');
        default:
            break;
    }
};