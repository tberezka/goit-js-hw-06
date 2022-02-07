const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
    if (event.currentTarget.value.length >= inputValue.dataset.length) {
        inputValue.classList.add('valid');
        inputValue.classList.remove('invalid');
    } else {
        inputValue.classList.add('invalid');
        inputValue.classList.remove('valid');
    }
}

