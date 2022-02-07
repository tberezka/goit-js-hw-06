function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  buttonEl: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),
  bodyColor: document.querySelector('body'),
}

refs.buttonEl.addEventListener('click', onColorChange);

function onColorChange() {
  refs.colorName.textContent = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = refs.colorName.textContent;
}