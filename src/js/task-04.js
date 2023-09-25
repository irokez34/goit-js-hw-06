
const counterValue = document.querySelector("#value");

const decrementButton = document.querySelector('button[data-action = "decrement"]');
const incrementButton = document.querySelector('button[data-action = "increment"]');
let currentValue = 0;
incrementButton.addEventListener("click", () => {
currentValue += 1;
counterValue.textContent = currentValue;

});

decrementButton.addEventListener("click", () => {
  currentValue -=1;
  counterValue.textContent = currentValue;  
});
