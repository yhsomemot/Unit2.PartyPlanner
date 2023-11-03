const EVENTS_URI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events";

const state = {
    events: [],
}

const partiesList = document.querySelector('#display-parties');

//GET EVENT
const getParties = async () => {
    try {
        const response = await fetch(EVENTS_URI);
        const json = await response.json();
        const parties = json.data;
        if (json.error) {
            throw new Error(json.error);
        }
        state.events = parties;
    } catch (error) {
        console.log(error)
    }
//get doesn't need a render.
};

//POST EVENT
const createParty = async (name, description, date, location) => {
    try {
        const response = await fetch(EVENTS_URI, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
            body: JSON.stringify({ name, description, date, location })
        });
        const json = await response.json();
        if (json.error) {
            throw new Error(json.error);
        }
    } catch (error) {
        console.error(error)
    }

};


//DELETE EVENT
const deleteParty = async () => {
    try {
        const response = await fetch(EVENTS_URI + "/" + id, { method: "DELETE" }
    body: JSON.stringify({ name, description, date, location })
    });
    const json = await response.json();
    if (json.error) {
        throw new Error(json.error);
    } catch (error) {
        console.error(error)
    }

}

function renderEvents() {
    if (!state.events.length) {
        partiesList.innerHTML = `<li>No events found</li>`;
        return;
    }
    const partyItems = state.events.map((party) => {
        const partyItem = document.createElement("li");
        partyItem.classList.add("party");
        partyItem.innerHTML =
            `
        <h2>${party.name}</h2>
        <p>${party.description}</p>
        <p>${party.date}</p>
        <p>${party.location}</p>
        <p>${party.id}</p>
        `;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Party";
        partyItem.append(deleteButton);

        deleteButton.addEventListener("click", () => deleteParty(party.id));
        return partyItem;
    });

    partiesList.replaceChild(...partyItems); //calling and replacing. 
}

const init = async () => { //initializing the function
    await getParties();
    renderEvents();

}


init(); //render
