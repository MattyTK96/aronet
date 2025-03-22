// CREAR ICONO PARA LA SIMULACION DE VECINOS //
var vecinoIcon = L.icon({
  iconUrl: 'assets/img/vecino-icon.png', // Asegúrate de tener un icono de vecino
  iconSize: [10, 10] 
});

// Coordenada inicial
var coordenadaInicial = [28.0789, -16.6822];

// Crear un array para almacenar los marcadores de los vecinos
var vecinos = [];

// Función para generar una posición aleatoria dentro del área
function generarPosicionAleatoria() {
  var latitudMax = coordenadaInicial[0] + 0.001;  // 0.001 grados hacia el norte
  var latitudMin = coordenadaInicial[0] - 0.001;  // 0.001 grados hacia el sur
  var longitudMax = coordenadaInicial[1] + 0.001; // 0.001 grados hacia el este
  var longitudMin = coordenadaInicial[1] - 0.001; // 0.001 grados hacia el oeste

  // Generar coordenadas aleatorias dentro de este rango
  var latAleatoria = (Math.random() * (latitudMax - latitudMin)) + latitudMin;
  var lonAleatoria = (Math.random() * (longitudMax - longitudMin)) + longitudMin;

  return [latAleatoria, lonAleatoria];
}

// Función para crear un vecino en una posición aleatoria
function crearVecino() {
  var posicionAleatoria = generarPosicionAleatoria();

  var vecino = L.marker(posicionAleatoria, {icon: vecinoIcon}).addTo(map);

  // Guardar el vecino en el array
  vecinos.push(vecino);
}

// Crear 4256 vecinos
for (var i = 0; i < 50; i++) {
  crearVecino();
}

// Función para mover todos los vecinos a nuevas posiciones aleatorias
function moverVecinosAleatoriamente() {
  vecinos.forEach(function(vecino) {
    var nuevaPosicion = generarPosicionAleatoria();
    vecino.setLatLng(nuevaPosicion); // Mueve al vecino a la nueva posición aleatoria
  });
}

// Mover a todos los vecinos cada 3 segundos
setInterval(moverVecinosAleatoriamente, 500); // Mueve todos los vecinos cada 3 segundos

// FIN DE LA FUNCION DE LA SIMULACION //






// RECONOCIMIENTO DE VOZ // 

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'es-ES';
recognition.continuous = true;  // Permite que el reconocimiento se mantenga activo
recognition.interimResults = false;

recognition.onstart = () => {
  console.log("Escuchando...");
};

recognition.onerror = (event) => {
  console.error("Error de reconocimiento de voz: ", event.error);
};

recognition.onresult = (event) => {
  const command = event.results[event.results.length - 1][0].transcript.toLowerCase(); // Obtener el último comando
  console.log("Comando de voz: ", command);

  // Comando para activar el modo nocturno
  if (command.includes("modo nocturno") || command.includes("noche")) {
    if (!isNightMode) {
      toggleNightMode();
    }
  }

  // Comando para redirigir a "La Camella"
  if (command.includes("vete a la camella")) {
    window.location.href = "mapa-arona-camella.html"; // Redirigir a la página
  }
};

// Iniciar el reconocimiento de voz al cargar la página
recognition.start();

// Asegurarse de que se reinicie después de cada resultado
recognition.onend = () => {
  recognition.start(); // Reiniciar el reconocimiento cuando se detenga
};

// FIN DE RECONOCIMIENTO DE VOZ //














  // Agregar un círculo alrededor de la zona con un radio de 500 metros
  L.circle([28.0789, -16.6822], {
    color: 'blue',
    fillColor: '#30b0f0',
    fillOpacity: 0.4,
    radius: 200
  }).addTo(map);

  // También puedes agregar un rectángulo o polígono para más precisión en la zona
  var latlngs = [
    [28.0760, -16.6850],
    [28.0800, -16.6850],
    [28.0800, -16.6800],
    [28.0760, -16.6800]
  ];
  L.polygon(latlngs, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3
  }).addTo(map)
    .bindPopup("Área delimitada por un polígono")
    .openPopup();












// MARCAR CARRETERA O CALLE EN OBRAS //
    // Nuevas coordenadas de los puntos de las obras
const nuevaObraCoords = [
  [28.077942, -16.682671],
  [28.077859, -16.682528],
  [28.077770, -16.682362],
  [28.077742, -16.682281]
];

// Agregar los puntos rojos pequeños al mapa
nuevaObraCoords.forEach(coord => {
  L.marker(coord, {
    icon: L.icon({
      iconUrl: 'assets/img/obras-icon.png', // Icono pequeño rojo
      iconSize: [10, 10], // Tamaño del marcador
      iconAnchor: [5, 5] // Ancla en el centro del marcador
    })
  }).addTo(map);
});

// Función para calcular puntos intermedios entre dos coordenadas
function calcularPuntosIntermedios(coord1, coord2, pasos) {
  const puntos = [];
  const latStep = (coord2[0] - coord1[0]) / pasos;
  const lngStep = (coord2[1] - coord1[1]) / pasos;

  for (let i = 1; i <= pasos; i++) {
    puntos.push([coord1[0] + latStep * i, coord1[1] + lngStep * i]);
  }
  return puntos;
}

// Icono personalizado para conectar los puntos
const iconoConexion = L.icon({
  iconUrl: 'assets/img/obras-icon.png', // Icono de construcción
  iconSize: [15, 15], // Tamaño del icono
  iconAnchor: [10, 10] // Ancla en el centro del icono
});

// Colocar iconos entre los puntos para conectar visualmente
for (let i = 0; i < nuevaObraCoords.length - 1; i++) {
  const puntosIntermedios = calcularPuntosIntermedios(nuevaObraCoords[i], nuevaObraCoords[i + 1], 10); // 10 pasos
  puntosIntermedios.forEach(punto => {
    L.marker(punto, { icon: iconoConexion }).addTo(map);
  });
}




// ALUMBRADO LA CAMELLA
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el checkbox de Alumbrado Público
  const alumbradoCheckbox = document.getElementById("alumbrado-filter");

  // Agregar evento para redirigir al hacer clic
  alumbradoCheckbox.addEventListener("click", function () {
      window.location.href = "camella-alumbrado.html";
  });
});