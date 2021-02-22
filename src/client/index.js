import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

// import './styles/vars.scss';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

/**
 * Input type selector handler
 */
function handleSelect(event) {
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

document.getElementById('select').addEventListener('change', handleSelect);

export {
    checkForName,
    handleSubmit
};