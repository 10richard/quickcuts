import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="carousel"
export default class extends Controller {
  static targets = ["slide"];

  connect() {
    this.index = 0;
  }

  previous() {
    if (this.index > 0) {
      this.slideTargets[this.index].classList.add("hidden")
      this.index -= 1
      this.slideTargets[this.index].classList.remove("hidden")
    }
  }

  next() {
    if (this.index < this.slideTargets.length - 1) {
      this.slideTargets[this.index].classList.add("hidden")
      this.index += 1
      this.slideTargets[this.index].classList.remove("hidden")
    }
  }
}
