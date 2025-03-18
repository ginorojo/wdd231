document.addEventListener("DOMContentLoaded", async () => {
    // Verificar que el DOM esté completamente cargado antes de ejecutar el código

    const toggleViewButton = document.querySelector('.toggle-view');
    const membersContainer = document.querySelector('.members-container');

    // Si no se encuentra el botón o contenedor, mostrar un mensaje de error
    if (!toggleViewButton || !membersContainer) {
        console.error("No se encontraron los elementos necesarios en el DOM.");
        return;
    }

    // Función para obtener los datos de los miembros desde un archivo JSON
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json'); // Suponiendo que 'members.json' es tu archivo JSON
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const members = await response.json(); // Convertir la respuesta a JSON
            displayMembers(members); // Llamamos a displayMembers para mostrar los miembros
        } catch (error) {
            console.error("Error al cargar los miembros:", error);
        }
    }

    // Función para mostrar los miembros en la página
    function displayMembers(members) {
        membersContainer.innerHTML = ''; // Limpiamos el contenedor antes de agregar los miembros

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            // Crear el contenido de cada tarjeta
            const memberImage = document.createElement('img');
            memberImage.src = member.image; // Suponiendo que el JSON tiene un campo "image"

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

            // Añadir la tarjeta al contenedor
            membersContainer.appendChild(memberCard);
        });
    }

    // Función para alternar entre la vista en cuadrícula y la vista en lista
    toggleViewButton.addEventListener('click', () => {
        membersContainer.classList.toggle('single-column'); // Alterna la clase 'single-column'
    });

    // Cargar los miembros al cargar la página
    await fetchMembers();
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});

