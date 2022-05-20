var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // Check if the clicked element was an image
  if (element.querySelector(".box")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");
    if (state === "hidden") {
      console.log('hi');
      element.textContent = element.dataset.number;
      element.dataset.state = 'visible';

    } else {
      // Change the attributes back to their non-animated values
      element.textContent = '';
      element.dataset.state = "hidden";
    }
  }
});
