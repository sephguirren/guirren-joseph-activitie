function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const conpass = document.getElementById('conpass').value;

    const error = document.getElementById('error');
    const success = document.getElementById('success');

    if (username.length === 0 || password.length === 0 || conpass.length === 0) {
        error.innerHTML = "Username and Password fields cannot be empty.";
        error.style.visibility = "visible";
    } 
    else if (password !== conpass) {
        error.innerHTML = "Passwords do not match.";
        error.style.visibility = "visible";
    } 
    else {
        error.style.visibility = "hidden";
        success.innerHTML = "Registration Successful!";
        success.style.visibility = "visible";
    }
}
