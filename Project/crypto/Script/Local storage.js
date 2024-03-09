const submit = document.getElementById('submit');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

submit.addEventListener('click', function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username !== '' && password !== '') {
        localStorage.setItem(user, username);
        localStorage.setItem(pass, password);
    }
    else {
        usernameError.innerHTML = "Please enter your username";
        passwordError.innerHTML = "Please enter your password"
        return false;
    }
});
