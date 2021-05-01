class Party{
    constructor(id, partyName) {
        this.id = id
        this.partyName = partyName
    }

    renderPartyName() {
        let characterDiv = document.getElementById("character-container")
        characterDiv.innerHTML +=
        `<h2>Character Summary For The ${this.partyName}</h2>`
        debugger
    } 
}