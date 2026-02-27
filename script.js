// Arrays mit Bildnamen und Beschreibung
let yourImg = [
  "butterfly.jpg",
  "easter.jpg",
  "eggs.jpg",
  "geese.jpg",
  "happy-tulips.jpg",
  "hot-air-balloon.jpg",
  "iceland.jpg",
  "magnolia-trees.jpg",
  "pathway.jpg",
  "washington-state.jpg",
  "waterfall.jpg",
  "windmills.jpg",
];

let imgAltDescription = [
  "Schmetterling",
  "Ostern",
  "Bunte Eier in Eierkarton",
  "Enten im Teich",
  "Tulpen",
  "Heißluftballon",
  "Landschaft",
  "Kirschbäume",
  "Weg mit Tuplen",
  "Kirschblüten vor einer Kathedrale",
  "Wasserfall",
  "Windmühlen",
];

//Funktion, welche beim Onload ausgeführt wird
function init() {
  renderGallery();
}

// --------------------
// GET-FUNKTIONEN (holen nur Daten)
// --------------------
function getImgPath(index) {
  return yourImg[index];
}

function getAltDescription(index) {
  return imgAltDescription[index];
}

// --------------------
// RENDER-FUNKTIONEN (bauen HTML + schreiben ins DOM)
// --------------------
function renderGallery() {
  let fotoContainer = document.getElementById("fotoContainer");

  for (let index = 0; index < yourImg.length; index++) {
    const fileName = getImgPath(index);
    const altTag = getAltDescription(index);

    fotoContainer.innerHTML += renderImgButton(fileName, altTag, index);
  }
}
function renderImgButton(file, alt, index) {
  return `
    <button class="btn-img-dialog" onclick="openDialog(${index})">
    <img src="img/${file}" alt="${alt}">
    </button>`;
}

// --------------------
// Dialog öffnen (Daten holen) + Rendern woanders
// --------------------
function openDialog(index){
    let fileName = getImgPath(index);
    let altDescription = getAltDescription(index);

    console.log(fileName);
    console.log(altDescription);

    renderDialog(fileName, altDescription);

    fotoDialog.showModal();
};
function renderDialog(file, description){
    let dialogHeadline = document.getElementById('fotoDialogHeadline');
    let dialogImg = document.getElementById('fotoDialogImg');
    let dialogImgFilename = document.getElementById('fotoDialogFileName');

    dialogHeadline.innerText = description;
    dialogImg.src = `img/${file}`;
    dialogImg.alt = description;
    dialogImgFilename.innerText = file;

}