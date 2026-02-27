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

function init() {
  getImgfromPath();
}
function getImgfromPath() {
  for (let index = 0; index < yourImg.length; index++) {
    const element = yourImg[index];

    let imgAltDescription = getImgAltTag(index);



    let fotoContainer = document.getElementById("foto-container");
    fotoContainer.innerHTML += renderImgPath(element, imgAltDescription);
  }
}

function getImgAltTag(indexFromImgArr){
    for (let index = 0; index < imgAltDescription.length; index++) {
        if(index == indexFromImgArr){
            return imgAltDescription[index];
        }
    }

}

function renderImgPath(element, imgAltDescription) {
  let imgContainer = `<button class="btn-img-dialog" onclick="showDialog()"><img src="img/${element}" alt="${imgAltDescription}"></button>`;
  return imgContainer;
}
