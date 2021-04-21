document.addEventListener("DOMContentLoaded", () => {
    
})

function getSpecies() {
    fetch('https://www.dnd5eapi.co/api/races')
    .then(response => response.json())
    .then(data => {
        console.log(data)
  })
}
