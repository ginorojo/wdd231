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

