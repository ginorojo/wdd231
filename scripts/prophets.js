
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
const filters = document.querySelector('#filters');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // Debugging: Check if data is loaded correctly
    displayProphets(data.prophets);
    createFilterButtons(data.prophets);
}

const displayProphets = (prophets) => {
    cards.innerHTML = ''; // Clear existing content before displaying new filtered results

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h3');
        let birthdate = document.createElement('h4');
        let birthplace = document.createElement('h4');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname} – ${prophet.order}th Latter-day President`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order} ${prophet.birthdate} ${prophet.birthplace}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

const extractYear = (dateString) => {
    // Extract the last 4 characters assuming it represents the year
    return parseInt(dateString.split(" ").pop());
}

const createFilterButtons = (prophets) => {
    const currentYear = new Date().getFullYear(); // Get the current year for living prophets

    const filtersData = [
        { text: "Born in Utah", filterFunc: (p) => p.birthplace.includes('Utah') },
        { text: "Born outside U.S.", filterFunc: (p) => p.birthplace.includes('England') },
        {
            text: "Lived to 95+", filterFunc: (p) => {
                const birthYear = extractYear(p.birthdate); // Extract year from birthdate
                const deathYear = p.death ? extractYear(p.death) : currentYear; // Extract year from death or use current year if alive

                if (isNaN(birthYear) || isNaN(deathYear)) {
                    console.warn(`Invalid birth or death year for ${p.name} ${p.lastname}: Birth(${p.birthdate}), Death(${p.death})`);
                    return false; // Skip prophets with invalid data
                }

                const age = deathYear - birthYear;
                console.log(`${p.name} ${p.lastname} lived to: ${age} years`); // Check ages

                return age >= 95;
            }
        },
        { text: "10+ children", filterFunc: (p) => p.numofchildren >= 10 },
        { text: "Served 15+ years", filterFunc: (p) => p.length !== undefined && p.length >= 15 }
    ];

    filters.innerHTML = ''; // Clear previous buttons

    filtersData.forEach(({ text, filterFunc }) => {
        let button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', () => displayProphets(prophets.filter(filterFunc)));
        filters.appendChild(button);
    });

    // Add a reset button to show all prophets again
    let resetButton = document.createElement('button');
    resetButton.textContent = "Show All";
    resetButton.addEventListener('click', () => displayProphets(prophets));
    filters.appendChild(resetButton);
}

getProphetData();