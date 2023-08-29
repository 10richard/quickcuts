import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    const toggleButton = document.getElementById("toggle-button");
    const navbarLinks = document.getElementById("navbar-links");

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle("hidden");
    });
  }
}
