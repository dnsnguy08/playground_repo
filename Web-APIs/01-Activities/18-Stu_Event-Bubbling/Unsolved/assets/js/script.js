// TODO: Which element is the following line of code selecting?
// Grab html element with a class of carousels

var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?

// Get html elements with the classes and store them in variables
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");

// So we can index
var index = 0;

// Store current image
var currentImage;

// an array of images to use
var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  // changes index value forward
  index = index + direction;

  // if index is less than 0 it changes index to be the last element of the array (wraps around)
  if (index < 0) { 
    index = images.length - 1; 

  // wrap to the first image once we're out of bounds
  } else if (index > images.length - 1) { 
    index = 0;
  }

  // sets the current image to the image of the correct index we're on
  currentImage = images[index];

  // update UI to show current image
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// Runs the navigate function with a value of 1
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // stops click from bubbling up
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
