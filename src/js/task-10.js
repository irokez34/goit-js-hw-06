function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesCon = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
boxesCon.innerHTML = '';
amount = input.value;
const boxes = [];
let size = 30;

for (let i = 0; i < amount; i++) {
 const box = document.createElement('div');
 box.style.width = `${size}px`;
 box.style.height =`${size}px`;
 box.style.backgroundColor = getRandomHexColor();
 boxes.push(box);
 size +=10;
}
boxesCon.append(...boxes);
}
function destroyBoxes (){
  boxes.innerHTML ='';
}