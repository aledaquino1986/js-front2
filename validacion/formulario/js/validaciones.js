const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#rePassword");
const selectForm = document.querySelector("select.form-control");
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.querySelector(".contact-form")
const checkLetters = /^[0-9]+$/
let fullNameError = document.querySelector("div.fullName");
let emailError = document.querySelector("div.email");
let passwordError = document.querySelector("div.password")
let rePasswordError = document.querySelector("div.rePassword")
const h2 = document.querySelector("h2")


let mensajes = [];
let mensajesExito = [];
    
     
function isInvalid(elemento) {
  elemento.classList.add("is-invalid");
}

function invalidFeedback(elemento) {
  elemento.classList.add("invalid-feedback");
}



function validateFullName(userName) {
  if (userName === "" || userName === null) {
    fullNameError.innerText = "Debe ingresar un nombre." 
    mensajes.push(fullNameError.innerText);
    isInvalid(fullName);
  } else if (userName.length < 2) {
    fullNameError.innerText = "El nombre debe tener al menos 2 caracteres." 
    mensajes.push(fullNameError.innerText);
    isInvalid(fullName);
  } else {
    mensajesExito.push(userName)
  }
}

function validateEmail(userEmail) {

  if (userEmail === "" || userEmail === null) { 
    emailError.innerText = "Debe ingresar un correo electrónico válido."
    mensajes.push(emailError.innerText);
    isInvalid(email);
  } else if (!emailFormat.test(userEmail)) {
    emailError.innerText = "El correo electrónico debe tener un formato válido."
    mensajes.push(emailError.innerText);
    isInvalid(email);
  } else {
    mensajesExito.push(userEmail)
  }

  

}

function validatePassword(userPassword) {
  if (userPassword === "" || userPassword === null) {
    passwordError.innerText = "Debe ingresar una contraseña."
    mensajes.push(passwordError.innerText);
    isInvalid(password);
    password.value = "";
  } else if (userPassword.length < 4) {
    passwordError.innerText = "Su contraseña debe tener al menos 4 caracteres."
    mensajes.push(passwordError.innerText);
    isInvalid(password);
    password.value = "";
  } 
}


function validateRePassword(userRePassword) {
  if (userRePassword === "" || userRePassword === null) {
    rePasswordError.innerText = "Debe repetir una contraseña."
    mensajes.push(rePasswordError.innerText);
    rePassword.value = "";
    isInvalid(rePassword);
  } else if (userRePassword.length < 4) {
    rePasswordError.innerText = "La repetición de la contraseña debe tener al menos 4 caracteres."
    mensajes.push(rePasswordError.innerText);
    isInvalid(rePassword);
    rePassword.value = "";
  }
}


function validateTelephone(userTelephone) {
  if (!checkLetters.test(userTelephone) || userTelephone == "") {
    let phoneError = document.querySelector("div.phone")
    phoneError.innerText = "Su número de teléfono solo puede incluir números" 
    mensajes.push(phoneError.innerText);
    isInvalid(phone);
  } else {
    mensajesExito.push(userTelephone)
  }
}

function comparePasswords (userPassword, userRePassword) {
  if (userPassword != userRePassword) {
    passwordError.innerText = "Las contraseñas no coinciden."
    mensajes.push(passwordError.innerText);
    isInvalid(password);
    password.value = "";
    rePasswordError.innerText = "Las contraseñas no coinciden."
    mensajes.push(rePasswordError.innerText);
    rePassword.value = "";
    isInvalid(rePassword);
  } else {
    validatePassword(userPassword)
    validateRePassword(userRePassword)
    
  }
}


function validarSelect(selectUsuario) {
   if (selectUsuario == "") {
    isInvalid(selectForm);
   }  else {
    mensajesExito.push(selectUsuario)
  }
}

function crearUl() {
  h2.insertAdjacentHTML('afterend', "<ul id= 'lista'></ul>")
}

function crearLi() {
  let lista = document.querySelector("#lista");
  mensajesExito.forEach(function (element) {
    lista.innerHTML += `<li class="msg-error">${element}</li>`;
    
  });
  mensajesExito = [];
  lista.insertAdjacentHTML("afterend", "<h3> ¡Gracias por registrarte! </h3>")
}

form.addEventListener("submit", function (e) {
  
  validateFullName(fullName.value);
  validateEmail(email.value);
  validateTelephone(phone.value)
  validarSelect(selectForm.value)
  comparePasswords(password.value, rePassword.value)
  console.log(typeof selectForm.value)

  if (mensajes.length > 0) {
    e.preventDefault();
    mensajes = []
    mensajesExito = []
  } else {
    e.preventDefault();
    form.style.display = "none";
    crearUl()
    crearLi()
  }

});

