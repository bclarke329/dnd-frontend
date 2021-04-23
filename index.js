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
    // dropdown.length = 0;

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
    // classDropdown.length = 0

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
    // alignmentDropDown.length = 0

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
        console.log(data)

    addWeaponToDrop(data)
  })
}

function addWeaponToDrop(data) {
    let weaponObject = data["equipment"]
    let weaponNames = []
    weaponObject.forEach(obj => {
        weaponNames.push(obj.name)
    })
    // debugger

    let weaponDropdown = document.getElementById('weapon-dropdown')
    // weaponDropdown.length = 0
    let fourthDefaultOption = document.createElement('option')
    fourthDefaultOption.text = "Choose A Weapon"
    weaponDropdown.add(fourthDefaultOption)
    weaponDropdown.selectedIndex = 0
    let options;
    for (let i = 0; i < weaponNames.length; i++) {
        options = document.createElement('option')
        options.text = weaponNames[i]
        // debugger
        weaponDropdown.add(options)
        
    }
}
