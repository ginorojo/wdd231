document.addEventListener("DOMContentLoaded", async () => {


    const toggleViewButton = document.querySelector('.toggle-view');
    const membersContainer = document.querySelector('.members-container');

  
    if (!toggleViewButton || !membersContainer) {
        console.error("No se encontraron los elementos necesarios en el DOM.");
        return;
    }

    
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json'); 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const members = await response.json(); 
            displayMembers(members); 
        } catch (error) {
            console.error("Error al cargar los miembros:", error);
        }
    }

    
    function displayMembers(members) {
        membersContainer.innerHTML = ''; 

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

       
            const memberImage = document.createElement('img');
            memberImage.src = member.image; 

            memberImage.alt = `Logo de ${member.name}`;
            memberCard.appendChild(memberImage);

            const memberName = document.createElement('h3');
            memberName.textContent = member.name;
            memberCard.appendChild(memberName);

            const memberPhone = document.createElement('p');
            memberPhone.textContent = `Teléfono: ${member.phone}`;
            memberCard.appendChild(memberPhone);

            const memberWebsite = document.createElement('a');
            memberWebsite.href = member.website;
            memberWebsite.textContent = "Visitar sitio web";
            memberWebsite.target = "_blank";
            memberCard.appendChild(memberWebsite);

            
            membersContainer.appendChild(memberCard);
        });
    }


    toggleViewButton.addEventListener('click', () => {
        membersContainer.classList.toggle('single-column');
    });


    await fetchMembers();
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});

const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
const currentTemp = document.querySelector("#current-temp");

// URL de la API de OpenWeather con latitud, longitud y API Key
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-29.90591&lon=-71.25014&appid=a83e5861802436d8cbe35d5ec980d681&units=metric";

async function fetchWeatherData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // For testing
      displayWeatherData(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayWeatherData(data) {
  // Current temperature
  currentTemp.innerHTML = `Temperature: ${data.main.temp.toFixed(1)}&deg;C`;

  // Maximum and minimum temperature
  maxTemp.innerHTML = `Max: ${data.main.temp_max.toFixed(1)}&deg;C`;
  minTemp.innerHTML = `Min: ${data.main.temp_min.toFixed(1)}&deg;C`;

  // Humidity
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

  // Convert sunrise and sunset to readable time
  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
  sunset.innerHTML = `Sunset: ${sunsetTime}`;

  // Weather icon and description
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

fetchWeatherData();

document.addEventListener("DOMContentLoaded", async () => {

    const membersContainer = document.querySelector('.members-container');

    // Asegúrate de que el contenedor esté presente en el DOM
    if (!membersContainer) {
        console.error("No se encontró el contenedor de miembros.");
        return;
    }

    // Función para obtener y mostrar los miembros de nivel 1
    async function fetchMembers() {
        try {
            // Cambia la URL si es necesario para cargar el archivo JSON adecuado
            const response = await fetch('data/members.json'); 
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            const members = await response.json(); 
            // Filtra los miembros por membership_level 1
            const level1Members = members.filter(member => member.membership_level === 3);
            displayMembers(level1Members); 
        } catch (error) {
            console.error("Error al cargar los miembros:", error);
        }
    }

    // Función para mostrar los miembros
    function displayMembers(members) {
        membersContainer.innerHTML = '';  // Limpiar el contenedor antes de agregar nuevos miembros

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            // Imagen del miembro
            const memberImage = document.createElement('img');
            memberImage.src = member.image; 
            memberImage.alt = `Logo de ${member.name}`;  // Corregido el uso de plantillas literales
            memberCard.appendChild(memberImage);

            // Nombre del miembro
            const memberName = document.createElement('h3');
            memberName.textContent = member.name;
            memberCard.appendChild(memberName);

            // Teléfono del miembro
            const memberPhone = document.createElement('p');
            memberPhone.textContent = `Teléfono: ${member.phone}`;  // Corregido el uso de plantillas literales
            memberCard.appendChild(memberPhone);

            // Enlace al sitio web del miembro
            const memberWebsite = document.createElement('a');
            memberWebsite.href = member.website;
            memberWebsite.textContent = "Visitar sitio web";
            memberWebsite.target = "_blank";
            memberCard.appendChild(memberWebsite);

            // Agregar la tarjeta del miembro al contenedor
            membersContainer.appendChild(memberCard);
        });
    }

    // Llamar a la función para cargar los miembros
    fetchMembers();
});
