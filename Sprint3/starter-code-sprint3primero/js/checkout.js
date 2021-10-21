// Get the input fields
/*-------------------------------------------------*/
const first_name = document.getElementById("first_name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const last_name =document.getElementById("last_name");
const last_name2 =document.getElementById("last_name");
const contraseña = document.getElementById("contraseña");
const telefono = document.getElementById("telefono");

// Get the error elements
var errorName = document.getElementById('errorName');  
var errorEmail= document.getElementById('errorEmail');  
var errorAddress =document.getElementById('errorAddress');
var errorLastName =document.getElementById('errorLastName');
var errorPassword = document.getElementById("errorPassword");
var errorPhone = document.getElementById('errorPhone');  

// Exercise 9
function validateForm(event) {
    var isFirstNameValid = validateFirstName(first_name.value);
    var isEmailValid = validateEmail(email.value);
    var isAddressValid = validateAddress(address.value);
    var isLastNameValid = validateLastName(last_name.value);
    var isPasswordValid = validatePassword(contraseña.value);
    var isPhoneValid = validatePhone(telefono.value);
    
    // Validate fields entered by the user: name, phone, password, and email
    if (isFirstNameValid && isPasswordValid && isAddressValid && isEmailValid && isLastNameValid && isPhoneValid) {
        alert('Formulario valido. Form submitted');
    } else {
        alert('Formulario No valido, verfica que todo los campos esten completados adecuadamente.');
        
        event.preventDefault();
    }
}

function isFieldEmpty(fieldName) {
    return fieldName === '';
} 

function minFourCharact(input) {
    if (input.length >= 4) {
        return true;
    } else {
        return false;
    }
}

function correctPhoneNum(num) {
    if( !(/^\d{9}$/.test(num)) ) {
        return false;
      } else {
          return true;
      }
}

function onlyLetters(inputNames) {
    if (!/^[a-zA-Z]*$/g.test(inputNames)){
        return false;
    } else {
        return true;
    }
}

function onlyLettersNumbers(pass) {
    if (!/^[0-9a-zA-Z]+$/.test(pass)){
        return false;
    } else {
        return true;
    }
} 

/*
function correctEmail(email) {
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        return false;
    } else {
        return true;
    }
}*/

function validateFirstName(firstName) {
    let name = document.querySelector('.name');

    if(!isFieldEmpty(firstName) && minFourCharact(firstName) && onlyLetters(firstName)) {
        errorName.style.display = 'none';
        name.style.border = "2px solid black";
        return true;
    } else {
        errorName.style.display = 'block';
        name.style.border = "4px solid red";
        return false;
    }
   
}

function validateEmail(email) {
    if(!isFieldEmpty(email) && minFourCharact(email) /*&& correctEmail(email)*/) {
        errorEmail.style.display = 'none';
        return true;
    } else {
        errorEmail.style.display = 'block';
        return false;
    }
}

function validateAddress(address) {
    let direccion = document.querySelector('.direccion');
    if (!isFieldEmpty(address) && minFourCharact(address)) {
        errorAddress.style.display = 'none';
        direccion.style.border = "2px solid black";
        return true;
    } else {
        errorAddress.style.display = 'block';
        direccion.style.border = "4px solid red";
        return false;
    }
}

function validateLastName(lastname) {
    let namelast = document.querySelector('.namelast');
    if(!isFieldEmpty(lastname) && minFourCharact(lastname) && onlyLetters(lastname)) {
        errorLastName.style.display = 'none';
        namelast.style.border = "2px solid black";
        return true;
    } else {
        errorLastName.style.display = 'block';
        namelast.style.border = "4px solid red";
        return false;
    }
}

function validatePassword(password) {
    var pass = document.querySelector(".password");

    if(!isFieldEmpty(password) && minFourCharact(password) && onlyLettersNumbers(password)) {
        errorPassword.style.display = 'none';
        pass.style.border = "2px solid black";
        return true;
    } else {
        errorPassword.style.display = 'block';
        pass.style.border = "4px solid red";
        return false;
    }
}

function validatePhone(phoneNum) {
    var phone = document.querySelector('.phone');

    var onlyNumbers = true; 
    if(!isFieldEmpty(phoneNum) && minFourCharact(phoneNum) && correctPhoneNum(phoneNum)) {
        errorPhone.style.display = 'none';
        phone.style.border = "2px solid black";
        return true;
    } else {
        errorPhone.style.display = 'block';
        phone.style.border = "4px solid red";
        return false;
    }
}
