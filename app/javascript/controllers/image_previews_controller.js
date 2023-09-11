import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="image-previews"
export default class extends Controller {
  static targets = ["input"];

  connect() {
  }

  previews() {
    const previewsContainer = document.getElementById("previews-before-upload");
    let input = this.inputTarget;
    let files = Array.from(input.files);

    if (files) {
      previewsContainer.textContent = "";
      files.forEach((f) => {
        let reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onloadend = function () {
          let img = document.createElement('img');
          img.classList.add("w-40");
          img.src = reader.result;
          previewsContainer.appendChild(img);
        };
      });
    }
  }
}
