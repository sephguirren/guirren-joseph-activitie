function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const conpass = document.getElementById('conpass').value;

    if(username.length === 0 || password.length === 0 || conpass.length === 0) {
        alert("Username and Password is required");
    } else if (password === conpass) {
        alert('Karegister kan, Boi!');
    } else {
        alert('Madi ka makastrek, Boi!');
    }
    
}