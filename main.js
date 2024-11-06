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

    // Prevenir el envío del formulario
    return false;
}

// Verifica si el usuario está logueado al cargar la página
window.onload = function() {
    // Si no está logueado, redirige a la página de inicio de sesión
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "index.html"; // Redirige a la página de login si no está logueado
    } else {
        // Muestra la información del usuario en la página protegida
        const usuario = sessionStorage.getItem("usuario");
        const contrasena = sessionStorage.getItem("contrasena");
        document.getElementById("user-info").innerHTML = `<h3>Usuario: ${usuario}</h3><h3>Contraseña: ${contrasena}</h3>`;
    }
};

// Función para cerrar sesión
function cerrarSesion() {
    sessionStorage.removeItem("loggedIn"); // Elimina el estado de sesión
    sessionStorage.removeItem("usuario"); // Elimina el usuario
    sessionStorage.removeItem("contrasena"); // Elimina la contraseña

    // Redirige a la página de inicio de sesión después de cerrar sesión
    window.location.href = "index.html"; 
}
