class Character {

    static all = []

    constructor(id, name, race, characterClass, alignment, primary_weapon, secondary_weapon, partyId) {
        this.id = id
        this.name = name;
        this.race = race;
        this.character_class = characterClass;
        this.alignment = alignment;
        this.primary_weapon = primary_weapon;
        this.secondary_weapon = secondary_weapon;
        this.party_id = partyId

        Character.all.push(this)
    }

    // static getSpecies() {
    //     fetch('https://www.dnd5eapi.co/api/races')
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log(data)
    //         addSpeciesToDrop(data)
    //     })
    // }

    // static addSpeciesToDrop(data) {
    //     let raceArray = data["results"]
    //     let dropdown = document.getElementById("species-dropdown")
    //     let option;
    //     for (let i = 0; i < raceArray.length; i++) {
    //         option = document.createElement('option')
    //         option.text = raceArray[i].name
    //         dropdown.add(option)
    //     }
    // }
   
    //adding races to dropdown menu
   

    renderCharacter() {
        let characterDiv = document.getElementById("character-container")
        characterDiv.innerHTML +=
        `
        <ul>
            <h5>${this.name}</h5><br>
            <li>${this.race}</li><br>
            <li>${this.characterClass}</li><br>
            <li>${this.alignment}</li><br>
            <li>${this.primary_weapon}</li><br>
            <li>${this.secondary_weapon}</li><br>
        </ul>
        `
        console.log(this.characterClass)
    }

}

