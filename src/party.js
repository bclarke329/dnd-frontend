class Party{

    // all = []

    constructor(id, partyName) {
        this.id = id
        this.partyName = partyName

        // Party.all.push(this)
    }

    static getPartyName(event) {
        event.preventDefault()
        
        let partyName = document.getElementById("party-name").value
        // partyName.toLowerCase()
        
        let partyInfo = {
            party_name: partyName.toUpperCase()
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
                // debugger
                console.log(partyName)
        })
        document.getElementById('party-form').reset()
        
    }

    
   
    renderPartyName() {
        let characterDiv = document.getElementById("character-container")
       characterDiv.dataset.party = this.id
        characterDiv.innerHTML +=
        `<h2>Character Summary For The ${this.partyName}</h2>`
        // debugger
    } 

    // static searchParty() {

    //     event.preventDefault()
    //     let searchField = document.getElementById('search-input').value


    //     fetch(`http://localhost:3000/parties/${searchField}`)
    //     .then(resp => resp.json())
    //       .then(array => {
    //             console.log(array)
    //          })
    //          renderPartyChar(array)
          
    //  }
      

    // renderPartyChar(array) {
    //   array.forEach(obj => {
    //    if( searchField === party.party_name ) {
    //        `
    //        <ul>
    //        <li><h3>${this.partyName}</h3></li>
    //         <li></li>
    //        </ul>
    //        `
    //    }

    //   })
    // }


}
