const baseUrl = "https://www.dnd5eapi.co/api/"
const partyForm = document.getElementById('party-form')
const characterForm = document.getElementById('character-form')
const searchForm = document.getElementById("party-search-form")


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

//   searchForm.addEventListener('submit', () => {
    
//       Party.searchParty()
//   })

