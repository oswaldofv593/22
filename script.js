document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Datos de usuario codificados
    const validEmail = "usuario@ejemplo.com";
    const validPassword = "contraseña123";

    // Obtener valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar credenciales
    if (email === validEmail && password === validPassword) {
        // Redirigir a dashboard.html
        window.location.href = "dashboard.html";
    } else {
        // Mostrar mensaje de error
        document.getElementById('error-message').innerText = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
});
