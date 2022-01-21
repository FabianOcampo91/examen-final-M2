const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const users = 'https://tiendavirtualmern.herokuapp.com/api/users';
const login = 'https://tiendavirtualmern.herokuapp.com/api/users/login';



signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');

  function usuario (nombre, email, password) {
    this.nombre = nombre,
    this.email= email,
    this.password = password
  }

  let nameCapture = document.getElementById("name").value;
  let emailCapture = document.getElementById("email").value;
  let passCapture = document.getElementById("pass").value;
  
  const nuevoUsuario = new usuario(nameCapture, emailCapture, passCapture)

  fetch(users, {
    method: 'POST',
    body: JSON.stringify(nuevoUsuario),
    
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(console.error())

});


signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});


// const nombre = document.querySelector('#name');
// console.log(signUpButton);

























// signUpButton.addEventListener('click', () => {
//   const nuevoUser = {
//     name: '',
//     email: '',
//     password: '',
//   };
  

// });

