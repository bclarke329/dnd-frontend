class Character {
    constructor(id, name, race, characterClass, alignment, primary_weapon, secondary_weapon) {
        this.id = id
        this.name = name;
        this.race = race;
        this.characterClass = characterClass;
        this.alignment = alignment;
        this.primary_weapon = primary_weapon;
        this.secondary_weapon = secondary_weapon;
    }

    renderCharacter() {
        let characterDiv = document.getElementById("character-container")

        characterDiv.innerHTML +=
        `
        <ul>
            <h5>${this.name}</h5><br>
            <li>${this.race}}</li><br>
            <li>${this.characterClass}</li><br>
            <li>${this.alignment}</li><br>
            <li>${this.primary_weapon}</li><br>
            <li>${this.secondary_weapon}</li><br>
        </ul>
        `
        
    }

}

