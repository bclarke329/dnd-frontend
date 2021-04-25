const baseUrl = "https://www.dnd5eapi.co/api/"

document.addEventListener('DOMContentLoaded', getSpecies)
document.addEventListener('DOMContentLoaded', getCharacterClass)
document.addEventListener('DOMContentLoaded', fetchAlignments)
document.addEventListener('DOMContentLoaded', fetchWeapons)

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
        // debugger
        weaponDropdown.add(options)
        secondaryDropdown.add(options)
    }
}
//getting user input to save and submit to server 
    const nameInput = document.getElementById('character-name')
    const race = document.getElementById('species-dropdown')
    const characterClass = document.getElementById('class-dropdown')
    // debugger

    const alignment = document.getElementById('alignment-dropdown')
    const mainWeapon = document.getElementById('weapon-dropdown')
    const secondWeapon = document.getElementById("secondary-weapon-dropdown")
    const test = document.getElementById('character-input')

document.getElementById("submit-character").addEventListener('submit', submitCharacter)

function submitCharacter(e) {
    e.preventDefault()
console.log("I was clicked")
    fetch('http://localhost:3000/characters'), {
        method: "POST", 
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify ({
            name: "nameInput.value",
            race: "race.value",
            class: "characterClass.value",
            alignment: "alignment.value",
            weapon: "mainWeapon.value",
            secondaryWeapon: "secondWeapon.value"
        })
    } 
    alert('I was saved')  
}