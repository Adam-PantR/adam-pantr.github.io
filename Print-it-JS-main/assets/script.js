const slides = [
	{
		"id":"1",
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"id":"2",
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"id":"3",
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"id":"4",
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


// ----------------------------------------------------------------------------------------------------------------

// GENERATION IMAGES

// ----------------------------------------------------------------------------------------------------------------


for (let i = 0 ; i < 4; i++ ){

	const imgCarrousel = slides[i];

	// const slidesElement = document.createElement("article");
	// imagesElement.className = "banner-img";

	const imagesElement = document.createElement("img");
	imagesElement.src = imgCarrousel.image;
	imagesElement.className = "banner-img";


	const textElement = document.createElement("p");
	textElement.innerHTML =imgCarrousel.tagLine;

	const divElement = document.createElement("div");
	divElement.className = "itemSlider"


	const carrousel=document.querySelector(".slider");
	// const carrouselContainer=document.querySelector("#banner");

	// carrousel.appendChild(slidesElement);
	carrousel.appendChild(divElement)
	divElement.appendChild(imagesElement);
	divElement.appendChild(textElement);
}

// ----------------------------------------------------------------------------------------------------------------

// SLIDE

// ----------------------------------------------------------------------------------------------------------------
let currentSlide = 0;

const container = document.querySelector(".slider");
const items = document.querySelectorAll(".itemSlider");
const totalSlides = items.length;
const imageWidth = items[0].clientWidth;

function positionCarrousel() {
	container.style.transform = `translateX(-${currentSlide * imageWidth}px)`;
  }

  const left = document.querySelector("#left");
left.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - 1;
  }
  positionCarrousel();
});

const right = document.querySelector("#right");
right.addEventListener("click", () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  positionCarrousel();
});


// ----------------------------------------------------------------------------------------------------------------

// DOTS

// ----------------------------------------------------------------------------------------------------------------


const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    setActiveDot();
    setSliderPosition();
  });
});

function setActiveDot() {
  dots.forEach(dot => dot.classList.remove('dot_selected'));
  dots[currentSlide].classList.add('dot_selected');
}

function setSliderPosition() {
  slider.style.transform = `translateX(-${currentSlide * 25}%)`;
}
setActiveDot();
setSliderPosition();



// ----------------------------------------------------------------------------------------------------------------

// FONCTION GAUCHE ET DROITE EN MARCHE 

// ----------------------------------------------------------------------------------------------------------------

let gauche = document.getElementById('left');
let droite = document.getElementById('right');

function clickGauche(){
	console.log('gauche');	

}
function clickDroite(){
	console.log('droite');
}

let fonctionGauche = gauche.addEventListener("click", clickGauche);
let fonctionDroite = droite.addEventListener("click", clickDroite);






