 // CHATBOX //

 document.addEventListener("DOMContentLoaded", () => {
  const chatbotButton = document.getElementById("chatbot-button");
  const chatbox = document.getElementById("chatbox");
  const closeChat = document.getElementById("close-chat");
  const sendMessage = document.getElementById("send-message");
  const userInput = document.getElementById("user-input");
  const messages = document.getElementById("messages");

  let faq = {}; // Iniciar un objeto vacío para las preguntas frecuentes

  // Cargar el archivo JSON con las preguntas frecuentes
  fetch('assets/js/faq.json')
    .then(response => response.json())
    .then(data => {
      faq = data; // Asignar el contenido del archivo JSON a la variable faq
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
      faq = {}; // Si no carga, se puede manejar con respuestas predeterminadas
    });

  chatbotButton.addEventListener("click", () => {
    chatbox.classList.toggle("hidden");
  });

  closeChat.addEventListener("click", () => {
    chatbox.classList.add("hidden");
  });

  sendMessage.addEventListener("click", () => {
    sendUserMessage();
  });

  // Detectar la tecla Enter en el campo de entrada
  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevenir salto de línea
      sendUserMessage();
    }
  });

  // Función para capitalizar la primera letra del mensaje del usuario
  function capitalizeUserMessage(text) {
    if (text.length === 0) return text; // Si el mensaje está vacío, no hacer nada
    return text.charAt(0).toUpperCase() + text.slice(1); // Capitalizar la primera letra
  }

  function sendUserMessage() {
    const userMessage = userInput.value.trim().toLowerCase(); // Convertimos a minúsculas
    if (userMessage) {
      const capitalizedMessage = capitalizeUserMessage(userMessage); // Capitalizamos la primera letra
      addMessage("Tú", capitalizedMessage); // Mostramos el mensaje capitalizado
      userInput.value = "";

      // Generar una respuesta basada en la pregunta del usuario
      setTimeout(() => {
        const response = getResponse(userMessage);
        addMessage("Asistente", response);
      }, Math.random() * 1000 + 500);  // Respuesta aleatoria entre 500ms a 1500ms
    }
  }

  function addMessage(sender, text) {
    const message = document.createElement("div");
    // Corregir la capitalización y añadir puntuación si es necesario
    if (sender === "Asistente") {
      text = capitalizeFirstLetter(text); // Corregir la primera letra
      if (!/[.!?]$/.test(text)) {
        text += '.'; // Añadir punto si no tiene
      }
    }
    message.textContent = `${sender}: ${text}`;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function getResponse(userMessage) {
    // Buscar la respuesta en el objeto de preguntas frecuentes
    for (let question in faq) {
      if (userMessage.includes(question)) {
        let response = faq[question]; // Respuesta del FAQ
        return capitalizeFirstLetter(response); // Corregir la capitalización
      }
    }
    return "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?"; // Respuesta predeterminada
  }
});

// FIN CHATBOX //


// INICIO DE FUNCIONES DE BOTONES FLOTANTES //
    
    // Función para mostrar y ocultar los recursos
function toggleResources() {
  const resourcesContainer = document.getElementById("resourcesContainer");
  const overlay = document.getElementById("overlay");

  // Si los recursos no están visibles, se muestran
  if (resourcesContainer.style.display === "none" || resourcesContainer.style.display === "") {
    resourcesContainer.style.display = "flex";
    resourcesContainer.classList.add("show");
    overlay.style.display = "block";
  } else {
    // Si están visibles, se ocultan
    resourcesContainer.style.display = "none";
    resourcesContainer.classList.remove("show");
    overlay.style.display = "none";
  }
}


    function toggleContact() {
      const contactTips = document.getElementById("contact-tips");
      contactTips.style.display = (contactTips.style.display === "block") ? "none" : "block";
    }

    function closeContactTips() {
      document.getElementById("contact-tips").style.display = "none";
    }

    function toggleFAQ() {
      const faqTips = document.getElementById("faq-tips");
      faqTips.style.display = (faqTips.style.display === "block") ? "none" : "block";
    }

    function closeFAQ() {
      document.getElementById("faq-tips").style.display = "none";
    }

    // Mostrar o esconder el cuadro de información
    function toggleInfo() {
      const infoBox = document.getElementById('infoBox');
      infoBox.style.display = (infoBox.style.display === 'block') ? 'none' : 'block';
    }

    // Cerrar el cuadro de información
    function closeInfo() {
      document.getElementById('infoBox').style.display = 'none';
    }
// FIN FUNCIONES DE BOTONES FLOTANTES //

 // ABRIR EL MODAL DE LOCALIDADES //
function openLocalitiesModal() {
    document.getElementById("localitiesModal").style.display = "flex"; // Abre el modal
}

// Función para cerrar el modal de localidades
function closeLocalitiesModal() {
    document.getElementById("localitiesModal").style.display = "none"; // Cierra el modal
}

// Función para manejar la selección de localidad
function selectLocality(locality) {
    var url = '';
    
    // Define la URL según la localidad seleccionada
    if (locality === 'La Camella') {
        url = 'mapa-arona-camella.html';
    } else if (locality === 'Buzanada') {
        url = 'mapa-arona-buzanada.html';
    }
    
    // Abrir la nueva página
    if (url !== '') {
        window.location.href = url; // Redirige al archivo correspondiente
    }
}
    // Cierra el modal después de la selección
    closeLocalitiesModal();

    // FIN FUNCIÓN ABRIR EL MODAL DE LOCALIDADES