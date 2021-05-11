class Character {

    static all = []

    constructor(id, name, race, characterClass, alignment, primary_weapon, secondary_weapon, partyId) {
        this.id = id
        this.name = name;
        this.race = race;
        this.characterClass = characterClass;
        this.alignment = alignment;
        this.primary_weapon = primary_weapon;
        this.secondary_weapon = secondary_weapon;
        this.party_id = partyId

        Character.all.push(this)
    }

    renderCharacter() {
        let characterDiv = document.getElementById("character-container")
        characterDiv.innerHTML +=
        `
        <br>
        <ul>
            <h4>Name: ${this.name}</h4><br>
            <li>Race: ${this.race}</li><br>
            <li>Class: ${this.characterClass}</li><br>
            <li>Alignment: ${this.alignment}</li><br>
            <li>Primary Weapon: ${this.primary_weapon}</li><br>
            <li>Secondary Weapon: ${this.secondary_weapon}</li><br>
        </ul>
        `
        // console.log(this.characterClass)
    }

    static getSpecies() {
        fetch('https://www.dnd5eapi.co/api/races')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.addSpeciesToDrop(data)
            // debugger
        })
    }

    static addSpeciesToDrop(data) {
        let raceArray = data["results"]
        let dropdown = document.getElementById("species-dropdown")
        let option;
        for (let i = 0; i < raceArray.length; i++) {
            option = document.createElement('option')
            option.text = raceArray[i].name
            dropdown.add(option)
        }
    }
    static getCharacterClass() {
        fetch("https://www.dnd5eapi.co/api/classes")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.addCharacterClassesToDrop(data)
        })
    }
    //adding char classes to dropdown
    static addCharacterClassesToDrop(data){
        let classesArray = data["results"]
        let classDropdown = document.getElementById("class-dropdown")
        let options;
        for (let i = 0; i < classesArray.length; i++) {
            options = document.createElement('option')
            options.text = classesArray[i].name
            classDropdown.add(options)
        }
    }
    // //adding races to dropdown menu
    static fetchAlignments() {
        fetch('https://www.dnd5eapi.co/api/alignments')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.addAlignmentsToDrop(data)
      })
    }
    // //alignments to drop 
    static addAlignmentsToDrop(data) {
        let alignmentArray = data["results"]
        let alignmentDropDown = document.getElementById('alignment-dropdown')
        let options;
        for (let i = 0; i < alignmentArray.length; i++) {
            options = document.createElement('option')
            options.text = alignmentArray[i].name
            alignmentDropDown.add(options)
        }
    }

    static fetchWeapons() {
        fetch('https://www.dnd5eapi.co/api/equipment-categories/weapon')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
        this.addWeaponToDrop(data)
      })
    }
    
    static addWeaponToDrop(data) {
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

  

    static submitCharacter(event) {
        event.preventDefault();
        
            let name = document.getElementById('name').value
            let race = document.getElementById('species-dropdown').value
            let characterClass = document.getElementById('class-dropdown').value
            let alignment = document.getElementById('alignment-dropdown').value
            let primaryWeapon = document.getElementById('weapon-dropdown').value
            let secondaryWeapon = document.getElementById('secondary-weapon-dropdown').value
            let partyId = document.getElementById('character-container')

            let character = {
                name: name,
                race: race,
                character_class: characterClass, 
                alignment: alignment,
                primary_weapon: primaryWeapon, 
                secondary_weapon: secondaryWeapon,
                party_id: parseInt(partyId.dataset.party)
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
                let char = new Character(character.id, character.name, character.race, character.character_class, character.alignment, character.primary_weapon, character.secondary_weapon, character.party_id)
                // debugger
                char.renderCharacter()
                // console.log(character_class)
            })
            document.getElementById('character-form').reset();
            
        }
        
}


