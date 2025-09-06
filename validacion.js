const consulta = document.getElementById("consulta");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje")

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorMensaje = document.getElementById("errorMensaje");
const resultado = document.getElementById("resultado");

consulta.addEventListener("submit", function(event){
    event.preventDefault();
    let valido = true;

    //Validar nombre
    if (nombre.value.trim().length < 3){
        errorNombre.textContent = "Error. El nombre debe contener 3 caracteres mínimo.";
        valido = false;
    }else{
        errorNombre.textContent = "";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        errorEmail.textContent = "Error. Ingresa un email válido.";
        valido = false;
    }else{
        errorEmail.textContent = "";
    }

    // Validar mensaje
    if (mensaje.value.trim().length < 10) {
        errorMensaje.textContent = "Error. El mensaje debe tener al menos 10 caracteres.";
        valido = false;
    }else{
        errorMensaje.textContent = "";
    }

    // Evitar envío si hay errores
    if (!valido) {
        event.preventDefault();
        resultado.textContent = "";
    }else{
        event.preventDefault();
        resultado.textContent = "Mensaje enviado con éxito.";
        resultado.className = "success";
        consulta.reset();
    }

})
