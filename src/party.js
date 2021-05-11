class Party{

    static all = []

    constructor(id, partyName, characters) {
        this.id = id
        this.partyName = partyName
        this.characters = characters

        Party.all.push(this)
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
        //    debugger
            let partyDrop = document.getElementById("party-dropdown")
            parties.forEach(obj => {
                //adds party names from db into drop
                let partyOption = document.createElement('option')
                    partyOption.text = obj["party_name"]
                    partyDrop.add(partyOption)
                    partyOption.setAttribute("id", `${obj.id}`)
                    partyOption.setAttribute("value", obj.id)
                    // debugger
                    new Party (obj["id"], obj["party_name"], obj["characters"])
                
                    // console.log(partyOption)
                    // debugger
             })
        })
        // renderSearchChar(partyId)
        

    }

    static renderSearchChar(event) {
        event.preventDefault()
        let searchedParty = document.getElementById("party-dropdown").value
       const foundParty = Party.all.find(party => party.id == searchedParty)
       foundParty.renderPartyName()
       let chosenChar = foundParty["characters"]
            debugger
       chosenChar.forEach(char => {
        new Character(char["id"], char["name"], char["race"], char["character_class"], char["alignment"], char["primary_weapon"], char["secondary_weapon"], char["party_id"])
        let addChar = document.getElementById("character-container")
            addChar.innerHTML +=
            `
            <br>
                <ul>
                    <li>Name: ${char["name"]}</li>
                    <li>Race: ${char["race"]}</li>
                    <li>Alignment: ${char["alignment"]}</li>
                    <li>Primary Weapon: ${char["primary_weapon"]}</li>
                    <li>Secondary Weapon: ${char["secondary_weapon"]}</li>
                </ul>
            <br>
            `
         debugger
    })
        ///need to iterate over the found party characters
        ///instantiate them as new character objects
        //in same iteration, call on the functions to render character
        //clearing the dom, before render characters objects, clear the div 

        
    }

    // static renderSearchChar(partyId, event) {
    //     event.preventDefault()
    //     fetch(`http://localhost:3000/parties/${partyId}}`)
    //     .then(resp => resp.json())
    //     .then(parties => {
    //         let search = document.getElementById("party-dropdown").value
    //         parties.forEach(obj => {
    //             obj["characters"].forEach(newObj => {
    //                 this.name === newObj["partyId"]
    //                 debugger
    //             let addChar = document.getElementById("character-container")
    //                 addChar.innerHTML +=
                    
    //                 `
    //                 <h3>Character Summary for ${this.partyName}</h3>
    //                  <ul>
    //                     <li>Name: ${newObj["name"]}</li>
    //                     <li>Race: ${newObj["race"]}</li>
    //                     <li>Alignment: ${newObj["alignment"]}</li>
    //                     <li>Primary Weapon: ${newObj["primary_weapon"]}</li>
    //                     <li>Secondary Weapon: ${newObj["secondary_weapon"]}</li>
    //                 </ul>
    //                 `
    //             })
    //         })
    //     })
            
    }  


        
     

              
          
           
    

