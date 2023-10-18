
const form = document.querySelector('.login-form');


form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
    return alert("форма не заповнена");
  }
  const data = {
                email,
                password,
              };
  console.log(data);
  form.reset();
}