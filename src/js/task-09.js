function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click',handlerClick);

function handlerClick (evt){
const random = getRandomHexColor();
body.style.backgroundColor = random;
colorSpan.textContent = random;

}


