import { handleSubmit } from './js/formHandler';
import { handleSelect } from './js/handleSelect';
import { displayError } from './js/displayError';
import { postToBackend } from './js/postToBackend';
import { displayResults } from './js/displayResults';
import { returnHTML } from './js/returnHTML';
import { renderOutput } from './js/renderOutput';

// import './styles/vars.scss';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/results.scss';

document.getElementById('select').addEventListener('change', handleSelect);
document.forms[0].addEventListener('submit', handleSubmit);

export {
    handleSubmit,
    handleSelect,
    displayError,
    postToBackend,
    displayResults,
    returnHTML,
    renderOutput
};