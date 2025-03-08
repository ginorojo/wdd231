const hamburguer = document.querySelector('#hamburguer');
const link = document.querySelector('#nav-links');

hamburguer.addEventListener('click', () => {
    link.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});
