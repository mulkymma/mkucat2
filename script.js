// Open Modal
function openModal() {
  document.getElementById('mapModal').style.display = 'flex';
}

// Close Modal
function closeModal() {
  document.getElementById('mapModal').style.display = 'none';
}
function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}
let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// Show slides function
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Automatically change slides every 3 seconds
setInterval(() => {
    slideIndex++;
    showSlides();
}, 3000);
