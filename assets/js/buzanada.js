

// FUNCIÓN PARA MOSTRAR EL MAPA DESDE UNA UBICACIÓN DETERMINADA //
const map = L.map('map').setView([28.06854, -16.65400], 16);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // INICIO DE FUNCIONES DE BOTONES FLOTANTES //
  function toggleStats() {
    const statsBox = document.getElementById("stats-box");
    statsBox.style.display = (statsBox.style.display === "block") ? "none" : "block";
  }

  function closeStats() {
    document.getElementById("stats-box").style.display = "none";
  }

    // Capa de mapa de día y noche
let dayLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
maxZoom: 19
}).addTo(map);

let nightLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.cartodb.com/attributions">CartoDB</a>',
maxZoom: 19
});

    // Variable para controlar el modo
let isNightMode = false;

function toggleNightMode() {
if (isNightMode) {
  map.removeLayer(nightLayer); // Elimina la capa nocturna
  map.addLayer(dayLayer); // Vuelve al mapa diurno
  document.body.classList.remove('night-mode'); // Elimina la clase de modo nocturno

  // Cambia el icono del botón a luna y el color de fondo
  document.querySelector('.floating-button-night i').classList.remove('fa-sun');
  document.querySelector('.floating-button-night i').classList.add('fa-moon');
  document.querySelector('.floating-button-night').style.backgroundColor = '#424242'; // Vuelve al color oscuro
} else {
  map.removeLayer(dayLayer); // Elimina la capa diurna
  map.addLayer(nightLayer); // Cambia a la capa nocturna
  document.body.classList.add('night-mode'); // Añade la clase de modo nocturno

  // Cambia el icono del botón a sol y el color de fondo
  document.querySelector('.floating-button-night i').classList.remove('fa-moon');
  document.querySelector('.floating-button-night i').classList.add('fa-sun');
  document.querySelector('.floating-button-night').style.backgroundColor = 'white'; // Color amarillo para el sol

}
isNightMode = !isNightMode; // Alterna el estado del modo
}


function redirectToMain() {
  window.location.href = "aronet-main.html"; // Asegúrate de que esta ruta sea correcta
}

// FIN DE FUNCIONES DE BOTONES FLOTANTES //

// RECONOCIMIENTO DE VOZ // 
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interimResults = false;

recognition.onstart = () => {
  console.log("Escuchando...");
};

recognition.onerror = (event) => {
  console.error("Error de reconocimiento de voz: ", event.error);
};

recognition.onresult = (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  console.log("Comando de voz: ", command);

  // Comando para redirigir a La Camella
  if (command.includes("vete a la camella")) {
    window.location.href = "mapa-arona-camella.html";  // Redirige al archivo HTML
  }

  // Comando para activar el modo nocturno
  if (command.includes("modo nocturno") || command.includes("noche")) {
    if (!isNightMode) {  // Asumiendo que tienes una variable isNightMode que rastrea el estado
      toggleNightMode();  // Llama a tu función para activar el modo nocturno
    }
  }
};

// Iniciar el reconocimiento de voz al cargar la página
recognition.start();
// FIN DE RECONOCIMIENTO DE VOZ