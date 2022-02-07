let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', onDecrementCounter);
refs.incrementBtn.addEventListener('click', onIncrementCounter);

function onDecrementCounter() {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
};

function onIncrementCounter() {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
};
