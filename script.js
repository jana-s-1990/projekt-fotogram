let yourImg = ["butterfly.jpg", "easter.jpg", "eggs.jpg", "geese.jpg", "happy-tulips.jpg", 
    "hot-air-balloon.jpg", "iceland.jpg", "magnolia-trees.jpg", "pathway.jpg", "washington-state.jpg",
    "waterfall.jpg", "windmills.jpg"];

function init(){
    getImgfromPath();
}
function getImgfromPath(){
    for (let index = 0; index < yourImg.length; index++) {
        const element = yourImg[index];
        let fotoContainer = document.getElementById('foto-container');
        fotoContainer.innerHTML += renderImgPath(element); 
    }
}

function renderImgPath(element){
    let imgContainer = `<button class="btn-img-dialog" onclick="showDialog()"><img src="img/${element}" alt="test"></button>`;
    return imgContainer;
}