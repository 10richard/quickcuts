import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="carousel"
export default class extends Controller {
  static targets = ["image"];

  connect() {
    this.index = 0;
    const numberOfPics = document.getElementById("previews").children.length;
    const leftArrow = document.getElementById("prev-image");
    const rightArrow =  document.getElementById("next-image");
    
    function checkIndex(arrow) {
      if (this.index == 0) {
        leftArrow.classList.add("opacity-60");
      } else {
        leftArrow.classList.remove("opacity-60");
      }

      if (this.index == numberOfPics) {
        rightArrow.classList.add("opacity-60");
      } else {
        rightArrow.classList.remove("opacity-60");
      }
    }
  }

  previous() {
    if (this.index > 0) {
      this.imageTargets[this.index].classList.add("hidden")
      this.index -= 1
      this.imageTargets[this.index].classList.remove("hidden")
    }
  }

  next() {
    if (this.index < this.imageTargets.length - 1) {
      this.imageTargets[this.index].classList.add("hidden")
      this.index += 1
      this.imageTargets[this.index].classList.remove("hidden")
    }
  }
}
