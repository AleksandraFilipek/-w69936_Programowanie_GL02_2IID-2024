// function validateName(){
//     var inputString = document.getElementById("name").value;
//   var pattern=/^[a-z]+\\[a-z]+\\[a-z]+$/;
//   if (!pattern.test(inputString)) {
//     alert("nie");
//   } else {
//     alert("tak");
//   }
// }

// nameInput.addEventListener('input', validateName);

// form.addEventListener('submit', (event) => {
//  event.preventDefault();
//  validateName();
//  validateSurname();
//  validateEmail();
//  validatePassword();
// });
const countyField=document.getElementById('county');
const countryField=document.getElementById('country');

if(countryField=="polska"){

}

const emailField = document.getElementById('emaill');
emailField.addEventListener('input', () => {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(emailField.value)) {
   emailField.setCustomValidity("Proszę podać poprawny adres e-mail.");
 }
 else{
   emailField.setCustomValidity("");
 }
});

const nameField = document.getElementById('name');
nameField.addEventListener('input', () => {
 const nameRegex = /^[A-Z][a-zA-Z\- ]{1,}$/;
 if (!nameRegex.test(nameField.value)) {
   nameField.setCustomValidity("Proszę podać poprawne imię.");
 }
 else{
   nameField.setCustomValidity("");
 }
});

const surnameField = document.getElementById('surname');
surnameField.addEventListener('input', () => {
 const surnameRegex = /^[A-Z][a-zA-Z\- ]{1,}$/;
 if (!surnameRegex.test(surnameField.value)) {
   surnameField.setCustomValidity("Proszę podać poprawne nazwisko.");
 }
 else{
   surnameField.setCustomValidity("");
 }
});

const phoneField = document.getElementById('phone');
phoneField.addEventListener('input', () => {
 const phoneRegex =  /^[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{9,9}$/;
 if (!phoneRegex.test(phoneField.value)) {
   phoneField.setCustomValidity("Proszę podać poprawny numer telefonu.");
 }
 else{
   phoneField.setCustomValidity("");
 }
});


function matchPassword(){
   haslo1=document.getElementById("password").value;
   haslo2=document.getElementById("password2").value;
   if (haslo1==haslo2){
        
   }
}
