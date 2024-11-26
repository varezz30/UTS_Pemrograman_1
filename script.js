document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validasi login sederhana
    if (username === 'admin' && password === 'password') {
        window.location.href = 'menu.html'; // Pindah ke Halaman Menu Utama
    } else {
        alert('Username atau password salah!');
    }
});