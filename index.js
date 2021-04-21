const baseUrl = "https://www.dnd5eapi.co/api/"

document.addEventListener('DOMContentLoaded', getSpecies)

//fetching race names
function getSpecies() {
    fetch('https://www.dnd5eapi.co/api/races')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        addSpeciesToDrop(data)
    })
}
//adding races to dropdown menu
function addSpeciesToDrop(data) {
    let raceArray = data["results"]
    console.log(raceArray)
    let dropdown = document.getElementById("species-dropdown")
    dropdown.length = 0;

    let defaultOption = document.createElement('option')
    defaultOption.text = 'Choose A Race';
    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0

    let option;
    for (let i = 0; i < raceArray.length; i++) {
        option = document.createElement('option')
        option.text = raceArray[i].name
        dropdown.add(option)
    }
}
//fetching classes
function getCharacterClass() {
    fetch("https://www.dnd5eapi.co/api/classes")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        addCharacterClassesToDrop(data)
    })
}

function addCharacterClassesToDrop(data){

}