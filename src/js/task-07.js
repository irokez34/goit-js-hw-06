
const inputControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
inputControl.addEventListener('input', ()=>
{
    const textSize = inputControl.value;
    spanText.style.fontSize = `${textSize}px `;
});