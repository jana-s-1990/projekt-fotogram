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
// Aklueller Index vom Bild
let currentImg;

//Funktion, welche beim Onload ausgeführt wird
function init() {
  renderGallery();
}

// GET-FUNKTIONEN (holen nur Daten)
function getImgPath(index) {
  return yourImg[index];
}

function getAltDescription(index) {
  return imgAltDescription[index];
}

// RENDER-FUNKTIONEN (bauen HTML + schreiben ins DOM)
function renderGallery() {
  let fotoContainer = document.getElementById("foto-container");

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

// Dialog öffnen (Daten holen) + Rendern woanders
function openDialog(index) {
  let fileName = getImgPath(index);
  let altDescription = getAltDescription(index);

  //Globale Werte setzen
  currentImg = index;

  renderDialog(fileName, altDescription, index);

  let fotoDialog = document.getElementById("fotoDialog");
  fotoDialog.showModal();
}

function renderDialog(file, description, index) {
  let dialogHeadline = document.getElementById("foto-dialog-headline");
  let dialogImg = document.getElementById("foto-dialog-img");
  let dialogImgFilename = document.getElementById("foto-dialog-filename");
  let dialogImgCounter = document.getElementById("img-counter");

  dialogHeadline.innerText = description;
  dialogImg.src = `img/${file}`;
  dialogImg.alt = description;
  dialogImgFilename.innerText = file;
  dialogImgCounter.innerHTML = `<p>${index + 1}/${yourImg.length}</p>`;
}

// Dialog Buttons
function browseImgBack() {
  let index = currentImg - 1;

  if (index < 0) {
    index = yourImg.length - 1;
  }

  let imgBackFile = getImgPath(index);
  let imgBackDescription = getAltDescription(index);

  renderDialog(imgBackFile, imgBackDescription, index);

  currentImg = index;
}

function browseImgForward() {
  let index = currentImg + 1;

  if (index >= yourImg.length) {
    index = 0;
  }
  let imgForwardFile = getImgPath(index);
  let imgForwardDescription = getAltDescription(index);

  renderDialog(imgForwardFile, imgForwardDescription, index);

  currentImg = index;
}
function stopClick(event){
  event.stopPropagation();
}