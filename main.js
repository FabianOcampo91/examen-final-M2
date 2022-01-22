const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const users = 'https://tiendavirtualmern.herokuapp.com/api/users';
const login = 'https://tiendavirtualmern.herokuapp.com/api/users/login';

const signUpxButton = document.getElementById("signUpx");
const signInxButton = document.getElementById("signInx");


signUpButton.addEventListener('click', (e) => {
  container.classList.add('right-panel-active'); 
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

signUpxButton.addEventListener('click', function registrar () {
  
  function usuario (nombre, email, password) {
    this.nombre = nombre,
    this.email= email,
    this.password = password
  }
  
  let nameCapture = document.getElementById("name").value;
  let emailCapture = document.getElementById("email").value;
  let passCapture = document.getElementById("pass").value;
  
  const nuevoUsuario = new usuario(nameCapture, emailCapture, passCapture);
  
  fetch(users, {
    method: 'POST',
    body: JSON.stringify(nuevoUsuario),
    headers: {
      "Content-type": "aplication/json"
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))

});

signInxButton.addEventListener('click', function logeo(){
  function logear (email, password){
    this.email = email,
    this.password = password
  }

  const logearEmail = document.getElementById('#e-mail');
  const logearPass = document.getElementById('#password');

  const usuarioLogeado = new logear (logearEmail, logearPass);

  fetch(login, {
    method: 'POST',
    body: JSON.stringify(usuarioLogeado),
    headers: {
      "Constent-type": "aplicatio/json"
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
})