document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword () {

    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#№;%:&*()-_+=<>?';

    let allCharacters = '';

    if (document.getElementById('uppercase').checked){
        allCharacters += upperCaseLetters;
    }
    if (document.getElementById('lowercase').checked){
        allCharacters += lowerCaseLetters;
    }
    if (document.getElementById('numbers').checked){
        allCharacters += numbers;
    }
    if (document.getElementById('symbols').checked){
        allCharacters += symbols;;
    }

    if ( allCharacters === '' ){
        alert('Please select at least one character type!');
        return;
    }

    const passwordLength = document.getElementById('length').value;

    let password = '';

    for (let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex]
    }

    document.getElementById('password').value = password;
}

function copyPassword () {
    const passwordInput = document.getElementById('password');
    passwordInput.select();
    document.execCommand('copy');
}