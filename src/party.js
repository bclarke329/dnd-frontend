class Party{
    constructor(id, partyName) {
        this.id = id
        this.partyName = partyName
    }

    renderPartyName() {
        let characterDiv = document.getElementById("character-container")
        characterDiv.innerHTML +=
        `<h2>Character Summary For The ${this.party_name}</h2>`
        debugger
    } 
}