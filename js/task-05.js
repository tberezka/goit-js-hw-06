const refs = {
    nameInput: document.querySelector('#name-input'),
    message: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== '') {
       refs.message.textContent = event.currentTarget.value;
    } else {
       refs.message.textContent = 'Anonymous';
    }
}