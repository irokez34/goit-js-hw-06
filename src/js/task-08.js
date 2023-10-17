
const form = document.querySelector('.login-form');


form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return alert("форма не заповнена");
  }
  const data = {
                email: `${email}`,
                password: `${password}`
              };
  console.log(data);
  form.reset();
}