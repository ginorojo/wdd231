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