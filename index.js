const EVENTS_URI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events";

const state = 

//GET EVENT
const getParties = async () => {
    try {
        const response = await fetch(EVENTS_URI);
        const json = response.json();
        const parties = json.data;
        if(json.error){
            throw new Error(json.error);
        }
        return parties;
    } catch (error) {
        console.log(error)
    }

};

init();

//POST EVENT

const createParty = async (name, description, date, location) => {
    try {
        const response = await fetch(EVENTS_URI, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        body: JSON.stringify({ name, description, date, location })
        });
        const json = await response.json();
        if(json.error){
            throw new Error(json.error);
        }
    } catch(error){
        console.error(error)
    }
    
};


//DELETE EVENT

const deleteParty = async () =>{
    try {
    const response = await fetch(EVENTS_URI+"/"+id, {
        method: "DELETE",
    }
    body: JSON.stringify({ name, description, date, location })
    });
    const json = await response.json();
    if(json.error){
        throw new Error(json.error);
    }
} catch(error){
    console.error(error)
}

}

fuction renderEvents()

const init = async () => { //initializing the function
    const parties = await createParties();
    console.log(parties); //The log was being outputted before the getParties was finished, so we had to await it. (not working though)
}
//this is to show that we are fetching corrently.

init();