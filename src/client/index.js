import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { handleSelect } from './js/handleSelect';

// import './styles/vars.scss';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

document.getElementById('select').addEventListener('change', handleSelect);

export {
    checkForName,
    handleSubmit,
    handleSelect
};