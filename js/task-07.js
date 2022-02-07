
const sizeValue = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeValue.addEventListener('input', onSizeChange);

function onSizeChange(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}