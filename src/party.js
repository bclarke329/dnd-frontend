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
                // debugger
                let p = new Party(party.id, party.party_name)
                alert("Party has been created!") 
                p.renderPartyName()
            // })
            // .catch(error => {
            //    alert("Party name is already taken!")
            //    console.log(error)
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

    static searchParty() {
        fetch("http://localhost:3000/parties/")
        .then(resp => resp.json())
        .then(parties => {
           debugger
            let partyDrop = document.getElementById("party-dropdown")
            parties.forEach(obj => {
                //adds party names from db into drop
                let partyOption = document.createElement('option')
                    partyOption.text = obj["party_name"]
                    partyDrop.add(partyOption)
             })
        })
        
    }

    
    renderSearchChar(parties, event) {
        event.preventDefault()
          let parArr = parties["array"]
          let search = document.getElementById("party-dropdown").value
          parArr.forEach(obj => {
              
              obj["characters"].forEach(newObj => {
                  debugger
                  let addChar = document.getElementById("character-container")
              addChar.innerHTML +=
                  `
                  <h3>Character Summary for ${search}</h3>
                  <ul>
                      <li>${newObj["name"]}</li>
                        <li>${newObj["race"]}</li>
                          <li>${newObj["alignment"]}</li>
                              <li>${newObj["primary_weapon"]}</li>
                              <li>${newObj["secondary_weapon"]}</li>
                  </ul>
                  `
                  console.log(newObj["name"], newObj["race"], newObj["alignment"], newObj["primary_weapon"], newObj["secondary_weapon"])
                  
              })
          })
           
       }

    
 }


