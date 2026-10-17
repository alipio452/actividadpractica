// 1. Evento click: se ejecuta al presionar el botón.
const botonClick = document.getElementById("botonClick");
const mensajeClick = document.getElementById("mensajeClick");

botonClick.addEventListener("click", () => {
  mensajeClick.textContent = "¡Hiciste clic en el botón!";
});

// 2. Evento mouseover: se ejecuta cuando el cursor entra en la tarjeta.
const tarjeta = document.getElementById("tarjeta");
const mensajeMouse = document.getElementById("mensajeMouse");

tarjeta.addEventListener("mouseover", () => {
  tarjeta.classList.add("active");
  mensajeMouse.textContent = "El cursor está sobre la tarjeta.";
});

tarjeta.addEventListener("mouseout", () => {
  tarjeta.classList.remove("active");
  mensajeMouse.textContent = "El cursor salió de la tarjeta.";
});

// 3. Evento input: actualiza el saludo mientras se escribe.
const campoNombre = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

campoNombre.addEventListener("input", () => {
  const nombre = campoNombre.value.trim();
  saludo.textContent = nombre ? `¡Hola, ${nombre}!` : "Tu saludo aparecerá aquí.";
});

// 4. Evento change: cambia el color de fondo al elegir una opción.
const selectorColor = document.getElementById("color");
const mensajeColor = document.getElementById("mensajeColor");

selectorColor.addEventListener("change", () => {
  if (selectorColor.value) {
    document.body.style.backgroundColor = selectorColor.value;
    mensajeColor.textContent = "¡El color de fondo se ha cambiado!";
  } else {
    document.body.style.backgroundColor = "#f3f6fb";
    mensajeColor.textContent = "El color cambiará cuando elijas una opción.";
  }
});

// 5. Evento submit: muestra el comentario sin recargar la página.
const formulario = document.getElementById("formulario");
const comentario = document.getElementById("comentario");
const resultadoFormulario = document.getElementById("resultadoFormulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  resultadoFormulario.textContent = `Comentario enviado: ${comentario.value.trim()}`;
  formulario.reset();
});
