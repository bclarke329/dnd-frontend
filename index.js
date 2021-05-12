// const baseUrl = "https://www.dnd5eapi.co/api/"
const partyForm = document.getElementById('party-form')
const characterForm = document.getElementById('character-form')
const searchDrop = document.getElementById("party-dropdown")
const search = document.getElementById('search-form')
const characterSection = document.getElementById('character-container')


    Character.getSpecies();
    Character.getCharacterClass();
    Character.fetchAlignments();
    Character.fetchWeapons();

    characterForm.addEventListener('submit', Character.submitCharacter)
    partyForm.addEventListener('submit', Party.getPartyName)

    partyForm.addEventListener('submit', () => {
      characterForm.hidden = false
  })

  partyForm.addEventListener('submit', () => {
      partyForm.hidden = true
  })

  Party.searchParty()
  // Party.renderSearchChar()

  // const search = searchDrop.value

 search.addEventListener('submit', Party.renderSearchChar)
 

 function clearBox(characterSection) {
     characterSection.innerHTML = " ";
 }
    // let search = searchDrop.value
    
  
   
 

 





