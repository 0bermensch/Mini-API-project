/**
 * I need to write a axios function that will let me request the information I am trying to submit
 * but the submission does not need to be record, it just need to correspond with the data I am requesting
 * POST. submit name -> name match name in api database (conditional statement) -> GET. character info from the name in api database
 */

let inputSubmit = document.getElementById("input");
let characters = [];
inputSubmit.addEventListener("submit", event => {
  event.preventDefault();

  axios
    .get("https://rickandmortyapi.com/api/character")
    .then(function(response) {
      characters = response.data.results;
      console.log(characters);
      let searchText = event.target.character.value;
      let filteredCharacters = characters.filter(
        character => character.name === searchText
      );
      console.log(filteredCharacters);
      {
        displayCharacter(filteredCharacters);
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });

  function displayCharacter([characterInfo]) {
    let characterOutput = document.querySelector(".output");

    let characterNameTitle = document.createElement("h3");
    characterNameTitle.classList.add("output__character--name--title");
    characterNameTitle.innerText = "Name";

    let characterName = document.createElement("h3");
    characterName.classList.add("output__character--name");
    characterName.innerText = characterInfo.name;

    let characterStatusTitle = document.createElement("h3");
    characterStatusTitle.classList.add("output__character--status--title");
    characterStatusTitle.innerText = "Status";

    let characterStatus = document.createElement("h3");
    characterStatus.classList.add("output__character--status");
    characterStatus.innerText = characterInfo.status;

    let characterSpeciesTitle = document.createElement("h3");
    characterSpeciesTitle.classList.add("output__character--species--title");
    characterSpeciesTitle.innerText = "Species";

    let characterSpecie = document.createElement("h3");
    characterSpecie.classList.add("output__character--species");
    characterSpecie.innerText = characterInfo.species;

    let characterImage = document.createElement("img");
    let image = characterInfo.image;
    characterImage.src = image;

    // classList.add("output__character--image");
    // characterImage.innerText = characterInfo.image;

    characterOutput.appendChild(characterNameTitle);
    characterOutput.appendChild(characterName);
    characterOutput.appendChild(characterStatusTitle);
    characterOutput.appendChild(characterStatus);
    characterOutput.appendChild(characterSpeciesTitle);
    characterOutput.appendChild(characterSpecie);
    characterOutput.appendChild(characterImage);
  }
});
