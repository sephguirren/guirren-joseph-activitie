function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const conpass = document.getElementById('conpass').value;

    if (username.length === 0 || password.length === 0 || conpass.length === 0) {
        alert("All fields are required.");
    } 
    else if (password !== conpass) {
        alert("Passwords do not match.");
    } 
    else {
        alert("Registration successful!");
    }
}
