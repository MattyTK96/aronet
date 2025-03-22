



// FUNCIÓN PARA MOSTRAR EL MAPA DESDE UNA UBICACIÓN DETERMINADA //
const map = L.map('map').setView([28.011818, -16.667785], 17);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  const containerIcon = L.icon({
iconUrl: './assets/img/container-icon.png', // Ruta al icono personalizado
iconSize: [40, 40], // Tamaño del icono (ancho, alto)
iconAnchor: [20, 40], // Punto del icono que estará anclado al mapa (centro inferior)
popupAnchor: [0, -40], // Ajusta la posición del popup respecto al icono
});

  // LOCALIZACIONES DE CONTENEDORES CON NIVELES DE LLENADO //
  const containers = [
    { lat: 28.014283, lng: -16.669740, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Plástico, Vidrio.', street: 'C/Miguel Calcerrada, S/N.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/miguelcalcerrada_sn.jpg' },
    { lat: 28.013948, lng: -16.671994, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Plástico, Papel y Cartón.', street: 'C/Miguel Calcerrada, 69.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/miguelcalcerrada_69.jpg' },
    { lat: 28.012940, lng: -16.667636, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Cartón y Papel, Vidrio, Plástico.', street: 'C/San Sebastián de La Gomera, 37.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/sansebastian_37.jpg' },
    { lat: 28.013654, lng: -16.664939, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Resiudos Mixtos, Vidrio, Plástico, Aceite,Ropa.', street: 'Carretera General, TF-66.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/crtageneral_tf66.jpg' },
    { lat: 28.012900, lng: -16.669733, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Vidrio, Plástico, Papel y Cartón, Aceite, Ropa.', street: 'Avda. Islas Canarias, 21.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/avdaislascanarias_21.jpg' },
    { lat: 28.013167, lng: -16.670710, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Vidrio, Plástico, Papel y Cartón.', street: 'C/Salvador González Alayon, 4.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/glezalayon_4.jpg' },
    { lat: 28.010820, lng: -16.672193, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Vidrio, Plástico, Papel y Cartón.', street: 'C/Fuerteventura, S/N.', hours: 'De 20:00 a 24:00', image: './assets/img/Fraile/fuerteventura_sn.jpg' },
    { lat: 28.011002, lng: -16.671031, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Vidrio, Plástico.', street: 'C/Fuerteventura, 116.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/fuerteventura_116.jpg' },
    { lat: 28.011211, lng: -16.669629, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Vidrio, Plástico, Ropa, Papel y Cartón.', street: 'C/Fuerteventura, 93.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/fuerteventura_93.jpg' },
    { lat: 28.011477, lng: -16.668053, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Plástico, Vidrio.', street: 'C/Fuerteventura, 71.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/fuerteventura_71.jpg' },
    { lat: 28.011713, lng: -16.666577, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Vidrio, Plástico, Papel y Cartón.', street: 'C/Fuerteventura, 49.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/fuerteventura_49.jpg' },
    { lat: 28.012155, lng: -16.663889, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: 'Residuos Mixtos, Vidrio, Plástico, Ropa, Papel y Cartón.', street: 'C/Fuerteventura, S,N.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/fuerteventura_SN_2.jpg' },
    { lat: 28.012950, lng: -16.673005, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: '.', street: 'C/Laderas del Teide, 20.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/' },
    { lat: 28.011232, lng: -16.672664, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: '.', street: 'C/Laderas del Teide, 2.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/' },
    { lat: 28.012768, lng: -16.668810, name: 'PUNTO DE RECOGIDA DE RESIDUOS', description: '.', street: 'C/San Sebastián de La Gomera, 44.', hours: 'De 20:00 a 24:00.', image: './assets/img/Fraile/' },

  ];

  
// FIN DATOS DE LOCALIZACIONES //

// AGREGA MARCADORES AL MAPA Y CALCULA EL CONTENEDOR MÁS CERCANO //
containers.forEach((container, index) => {
  const marker = L.marker([container.lat, container.lng], { icon: containerIcon }).addTo(map);

  let nearestContainer = null;
  let minDistance = Infinity;

  containers.forEach((other, otherIndex) => {
    if (index !== otherIndex) {
      const distance = map.distance([container.lat, container.lng], [other.lat, other.lng]); // Distancia en metros
      if (distance < minDistance) {
        minDistance = distance;
        nearestContainer = other;
      }
    }
  });

  const nearestInfo = nearestContainer
    ? `<div class="info-text"><strong>Depósito Cercano:</strong> ${nearestContainer.street} (${minDistance.toFixed(2)}m)</div>`
    : '';

  marker.bindPopup(`
    <div class="zona-recogida">${container.name}</div>
    <div class="info-text"><strong>Descripción:</strong> ${container.description}</div>
    <div class="info-text"><strong>Ubicación:</strong> ${container.street}</div>
    <div class="info-text"><strong>Horario de Recogida:</strong> ${container.hours}</div>
    ${nearestInfo}
    <img src="${container.image}" alt="Contenedor">
     <div style="display: flex; justify-content: space-between; gap: 10px; ">
    <button class="report-incident-btn" onclick="reportIncident()">REPORTAR INCIDENCIA</button>
     </div>
  `);

  // Variable para almacenar el estado del marcador (agrandado o no)
  let isEnlarged = false;

  // Animación al hacer clic en el marcador
  marker.on('click', function () {
    if (isEnlarged) {
      // Si el marcador ya está agrandado, lo reducimos
      this.setIcon(L.icon({
        iconUrl: 'assets/img/container-icon.png',
        iconSize: [40, 40], // Reducir al tamaño original
        iconAnchor: [20, 40], // Ajustar el anclaje del icono
        popupAnchor: [0, -40]
      }));
      isEnlarged = false; // Actualizar el estado
    } else {
      // Si el marcador no está agrandado, lo aumentamos
      this.setIcon(L.icon({
        iconUrl: 'assets/img/container-icon.png',
        iconSize: [60, 60], // Aumentar el tamaño
        iconAnchor: [30, 60], // Cambiar el anclaje del icono
        popupAnchor: [0, -60]
      }));
      isEnlarged = true; // Actualizar el estado
    }
  });

  // Al hacer clic en cualquier parte del mapa (excepto el marcador), el tamaño vuelve a la normalidad
  map.on('click', function () {
    if (isEnlarged) {
      // Si el marcador está agrandado, lo reducimos
      marker.setIcon(L.icon({
        iconUrl: 'assets/img/container-icon.png',
        iconSize: [40, 40], // Tamaño original
        iconAnchor: [20, 40], // Ajustar el anclaje del icono
        popupAnchor: [0, -40]
      }));
      isEnlarged = false; // Actualizar el estado
    }
  });

});

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


// Define tu escala de colores personalizada con opacidad
function getColor(incidencias, maxIncidencias) {
  // Calcula el porcentaje de incidencias
  const percentage = incidencias / maxIncidencias;

  // Define los colores según el porcentaje con opacidad (por ejemplo, 0.6)
  if (percentage <= 0.2) {
      return 'rgba(92, 178, 93, 0.5)'; // Verde con 20% de opacidad // 0% - 20% incidencias.
  } else if (percentage <= 0.4) {
      return 'rgba(15, 144, 21, 0.5)'; // Verde claro con 20% de opacidad // 20% - 40% incidencias
  } else if (percentage <= 0.6) {
      return 'rgba(255, 198, 89, 0.5)'; // Amarillo con 20% de opacidad // 40% - 60% incidencias
  } else if (percentage <= 0.8) {
      return 'rgba(239, 89, 38, 0.5)'; // Naranja con 20% de opacidad // 60% - 80% incidencias
  } else {
      return 'rgba(255, 87, 87, 0.5)'; // Rojo con 20% de opacidad // 80% - 100% incidencias
  }
}

// Datos de los puntos de recogida
const puntos = [
  {
      lat: 28.078166,
      lng: -16.682503,
      incidencias: 4000, // Número de incidencias actuales
  maxIncidencias: 4256, // Número máximo esperado
  incidenciasResueltas: 0, // Ejemplo de incidencias resueltas
  incidenciasNoResueltas: 0 // Ejemplo de incidencias no resueltas
  },
  {
    lat: 28.078255,
      lng: -16.681473,
      incidencias: 0, // Número de incidencias actuales
  maxIncidencias: 4256, // Número máximo esperado
  incidenciasResueltas: 0, // Ejemplo de incidencias resueltas
  incidenciasNoResueltas: 0 // Ejemplo de incidencias no resueltas
  },
  // Añade más puntos aquí
];

// Añadir puntos al mapa
puntos.forEach((punto) => {
  const color = getColor(punto.incidencias, punto.maxIncidencias); // Calcula el color
  const radio = 5 + (punto.incidencias / punto.maxIncidencias) * 1; // Cambio de *2 a *1

  // Crear un círculo para el marcador
  const marker = L.circle([punto.lat, punto.lng], {
      color: color,
      fillColor: color,
      fillOpacity: 1,
      radius: radio,
  })
      .bindPopup(` 
          <b>Incidencias:</b> ${punto.incidencias}<br>
          <b>Incidencias Resueltas:</b> ${punto.incidenciasResueltas}<br>
          <b>Incidencias No Resueltas:</b> ${punto.incidenciasNoResueltas}
      `)
      .addTo(map);

  // Agregar filtro de blur al círculo
  const circleElement = marker._path; // Accede al elemento SVG del círculo
  circleElement.style.filter = 'blur(5px)'; // Ajusta el nivel de desenfoque


  // Añadir el número de incidencias sobre el marcador como texto
  const incidenceText = L.divIcon({
      className: 'incidencia-icon',
      html: `<div style="color: black; font-size: 12px; text-align: center; font-weight: bold;">
              ${punto.incidencias}
            </div>`,
      iconSize: [5, 5],
      iconAnchor: [5, 5],
  });

  // Crear un marcador para el texto de las incidencias
  L.marker([punto.lat, punto.lng], { icon: incidenceText }).addTo(map);
});



document.addEventListener("DOMContentLoaded", function () {
  // Obtener el checkbox de Alumbrado Público
  const alumbradoCheckbox = document.getElementById("biodiversidad-filter");

  // Agregar evento para redirigir al hacer clic
  alumbradoCheckbox.addEventListener("click", function () {
      window.location.href = "camella-gatos.html";
  });
});












