// Función para iniciar sesión
function loguear() {
    var user = document.getElementById("Usuario").value;
    var password = document.getElementById("contrasena").value;

    // Cambia estas credenciales por un backend real o por un método más seguro
    const validUser = "10155002-S";
    const validPassword = "93699";

    // Verifica si las credenciales son correctas
    if (user === validUser && password === validPassword) {
        // Almacena en sessionStorage para que no se cierre la sesión fácilmente
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("usuario", user); // Almacenar el usuario
        sessionStorage.setItem("contrasena", password); // Almacenar la contraseña

        // Redirige a la página protegida después de un login exitoso
        window.location.href = "LOGIN.html";
    } else {
        alert("Datos incorrectos");
    }

    // Prev

