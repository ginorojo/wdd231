document.addEventListener("DOMContentLoaded", async () => {


    const toggleViewButton = document.querySelector('.toggle-view');
    const membersContainer = document.querySelector('.members-container');

  
    if (!toggleViewButton || !membersContainer) {
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
            memberPhone.textContent = `Phone: ${member.phone}`;
            memberCard.appendChild(memberPhone);

            const memberWebsite = document.createElement('a');
            memberWebsite.href = member.website;
            memberWebsite.textContent = "Web site";
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


// Código para mostrar el pronóstico del clima para los próximos 3 días
const forecastContainer = document.querySelector("#forecast-container");

// URL de la API de OpenWeather para el pronóstico de 5 días
const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-29.90591&lon=-71.25014&appid=a83e5861802436d8cbe35d5ec980d681&units=metric";

async function fetchForecastData() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // For testing
      displayForecastData(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayForecastData(data) {
  forecastContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar datos

  // Filtrar datos para obtener un pronóstico diario
  const dailyForecast = [];
  data.list.forEach((forecast) => {
    const date = forecast.dt_txt.split(" ")[0]; // Extraer la fecha (AAAA-MM-DD)
    if (!dailyForecast.some((item) => item.date === date)) {
      // Agregar solo la primera entrada del día
      dailyForecast.push({
        date: date,
        temp: forecast.main.temp,
        icon: forecast.weather[0].icon,
        description: forecast.weather[0].description,
      });
    }
  });

  // Mostrar solo los próximos 3 días
  dailyForecast.slice(0, 3).forEach((day) => {
    const dayCard = document.createElement("div");
    dayCard.classList.add("day-card");

    // Crear contenedor para las dos columnas
    const columns = document.createElement("div");
    columns.classList.add("columns");

    // Primera columna: ícono del clima
    const iconColumn = document.createElement("div");
    iconColumn.classList.add("icon-column");

    const iconElem = document.createElement("img");
    iconElem.src = `https://openweathermap.org/img/w/${day.icon}.png`;
    iconElem.alt = day.description;
    iconColumn.appendChild(iconElem);

    columns.appendChild(iconColumn);

    // Segunda columna: datos del clima
    const dataColumn = document.createElement("div");
    dataColumn.classList.add("data-column");

    // Nombre del día en inglés
    const dayName = new Date(day.date).toLocaleDateString("en-US", { weekday: "long" });

    const dateElem = document.createElement("p");
    dateElem.textContent = dayName; // Mostrar el nombre del día
    dataColumn.appendChild(dateElem);

    // Temperatura
    const tempElem = document.createElement("p");
    tempElem.innerHTML = `Temp: ${day.temp.toFixed(1)}&deg;C`;
    dataColumn.appendChild(tempElem);

    // Descripción del clima
    const descElem = document.createElement("p");
    descElem.textContent = day.description.charAt(0).toUpperCase() + day.description.slice(1);
    dataColumn.appendChild(descElem);

    columns.appendChild(dataColumn);

    // Agregar las columnas al card
    dayCard.appendChild(columns);
    forecastContainer.appendChild(dayCard);
  });
}

// Llamar a la función para obtener y mostrar el pronóstico
fetchForecastData();



document.addEventListener("DOMContentLoaded", async () => {

    const level3Container = document.querySelector('.level3-container');

    // Asegúrate de que el contenedor esté presente en el DOM
    if (!level3Container) {
        console.error("No se encontró el contenedor de miembros de nivel 3.");
        return;
    }

    // Función para obtener y mostrar los miembros de nivel 3
    async function fetchLevel3Members() {
        try {
            const response = await fetch('data/members.json'); 
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            const members = await response.json(); 
            const level3Members = members.filter(member => member.membership_level === 3); // Filtrar por nivel 3
            displayLevel3Members(level3Members); 
        } catch (error) {
            console.error("Error al cargar los miembros de nivel 3:", error);
        }
    }

    // Función para mostrar los miembros de nivel 3
    function displayLevel3Members(members) {
        level3Container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos miembros

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            // Imagen del miembro
            const memberImage = document.createElement('img');
            memberImage.src = member.image; 
            memberImage.alt = `Logo de ${member.name}`;  // Corrección en la plantilla literal
            memberCard.appendChild(memberImage);

            // Nombre del miembro
            const memberName = document.createElement('h3');
            memberName.textContent = member.name;
            memberCard.appendChild(memberName);

            // Teléfono del miembro
            const memberPhone = document.createElement('p');
            memberPhone.textContent = `Phone: ${member.phone}`;  // Corrección en la plantilla literal
            memberCard.appendChild(memberPhone);

            // Enlace al sitio web del miembro
            const memberWebsite = document.createElement('a');
            memberWebsite.href = member.website;
            memberWebsite.textContent = "Web site";
            memberWebsite.target = "_blank";
            memberCard.appendChild(memberWebsite);

            // Agregar la tarjeta del miembro al contenedor
            level3Container.appendChild(memberCard);
        });
    }

    // Llamar a la función para cargar los miembros de nivel 3
    fetchLevel3Members();
});
