
const baseUrl = "https://www.dnd5eapi.co/api/"

document.addEventListener('DOMContentLoaded', getSpecies)
document.addEventListener('DOMContentLoaded', getCharacterClass)
document.addEventListener('DOMContentLoaded', fetchAlignments)
document.addEventListener('DOMContentLoaded', fetchWeapons)
document.getElementById('character-form').addEventListener('submit', submitCharacter)

document.getElementById('signup-form').addEventListener('submit', signupFormSubmission)


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

function submitCharacter(event) {  //sends created characters to database
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
    })
    .then(resp => resp.json())  
    .then(character => {
        alert("Character has been created!") 

        let char = new Character(character.id, character.name, character.race, character.character_class, character.alignment, character.primary_weapon, character.secondary_weapon)
        char.renderCharacter()
        console.log(character)
    })
   

}

function signupFormSubmission(event) { //sends users back to database
    event.preventDefault()

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let signup = {
        username: username,
        email: email, 
        password
    }

    fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
    body: JSON.stringify(signup)
    })
    .then(resp => resp.json())
    .then(user => {
        let u = new User(user.id, user.username, user.email, user.password)
    })
}

function loginSubmission(event) { //login back to database
    event.preventDefault()

    let username = document.getElementById('username-one').value
    let password = docment.getElementById('password-one').value

    let login = {
        username: username,
        password: password
    }


    fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
    body: JSON.stringify(login)
    })
    .then(resp => console.log(resp))
    alert("You are logged in and can begin saving your characters for future use.")


}

// function fetchCharacter() {
//     fetch(`http://localhost:3000/characters/1`)
//     .then(resp => resp.json())
//     .then(character => {
//     console.log(character)
    
//         // let char = new Character(character.id, character.name, character.race, character.characterClass, character.alignment, character.primary_weapon, character.secondary_weapon)
//         character.renderCharacter()
    
//     })
// }





