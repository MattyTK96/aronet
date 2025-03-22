// FUNCIÓN PARA MOSTRAR EL MAPA DESDE UNA UBICACIÓN DETERMINADA //
const map = L.map('map').setView([28.0789, -16.6822], 17);
  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);

const catIcon = L.icon({
  iconUrl: './assets/img/gato.png', // Ruta al icono del gato
  iconSize: [20, 20], // Tamaño del icono
  iconAnchor: [20, 40], // Punto de anclaje
  popupAnchor: [0, -40] // Ajusta la posición del popup
});

// LOCALIZACIONES DE COLONIAS DE GATOS //
const catColonies = [
  {
    lat: 28.078166,
    lng: -16.682503,
    name: 'ID - #001',
    size: 'Colonia Mediana.',
    street: 'C/Orobal, 21',
    catsCount: 12,
    sterilizationRate: '80%',
  },
  {
    lat: 28.078255,
    lng: -16.681473,
    name: 'ID - #002',
    size: 'Colonia Grande.',
    street: 'Carretera General, 30 TF-28',
    catsCount: 27,
    sterilizationRate: '20%',
  }
];

// AGREGA MARCADORES AL MAPA //
catColonies.forEach((colony) => {
  const marker = L.marker([colony.lat, colony.lng], { icon: catIcon }).addTo(map);

  marker.bindPopup(`
    <div class="zona-recogida">${colony.name}</div>
    <div class="info-text"><strong>Tamaño:</strong> ${colony.size}</div>  <!-- Aquí se agrega tamaño -->
    <div class="info-text"><strong>Ubicación:</strong> ${colony.street}</div>
    <div class="info-text"><strong>Número de Gatos:</strong> ${colony.catsCount}</div>
    <div class="info-text"><strong>Esterilización:</strong> ${colony.sterilizationRate}</div>
    <button class="report-incident-btn" onclick="reportIncident()">REPORTAR INCIDENCIA</button>
  `);

  // Variable para almacenar el estado del marcador (agrandado o no)
  let isEnlarged = false;

  // Animación al hacer clic en el marcador
  marker.on('click', function () {
    if (isEnlarged) {
      // Reducir al tamaño original
      this.setIcon(L.icon({
        iconUrl: 'assets/img/gato.png',
        iconSize: [20, 20],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      }));
      isEnlarged = false;
    } else {
      // Aumentar el tamaño
      this.setIcon(L.icon({
        iconUrl: 'assets/img/gato.png',
        iconSize: [40, 40],
        iconAnchor: [30, 60],
        popupAnchor: [0, -60]
      }));
      isEnlarged = true;
    }
  });

  // Al hacer clic en cualquier parte del mapa, el tamaño vuelve a la normalidad
  map.on('click', function () {
    if (isEnlarged) {
      marker.setIcon(L.icon({
        iconUrl: 'assets/img/gato.png',
        iconSize: [20, 20],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      }));
      isEnlarged = false;
    }
  });

});



  // Agregar un círculo alrededor de la zona con un radio de 500 metros
  L.circle([28.078166, -16.682503], {
    color: 'blue',
    fillColor: '#30b0f0',
    fillOpacity: 0.4,
    radius: 20
  }).addTo(map)
    .bindPopup("<b>Zona de Gatos</b><br>Radio de 500 metros alrededor de la colonia.");

    L.circle([28.078255, -16.681473], {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.4,
      radius: 60
    }).addTo(map)
      .bindPopup("<b>Zona de Gatos</b><br>Radio de 500 metros alrededor de la colonia.");





















  // INICIO DE FUNCIONES DE BOTONES FLOTANTES //

  function toggleFilter() {
    const statsBox = document.getElementById("filter-box");
    statsBox.style.display = (statsBox.style.display === "block") ? "none" : "block";
  }
  function closeFilter() {
    document.getElementById("filter-box").style.display = "none";
  }
 
  function toggleStats() {
    const statsBox = document.getElementById("stats-box");
    statsBox.style.display = (statsBox.style.display === "block") ? "none" : "block";
  }

  function closeStats() {
    document.getElementById("stats-box").style.display = "none";
  }


  function togglePollution() {
    const statsBox = document.getElementById("pollution-box");
    statsBox.style.display = (statsBox.style.display === "block") ? "none" : "block";
  }

  function closePollution() {
    document.getElementById("pollution-box").style.display = "none";
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

    if (command.includes("modo nocturno") || command.includes("noche")) {
      if (!isNightMode) {
        toggleNightMode();
      }
    }
  };

  // Iniciar el reconocimiento de voz al cargar la página
  recognition.start();
  // FIN DE RECONOCIMIENTO DE VOZ

  // REPORTAR INCIDENCIA 
  function reportIncident() {
    window.open("https://forms.gle/o1V8Bdp8VYYyt2P49", "_blank");
  } //

















