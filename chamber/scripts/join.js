//hamburguer menu
const hamburguesa = document.querySelector('#hamburguer')
const links = document.querySelector('#nav-links')

hamburguesa.addEventListener ('click' , () => {
links.classList.toggle('show')

})

const membershipLevels = [
    {
        level: "Non-Profit Membership Level",
        cost: "Free or Minimal",
        benefits: [
            "Basic access to community events",
            "Free educational resources",
            "Relevant news updates"
        ]
    },
    {
        level: "Bronze Membership Level",
        cost: "Moderate",
        benefits: [
            "Invitations to special events",
            "Basic training sessions",
            "Mention in internal newsletters"
        ]
    },
    {
        level: "Silver Membership Level",
        cost: "Intermediate",
        benefits: [
            "Priority access to events",
            "Advanced training sessions",
            "Exclusive discounts on events",
            "Basic advertising on the homepage"
        ]
    },
    {
        level: "Gold Membership Level",
        cost: "High",
        benefits: [
            "All previous benefits",
            "Premium advertising",
            "VIP access to exclusive events",
            "Premium training sessions"
        ]
    }
];

  // Get elements from the DOM
const dialog = document.getElementById("membership-dialog");
const dialogLevel = document.getElementById("dialog-Level");
const dialogCost = document.getElementById("dialog-cost");
const dialogBenefits = document.getElementById("dialog-benefits");
const closeButton = document.querySelector(".close-dialog");
  
  // Add event listeners to buttons
document.querySelectorAll(".membership button").forEach((button, index) => {
    button.addEventListener("click", () => {
        // Safeguard for invalid index
        if (index >= membershipLevels.length) {
            console.error(`Index ${index} is out of bounds for membershipLevels array`);
            return;
        }
  
        // Get the membership data
        const membership = membershipLevels[index];
  
        // Update dialog content
        dialogLevel.textContent = membership.level;
        dialogCost.textContent = `Cost: ${membership.cost}`;
        dialogBenefits.innerHTML = `Benefits:<ul>${membership.benefits.map(benefit => `<li>${benefit}</li>`).join('')}</ul>`;
  
        // Show the dialog
        dialog.classList.remove("hidden");
        dialog.showModal();
    });
});

  // Close the dialog
closeButton.addEventListener("click", () => {
    dialog.classList.add("hidden");
    dialog.close();
});
  
  //display time

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});

const formData = new URLSearchParams(window.location.search);
    
    // Obtener los datos de los parámetros
    const firstName = formData.get('first') || 'No especificado';
    const lastName = formData.get('last') || 'No especificado';
    const title = formData.get('title') || 'No especificado';
    const email = formData.get('email') || 'No especificado';
    const phone = formData.get('phone') || 'No especificado';
    const organizationName = formData.get('organizationName') || 'No especificado';
    const organizationDescription = formData.get('organizationDescription') || 'No especificado';
    const membership = formData.get('membership') || 'No especificado';
    const timestamp = formData.get('timestamp') || 'No especificado';

    // Insertar los datos en el contenedor con id="results"
document.querySelector('#results').innerHTML = `
        <p>Nombre: ${firstName} ${lastName}</p>
        <p>Título Organizacional: ${title}</p>
        <p>Correo: ${email}</p>
        <p>Teléfono: ${phone}</p>
        <p>Nombre de la Organización: ${organizationName}</p>
        <p>Descripción de la Organización: ${organizationDescription}</p>
        <p>Nivel de Membresía Seleccionado: ${membership}</p>
        <p>Fecha y Hora de Envío: ${timestamp}</p>
    `;

