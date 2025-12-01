// HEADER SHRINK ON SCROLL (garde ton header, mais plus pro)
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        header.style.padding = "10px 60px";
        header.style.background = "rgba(0,0,0,0.75)";
    } else {
        header.style.padding = "16px 60px";
        header.style.background = "rgba(0,0,0,0.45)";
    }
});
// ----- VALIDACIÓN FORMULARIO -----
const form = document.getElementById("form");
const msgOk = document.getElementById("form-msg");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorTelefono = document.getElementById("error-telefono");
const errorAsunto = document.getElementById("error-asunto");
const errorMensaje = document.getElementById("error-mensaje");
const errorPrivacidad = document.getElementById("error-privacidad");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value.trim();
    let privacidad = document.getElementById("privacidad").checked;

    let hayError = false;

    // Reset mensajes
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorTelefono.textContent = "";
    errorAsunto.textContent = "";
    errorMensaje.textContent = "";
    errorPrivacidad.textContent = "";
    msgOk.classList.add("hidden");

    // Nombre
    if (!nombre) {
        errorNombre.textContent = "El nombre es obligatorio.";
        hayError = true;
    }

    // Email
    if (!email) {
        errorEmail.textContent = "El email es obligatorio.";
        hayError = true;
    } else if (!email.includes("@") || !email.includes(".")) {
        errorEmail.textContent = "Introduce un email válido.";
        hayError = true;
    }

    // Teléfono (solo si escribe algo)
    if (telefono && telefono.length < 6) {
        errorTelefono.textContent = "Número de teléfono demasiado corto.";
        hayError = true;
    }

    // Asunto
    if (!asunto) {
        errorAsunto.textContent = "Selecciona un motivo de contacto.";
        hayError = true;
    }

    // Mensaje
    if (!mensaje) {
        errorMensaje.textContent = "El mensaje es obligatorio.";
        hayError = true;
    } else if (mensaje.length < 10) {
        errorMensaje.textContent = "Escribe al menos 10 caracteres.";
        hayError = true;
    }

    // Privacidad
    if (!privacidad) {
        errorPrivacidad.textContent = "Debes aceptar la política de privacidad.";
        hayError = true;
    }

    if (hayError) return;

    // Si todo OK
    msgOk.classList.remove("hidden");
    form.reset();
});

// ----- ANIMACIONES AL SCROLL -----
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
    }
);

reveals.forEach((el) => observer.observe(el));
