const slides = [
	{
		"id":"1",
		"image":"images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"id":"2",
		"image":"images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"id":"3",
		"image":"images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"id":"4",
		"image":"images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


// let left=document.getElementById("left");
// let right=document.getElementById("right");
// let images=document.querySelector('.banner-img')
// p=-1;

// const slide=function() {
// 	if(right) {
// 		p++;
// 		document.addEventListener('click', document.getElementById("slide"+p).style.zIndex = "0");
// 		document.addEventListener('click', document.getElementById("slide"+(p-1)).style.zIndex = "-1") ;
// 		// document.addEventListener('click', slide, document.getElementById("slide"+(p-1)).style.zIndex = "-1" );
// 		console.log('ca marche')
// 		if(p<-1) {
// 			p=3
// 		}
				
// 	}
// 	else if(left) {
// 		p--;
// 		document.addEventListener('click', document.getElementById("slide"+p).style.zIndex = "0" );
// 		document.addEventListener('click', document.getElementById("slide"+(p+1)).style.zIndex = "-1" );

// 	// 	if(p=3) {
// 	// 		p=0
// 	// }
// 	}
// 	// else if(p<-1) {
// 	// 	p=3
// 	// }
// 	// else if(p=3) {
// 	// 	p=0
// 	// 	document.addEventListener('click', slide, document.getElementById("slide4").style.zIndex = "-1") ;
// 	// }
	
// }
// slide()

// ----------------------------------------------------------------------------------------------------------------

// Creation des images et text

// ----------------------------------------------------------------------------------------------------------------





// ----------------------------------------------------------------------------------------------------------------

// FOR i technique du cours

// ----------------------------------------------------------------------------------------------------------------


// for (let i = 0 ; i < slides.lenght; i++ ){
// 	const imgCarrousel = slides[i];
// 	const carrousel=document.getElementById("banner");
// 	const imagesElement = document.createElement("img");
// 	imagesElement.src = imgCarrousel.image;
// 	img.className("banner-img");

// 	const textElement = document.createElement("p");
// 	textElement.innerText = slides.tagline;

// 	const idElement = document.createElement("div");
// 	idElement.className("dot dot_selected")
// 	idElement.innerText = slides.id;

// 	carrousel.appendChild(imagesElement);
// 	carrousel.appendChild(textElement);
// }


// ----------------------------------------------------------------------------------------------------------------

// Test fonction gauche et droite

// ----------------------------------------------------------------------------------------------------------------

// function left() {
// 	document.getElementById('left');
// }
// function right() {
// 	document.getElementById('left');
// }

// ----------------------------------------------------------------------------------------------------------------

// GENERATION IMAGES

// ----------------------------------------------------------------------------------------------------------------

const imgCarrousel = slides[0];

const imagesElement = document.createElement("img");
imagesElement.src = imgCarrousel.image;


const textElement = document.createElement("p");
textElement.innerText = slides.tagline;

const carrousel=document.getElementById("banner");

carrousel.appendChild(imagesElement);
carrousel.appendChild(textElement);

// ----------------------------------------------------------------------------------------------------------------

// FONCTION CARROU

// ----------------------------------------------------------------------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let imageSlide = document.getElementsById("banner-img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      imageSlide[i].style.display = "none";
  }
  imageSlide[slideIndex-1].style.display = "block";
}

// ----------------------------------------------------------------------------------------------------------------

// FONCTION GAUCHE ET DROITE EN MARCHE 

// ----------------------------------------------------------------------------------------------------------------

let gauche = document.getElementById('left');
let droite = document.getElementById('right');

function clickGauche(){
	showSlides(slideIndex = n);
	console.log('gauche');	
}
function clickDroite(){
	showSlides(slideIndex += n);
	console.log('droite');
}

let fonctionGauche = gauche.addEventListener("click", clickGauche);
let fonctionDroite = droite.addEventListener("click", clickDroite);






