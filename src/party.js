class Party{

    // all = []

    constructor(id, partyName) {
        this.id = id
        this.partyName = partyName

        // Party.all.push(this)
    }

    static getPartyName() {
        event.preventDefault()
        let partyName = document.getElementById("party-name").value
    
        partyInfo = {
            party_name: partyName
        }
        fetch("http://localhost:3000/parties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(partyInfo)
        })
            .then(resp => resp.json())
            .then(party => {
                alert("Party has been created!") 
                // debugger
                let p = new Party(party.id, party.party_name)
                p.renderPartyName()
                p.addEventListener('submit', getParty)
                console.log(partyName)
        })
        document.getElementById('party-form').reset()
        
    }

    
   
    renderPartyName() {
        let characterDiv = document.getElementById("character-container")
        characterDiv.innerHTML +=
        `<h2>Character Summary For The ${this.partyName}</h2>`
        debugger
    } 
}

