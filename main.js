function loguear() {
    var user = document.getElementById("Usuario").value;
    var pasword = document.getElementById("contrasena").value;

    // Cambia estas credenciales por un backend real
    const validUser = "10155002-S";
    const validPassword = "93699";

    if (user === validUser && pasword === validPassword) {
        // Redirige a la página protegida sin ningún control de sesión
        window.location = "LOGIN.html";
    } else {
        alert("Datos incorrectos");
    }

    // Prevenir el envío del formulario
    return false;
}

// Función para cerrar sesión, simplemente redirige a la página de login
function cerrarSesion() {
    window.location.replace("index.html"); // Redirige al login
}

