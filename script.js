window.onload = function(){ 
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
};

document.addEventListener("DOMContentLoaded", function() {
    // Define the mobile breakpoint (e.g., 768px)
    if (window.innerWidth > 768) {
        // Select images you want to lazy load
        const images = document.querySelectorAll('img.svg');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Define the mobile breakpoint (e.g., 768px)
    if (window.innerWidth > 768) {
        // Select images you want to lazy load
        const images = document.querySelectorAll('img.myImages');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    }
});

let scrollSpeed = 0.5;

// Add an event listener for the 'wheel' event
document.addEventListener('wheel', function(event) {
  // Prevent default scrolling behavior
  event.preventDefault();

  // Calculate the new scroll position
  let delta = event.deltaY;
  let scrollPosition = window.scrollY + (delta * scrollSpeed);

  // Set the new scroll position
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}, { passive: false });