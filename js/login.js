// Simulasi data login yang valid
const validUsername = "member01";
const validPassword = "12345";

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validasi login
    if (username === validUsername && password === validPassword) {
        alert("Login berhasil!");
        window.location.href = "../index/home.html";
         // Redirect ke halaman utama aplikasi
    } else {
        errorMessage.textContent = "Username atau password salah.";
    }
});
