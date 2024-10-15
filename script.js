const form = document.getElementById('username');

const nameInput = document.getElementById('name');

const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    nameError.textContent="";

    let isValid = true;

    if(nameInput.value.trim() === '')
   {
       nameError.textContent = "please enter your name";
       event.preventDefault();
       isValid = False;
   }   }