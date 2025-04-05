const hamburguesa = document.querySelector('#hamburguer')
const links = document.querySelector('#nav-links')

hamburguesa.addEventListener ('click' , () => {
  links.classList.toggle('show')

})


import { places } from "../data/places..mjs";
console.log(places);

const showHere = document.querySelector("#allplaces")


function displayItems(places) {
    places.forEach(x => {
        //build card element
        const thecard = document.createElement('div')
        //build photo element
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.image}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)
        //build the title element
        const thetitle=document.createElement('h2')
        thetitle.innerText=x.name
        thecard.appendChild(thetitle)
        //build the adress
        const theaddress = document.createElement('address')
        theaddress.innerHTML=x.address
        thecard.appendChild(theaddress)
        //build description
        const thedesc = document.createElement('p')
        thedesc.innerHTML=x.description
        thecard.appendChild(thedesc)

        showHere.appendChild(thecard)
        
    });
}

displayItems(places)

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});

document.addEventListener("DOMContentLoaded", () => {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = Date.now();
    const messageElement = document.getElementById("visit-message");
    const popup = document.getElementById("message-popup");
    const closeButton = document.getElementById("close-popup");

    if (!messageElement || !popup) {
        console.error("Required elements not found.");
        return;
    }

    if (!lastVisit) {
        messageElement.textContent = "Welcome! If you have any questions, let us know.";
    } else {
        const timeDiff = currentTime - parseInt(lastVisit, 10);
        const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysPassed < 1) {
            messageElement.textContent = "Back so soon? Awesome!";
        } else if (daysPassed === 1) {
            messageElement.textContent = "Your last visit was 1 day ago.";
        } else {
            messageElement.textContent = `Your last visit was ${daysPassed} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentTime);

    popup.classList.add("show");

    closeButton.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});
