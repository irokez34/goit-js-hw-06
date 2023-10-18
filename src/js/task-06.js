const input = document.querySelector("#validation-input");

input.addEventListener("blur", ()=>{

const dataLength = Number(input.dataset.length)
const inputLength = input.value.length;


function listToggle(element, a , b)
{
  element.classList.remove(a);
  element.classList.add(b);
}


if (inputLength === dataLength) {
  listToggle(input, "invalid" , "valid")


} else {
  listToggle(input, "valid" , "invalid")
  
 
}




// console.log(dataLength);
// console.log(inputLength);
})



