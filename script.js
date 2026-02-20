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

const compressImage = (imageFile, quality) => {
    return new Promise((resolve, reject) => {
        const $canvas = document.createElement("canvas");
        const image = new Image();
        image.onload = () => {
            $canvas.width = image.width;
            $canvas.height = image.height;
            $canvas.getContext("2d").drawImage(image, 0, 0);
            $canvas.toBlob(
                (blob) => {
                    if (blob === null) {
                        return reject(blob);
                    } else {
                        resolve(blob);
                    }
                },
                "image/jpeg",
                quality / 100
            );
        };
        image.src = URL.createObjectURL(imageFile);
    });
};

const $inputFile = document.querySelector("#myImg");
    $inputFile.addEventListener("change", async () => {
        const file = $inputFile.files[0];
        const blob = await compressImage(file, 50);
        // Upload the blob with FormData or something similar
        console.log({ blob });
    });