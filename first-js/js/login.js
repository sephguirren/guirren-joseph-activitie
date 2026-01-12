function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username.length === 0 || password.length === 0) {
        alert("Username and Password is required");
    } else if (username === 'admin' && password === 'password') {
        alert('Wenla, Mabalin mo iaccess daytoy site!');
    } else {
        alert('Madi ka makastre, Boi!');
    }
    
}