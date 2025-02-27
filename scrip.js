document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("empresaForm");
    const mensajeRespuesta = document.getElementById("mensajeRespuesta");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        // Obtener valores
        const nombre = document.getElementById("nombre");
        const cif = document.getElementById("cif");
        const telefono = document.getElementById("telefono");
        const mensaje = document.getElementById("mensaje");

        // Validaciones con Regex
        const regexCIF = /^[A-Z]\d{7}[A-Z0-9]$/; // ✅ Correcto

        const regexTelefono = /^[6-9]\d{8}$/; // Número español válido

        if (nombre.value.trim() === "") {
            showError(nombre, "nombreError");
            isValid = false;
        }
        if (!regexCIF.test(cif.value.trim())) {
            showError(cif, "cifError");
            isValid = false;
        }
        if (!regexTelefono.test(telefono.value.trim())) {
            showError(telefono, "telefonoError");
            isValid = false;
        }
        if (mensaje.value.trim() === "") {
            showError(mensaje, "mensajeError");
            isValid = false;
        }

        // Si todo es válido, mensaje de éxito
        if (isValid) {
            mensajeRespuesta.textContent = "✅ Tu mensaje fue enviado con éxito";
            mensajeRespuesta.style.opacity = "1";
            form.reset();

            setTimeout(() => {
                mensajeRespuesta.style.opacity = "0";
            }, 3000);
        }
    });

    function showError(inputElement, errorId) {
        const errorElement = document.getElementById(errorId);
        errorElement.style.display = "block";
        inputElement.classList.add("error");
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");
        document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
        mensajeRespuesta.style.opacity = "0";
    }
});
