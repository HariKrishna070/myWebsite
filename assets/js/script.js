'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


function downloadFile() {
  // Define the file URL
  var fileUrl = "./assets/resume/HARI KRISHNA RESUME.pdf";
  
  // Create an anchor element
  var anchor = document.createElement("a");
  
  // Set the href attribute to the file URL
  anchor.href = fileUrl;
  
  // Add the download attribute with the desired filename
  anchor.download = "HARI KRISHNA RESUME";
  
  // Trigger a click event on the anchor element
  anchor.click();
}


// image pop up
// Get all the image links and popup elements
const popupLinks = document.querySelectorAll('.popup-link');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-img');

// Function to show the popup with the clicked image
function showPopup(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  popupImage.src = this.querySelector('img').src; // Set the source of the popup image
  popup.style.display = 'block'; // Show the popup
}

// Loop through each image link and add click event listener
popupLinks.forEach(function(link) {
  link.addEventListener('click', showPopup);
});

// Event listener to close the popup when clicking outside the image
popup.addEventListener('click', function(event) {
  if (event.target === this) {
    popup.style.display = 'none';
  }
});






document.addEventListener('DOMContentLoaded', function() {
  var popupLink = document.querySelectorAll('.popup-link');
  var popup = document.getElementById('popup');
  var popImg = document.getElementsByClassName('.pop-img');
  var popupImg1 = document.getElementById('popup-img1');
  var popupImg2 = document.getElementById('popup-img2');

  popupLink.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var experienceId = this.closest('.experience-item').id;
      if (experienceId === 'experience1') {
        popupImg1.src = "./assets/images/Machine Learning-1.png"; // Set image for experience1
        popupImg2.src = "./assets/images/AI_ML-1.png";
      } else if (experienceId === 'experience2') {
        popupImg1.src = "./assets/images/data analytics.png"; // Set image for experience2
        popupImg2.src = "./assets/images/data analytics main.png";
      } else if (experienceId === 'experience3') {
        popupImg1.src = "./assets/images/barath intern.png"; // Set image for experience3
        popupImg2.src = "";
      }
      popup.style.display = 'flex';
    });
  });

  popup.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});
