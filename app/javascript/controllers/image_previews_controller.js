import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="image-previews"
export default class extends Controller {
  static targets = ["input", "preview"];
  static values = { count: Number };

  connect() {
  }

  preview() {
    const previewsContainer = document.getElementById("previews");

    let input = this.inputTarget;
    let images = Array.from(input.files);

    if (images) {
      images.forEach( function(img) {
        let reader = new FileReader();
        reader.readAsDataURL(img);

        reader.onloadend = function () {
          let preview = document.createElement('img');
          preview.src = reader.result;
          preview.classList.add("w-36");
          previewsContainer.appendChild(preview);
        }
      });
    } else {
      preview.src = ""
    }
  }
}
