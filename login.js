function show() {
    if (document.getElementById('inp1').type == "password") {
        document.getElementById('inp1').type = "text";
        document.getElementById('btn1').innerHTML = 'Hide';
    }
    else {
        document.getElementById('inp1').type = "password";
        document.getElementById('btn1').innerHTML = 'Show';
    }
}
function display() {
    if (document.getElementById('inp2').type == "password") {
        document.getElementById('inp2').type = "text";
        document.getElementById('btn2').innerHTML = 'Hide';
    }
    else {
        document.getElementById('inp2').type = "password";
        document.getElementById('btn2').innerHTML = 'Show';
    }
}



function login() {
    let pass1 = document.getElementById('inp1');
    let pass2 = document.getElementById('inp2');

    if (pass1.value === '' && pass2.value === '') {
        alert('Please enter your password')
    } else if (pass1.value == pass2.value) {
        alert('Login Successful');
        
    } else {
        alert('Your password does not matched');
    }
}