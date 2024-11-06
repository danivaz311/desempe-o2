// Función para iniciar sesión
function loguear() {
    var user = document.getElementById("Usuario").value;
    var pasword = document.getElementById("contrasena").value;

    // Cambia estas credenciales por un backend real
    const validUser = "10155002-S";
    const validPassword = "93699";

    // Si el usuario y contraseña son correctos, guarda la sesión
    if (user === validUser && pasword === validPassword) {
        sessionStorage.setItem("loggedIn", "true");  // Almacena sesión
        window.location = "LOGIN.html";  // Redirige a la página protegida
    } else {
        alert("Datos incorrectos");
    }

    return false;  // Prevenir el envío del formulario
}

// Verifica si el usuario está logueado al cargar la página protegida
window.onload = function() {
    if (!sessionStorage.getItem("loggedIn")) {
        window.location = "index.html";  // Redirige al login si no está logueado
    }
};

// Función para cerrar sesión
function cerrarSesion() {
    sessionStorage.removeItem("loggedIn");  // Elimina la sesión
    window.location.replace("index.html");  // Redirige al login
}

