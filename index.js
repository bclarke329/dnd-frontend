
const baseUrl = "https://www.dnd5eapi.co/api/"

document.addEventListener('DOMContentLoaded', getSpecies)
document.addEventListener('DOMContentLoaded', getCharacterClass)
document.addEventListener('DOMContentLoaded', fetchAlignments)
document.addEventListener('DOMContentLoaded', fetchWeapons)

document.getElementById('character-form').addEventListener('submit', submitCharacter)
document.getElementById('party-name').addEventListener('submit', getPartyName)

function getPartyName() {
    event.preventDefault()
    let partyName = document.getElementById("party-name").value
    
    partyName = {
        party_name: partyName
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(partyName)
    };
    fetch("http://localhost:3000/parties, configObj")
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })
            
}


// function displayPartyName () {
//     fetch("http://localhost:3000/parties"), {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         }, 
//         body: JSON.stringify(partyName)
//         }
//         .then(resp => resp.json())
//         .then(party => {
//             let p = new Party(party.name)
//             p.renderPartyName()
//         })
    
// }


//fetching race names
function getSpecies() {
    fetch('https://www.dnd5eapi.co/api/races')
    .then(response => response.json())
    .then(data => {
        // console.log(data)

        addSpeciesToDrop(data)
    })
}
//adding races to dropdown menu
function addSpeciesToDrop(data) {
    let raceArray = data["results"]
    let dropdown = document.getElementById("species-dropdown")

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
        // console.log(data)

        addCharacterClassesToDrop(data)
    })
}
//adding char classes to dropdown
function addCharacterClassesToDrop(data){
    let classesArray = data["results"]
    let classDropdown = document.getElementById("class-dropdown")

    let options;
    for (let i = 0; i < classesArray.length; i++) {
        options = document.createElement('option')
        options.text = classesArray[i].name
        classDropdown.add(options)
    }
}
//fetching alignments
function fetchAlignments() {
    fetch('https://www.dnd5eapi.co/api/alignments')
  .then(response => response.json())
  .then(data => {
    // console.log(data)

    addAlignmentsToDrop(data)
  })
}
//alignments to drop 
function addAlignmentsToDrop(data) {
    let alignmentArray = data["results"]
    let alignmentDropDown = document.getElementById('alignment-dropdown')

    let options;
    for (let i = 0; i < alignmentArray.length; i++) {
        options = document.createElement('option')
        options.text = alignmentArray[i].name
        alignmentDropDown.add(options)
    }
}


function fetchWeapons() {
    fetch('https://www.dnd5eapi.co/api/equipment-categories/weapon')
    .then(response => response.json())
    .then(data => {
        // console.log(data)

    addWeaponToDrop(data)
  })
}

function addWeaponToDrop(data) {
    let weaponDropdown = document.getElementById('weapon-dropdown')
    let secondaryDropdown = document.getElementById('secondary-weapon-dropdown')

    data["equipment"].forEach(obj => {
        let optionPrimary = document.createElement('option')
        let optionSecondary = document.createElement('option')
        optionPrimary.text = obj.name
        weaponDropdown.add(optionPrimary)
        optionSecondary.text = obj.name
        secondaryDropdown.add(optionSecondary)
    })
}

function submitCharacter() {
event.preventDefault();

    let name = document.getElementById('name').value
    let race = document.getElementById('species-dropdown').value
    let characterClass = document.getElementById('class-dropdown').value
    let alignment = document.getElementById('alignment-dropdown').value
    let primaryWeapon = document.getElementById('weapon-dropdown').value
    let secondaryWeapon = document.getElementById('secondary-weapon-dropdown').value

    let character = {
        name: name,
        race: race,
        character_class: characterClass, 
        alignment: alignment,
        primary_weapon: primaryWeapon, 
        secondary_weapon: secondaryWeapon
    }

    fetch("http://127.0.0.1:3000/characters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        body: JSON.stringify(character)
    
    .then(resp => resp.json())  
    .then(character => {
        alert("Character has been created!") 

        let char = new Character(character.id, character.name, character.race, character.character_class, character.alignment, character.primary_weapon, character.secondary_weapon)
        char.renderCharacter()
        console.log(character)
    })
)}