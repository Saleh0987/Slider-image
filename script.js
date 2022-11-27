// Get Slider Items
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

//Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
let paginationElement = document.createElement("ul");

// Set ID On Created UI Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Sldes Count
for (let i = 1; i <= slidesCount; i++) {
  // Create The LI
  let paginationItem = document.createElement("li");

  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items To The Main Ul List
  paginationElement.appendChild(paginationItem);
}
// Add The Created UL Element to The Page
document.getElementById("indicatros").appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination Items
let paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li"));

// Loop Through All Bullets Items
for (let i = 0; i < paginationsBullets.length; i++){

  paginationsBullets[i].onclick = function (){

    currentSlide = parseInt(this.getAttribute('data-index'));


theCheker();

  }

}

// Trigger The Cheker Function
theCheker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {
    //Do Nothing
    return false;

  } else {

      currentSlide++;

      theCheker();
  }
}

// Previous Slide Function
function prevSlide() {
  
  if (prevButton.classList.contains("disabled")) {
    //Do Nothing
    return false;
  } else {
    currentSlide--;

    theCheker();
  }
}

// Create The Checker Function
function theCheker() {
  // Set The Slide Number
  slideNumberElement.textContent = currentSlide + " of " + slidesCount;

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check if Current Slide is The First
  if (currentSlide == 1) {
    // Add Disabled Class on Previous Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class on Previous Button
    prevButton.classList.remove("disabled");
  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {
    
    // Add Disabled Class on Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class on Next Button
    nextButton.classList.remove("disabled");
  }
}


// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {
    
    bullet.classList.remove('active');

  });

}