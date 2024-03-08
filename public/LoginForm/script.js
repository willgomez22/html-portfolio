// Obtener referencias a los elementos
const passwordInput = document.querySelector('input[type="password"]');
const eyeOpen = document.querySelector(".toggle-eye.open");
const eyeClose = document.querySelector(".toggle-eye.close");

// Agregar un evento de entrada al campo de contraseña
passwordInput.addEventListener('input', function() {
    const passwordValue = passwordInput.value;

    // Mostrar u ocultar los iconos de ojos según si hay texto en el campo de contraseña
    if (passwordValue.length > 0) {
        eyeOpen.style.display = 'block';
        eyeClose.style.display = 'block';
    } else {
        eyeOpen.style.display = 'none';
        eyeClose.style.display = 'none';
    }
});

// Agregar un evento de clic al ícono de ojo abierto
eyeOpen.addEventListener("click", function () {
  passwordInput.setAttribute("type", "text"); // Mostrar la contraseña
  eyeOpen.style.display = "none"; // Ocultar el ícono de ojo abierto
  eyeClose.style.display = "block"; // Mostrar el ícono de ojo cerrado
});

// Agregar un evento de clic al ícono de ojo cerrado
eyeClose.addEventListener("click", function () {
  passwordInput.setAttribute("type", "password"); // Ocultar la contraseña
  eyeClose.style.display = "none"; // Ocultar el ícono de ojo cerrado
  eyeOpen.style.display = "block"; // Mostrar el ícono de ojo abierto
});