
const baseUrl = "https://www.dnd5eapi.co/api/"

document.addEventListener('DOMContentLoaded', getSpecies)
document.addEventListener('DOMContentLoaded', getCharacterClass)
document.addEventListener('DOMContentLoaded', fetchAlignments)
document.addEventListener('DOMContentLoaded', fetchWeapons)
document.getElementById('character-form').addEventListener('submit', submitCharacter)

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
    // console.log(raceArray)
    let dropdown = document.getElementById("species-dropdown")

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
        // console.log(data)

        addCharacterClassesToDrop(data)
    })
}

function addCharacterClassesToDrop(data){
    let classesArray = data["results"]
    let classDropdown = document.getElementById("class-dropdown")

    let newDefaultOption = document.createElement('option')
    newDefaultOption.text = 'Choose A Class';
    classDropdown.add(newDefaultOption);
    classDropdown.selectedIndex = 0

    let options;
    for (let i = 0; i < classesArray.length; i++) {
        options = document.createElement('option')
        options.text = classesArray[i].name
        classDropdown.add(options)
    }
}

function fetchAlignments() {
    fetch('https://www.dnd5eapi.co/api/alignments')
  .then(response => response.json())
  .then(data => {
    // console.log(data)

    addAlignmentsToDrop(data)
  })
}

function addAlignmentsToDrop(data) {
    let alignmentArray = data["results"]
    let alignmentDropDown = document.getElementById('alignment-dropdown')

    let thirdDefaultOption = document.createElement('option')
    thirdDefaultOption.text = "Choose An Alignment"
    alignmentDropDown.add(thirdDefaultOption)
    alignmentDropDown.selectedIndex = 0

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
    let weaponObject = data["equipment"]
    let weaponNames = []
    weaponObject.forEach(obj => {
        weaponNames.push(obj.name)
    })
    
    let weaponDropdown = document.getElementById('weapon-dropdown')
    let secondaryDropdown = document.getElementById('secondary-weapon-dropdown')

    let fourthDefaultOption = document.createElement('option')
    let fifthDefaultOption = document.createElement('option')

    fourthDefaultOption.text = "Choose A Weapon"
    fifthDefaultOption.text = "Choose A Second Weapon"
    weaponDropdown.add(fourthDefaultOption)
    weaponDropdown.selectedIndex = 0

    secondaryDropdown.add(fifthDefaultOption)
    secondaryDropdown.selectedIndex = 0
    let options;
    
    for (let i = 0; i < weaponNames.length; i++) {
        options = document.createElement('option')
        options.text = weaponNames[i]
        weaponDropdown.add(options)
        secondaryDropdown.add(options)
    }
}

function submitCharacter(event) {
    event.preventDefault();

    let nameInput = document.getElementById('character-name').value
    let race = document.getElementById('species-dropdown').value
    let characterClass = document.getElementById('class-dropdown').value
    let alignment = document.getElementById('alignment-dropdown').value
    let weapon = document.getElementById('weapon-dropdown').value
    let secondaryWeapon = document.getElementById('secondary-weapon-dropdown').value

    let character = {
        nameInput: nameInput,
        race: race,
        characterClass: characterClass, 
        alignment: alignment,
        weapon: weapon, 
        secondaryWeapon: secondaryWeapon
    }

    fetch("http://localhost:3000/characters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        body: JSON.stringify(character)
    })
    .then(resp => console.log(resp))      
}





