/*
* The goal for this class is that it takes in a forward button and a back button along with a container 
* container images for the carousel. The buttons will change the image being shown.
*/
export class Carousel {
  constructor(fwdBtn, bckBtn, imageContainer) {
    this.fwdBtn = fwdBtn;
    this.bckBtn = bckBtn;
    this.imageContainer = imageContainer;
    this.i = 0
    
    // Select the images
    this.images = Array.from(this.imageContainer.children);

    this.prepareImages();
    this.fwdBtn.addEventListener("click", this.nextImage);
    this.bckBtn.addEventListener("click", this.prevImage);
  }

  prepareImages = () => {
    this.images.slice(1).forEach(img => {
      img.classList.add("hide")
    });
  };

  nextImage = () => {
    // Move up the index
    this.images[this.i].classList.add("hide");
    this.i = (this.i + 1) % this.images.length; // So we don' t index off the Array
    this.images[this.i].classList.remove("hide");
  }

  prevImage = () => {
    this.images[this.i].classList.add("hide");
    this.i = this.#mod(this.i - 1, this.images.length) // So we don' t index off the Array
    this.images[this.i].classList.remove("hide");
  };

  #mod(n , m) { // Since js cant do mod with negative numbers >:|
    return ((n % m) + m) % m;
  }

}