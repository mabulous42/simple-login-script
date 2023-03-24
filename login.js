let pass1 = document.getElementById('inputPassword');
let pass2 = document.getElementById('confirmPassword');

function showAndHidePassword(input, button) {
    if (document.getElementById(input).type == "password") {
        document.getElementById(input).type = "text";
        document.getElementById(button).innerHTML = 'Hide';
    }
    else {
        document.getElementById(input).type = "password";
        document.getElementById(button).innerHTML = 'Show';
    }
}

function show() {
    showAndHidePassword('inputPassword', 'firstShowAndHideButton');
}

function display() {
    showAndHidePassword('confirmPassword', 'secondShowAndHideButton');
}


function login() {


    if (pass1.value === '' || pass2.value === '') {
        alert('Password is too short');
    } 

    else if (pass1.value.length < 8) {
        alert('password is too weak');
    } 

    else if (pass1.value == pass2.value) {
        alert('Login Successful');
    } 

    else {
        alert('Your password does not matched');
    }

}