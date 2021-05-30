const getImagesButton = document.querySelector("#get-images-from-nasa")
const displayFhazButton = document.querySelector("#fhaz")
const displayRhazButton = document.querySelector("#rhaz")
const displayMastButton = document.querySelector("#mast")
const displayChemcamButton = document.querySelector("#chemcam")
const displayNavcamButton = document.querySelector("#navcam")
const mainContent = document.querySelector(".main-backgroung")


let dataFromNasa;
let fhazCameraImages;

// Getting data form NASA
async function sendApiRequest()
{
	const API_KEY = "NPvNQgw0giFXo46QkjcjP4r0apSH28oK4TlFfjQF"
	let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
	dataFromNasa = await response.json();
	mainContent.classList.add("display-main-content");
}
//GET DATA FROM NASA BTN
getImagesButton.addEventListener("click", () =>
{
	sendApiRequest();
})


//Camera-select Buttons   
displayFhazButton.addEventListener("click", () =>
{
	let fhazCameraImages = JSON.parse(JSON.stringify(dataFromNasa)).photos.filter(e => e.camera.name === "FHAZ");
	const i = Math.floor(Math.random() * fhazCameraImages.length);
	document.querySelector(".image-conteiner").innerHTML = `<img src="${fhazCameraImages[i].img_src}"> </img>`;
})

displayRhazButton.addEventListener("click", () =>
{
	let rhazCameraImages = JSON.parse(JSON.stringify(dataFromNasa)).photos.filter(e => e.camera.name === "RHAZ");
	const i = Math.floor(Math.random() * rhazCameraImages.length);
	document.querySelector(".image-conteiner").innerHTML = `<img src="${rhazCameraImages[i].img_src}"> </img>`;
})

displayMastButton.addEventListener("click", () =>
{
	let mastCameraImages = JSON.parse(JSON.stringify(dataFromNasa)).photos.filter(e => e.camera.name === "MAST");
	const i = Math.floor(Math.random() * mastCameraImages.length);
	document.querySelector(".image-conteiner").innerHTML = `<img src="${mastCameraImages[i].img_src}"> </img>`;
})

displayChemcamButton.addEventListener("click", () =>
{
	let chemcamCameraImages = dataFromNasa.photos.filter(e => e.camera.name === "CHEMCAM");
	const i = Math.floor(Math.random() * chemcamCameraImages.length);
	document.querySelector(".image-conteiner").innerHTML = `<img src="${chemcamCameraImages[i].img_src}"> </img>`;
})

displayNavcamButton.addEventListener("click", () =>
{
	let navcamCameraImages = dataFromNasa.photos.filter(e => e.camera.name === "CHEMCAM");
	const i = Math.floor(Math.random() * navcamCameraImages.length);
	document.querySelector(".image-conteiner").innerHTML = `<img src="${navcamCameraImages[i].img_src}"> </img>`;
})







function printFhazImage()
{
	document.querySelector(".image-conteiner").innerHTML += `<img src="${fhazCameraImages.img_src}" class="image-to-display"> </img>`;
}

function printRhazImage()
{
	document.querySelector(".image-conteiner").innerHTML += `<img src="${dataFromNasa.photos[i].img_src}" class="image-to-display"> </img>`;
}

function printMastImage()
{
	document.querySelector(".image-conteiner").innerHTML += `<img src="${dataFromNasa.photos[i].img_src}" class="image-to-display"> </img>`;
}

function printChemcamImage()
{
	document.querySelector(".image-conteiner").innerHTML += `<img src="${dataFromNasa.photos[i].img_src}" class="image-to-display"> </img>`;
}

function printNavcamImage()
{
	document.querySelector(".image-conteiner").innerHTML += `<img src="${dataFromNasa.photos[i].img_src}" class="image-to-display"> </img>`;
}