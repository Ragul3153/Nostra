// Selecting Popup //
var main = document.getElementById("main")
var popup = document.getElementById("popup")

popup.addEventListener("click", function () {
    main.style.display = "none"
})

// Selecting Side Navbar //

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

// Sliding Images //

currentSlideID = 1;

sliderElement = document.querySelectorAll("#slider img");
totalSlides = sliderElement?.length;
console.log(totalSlides)

function next(){
    if(currentSlideID < totalSlides){
         currentSlideID++;
          showSlide()
    }
    else if(currentSlideID==totalSlides)
        currentSlideID =1
        showSlide()
}

function prev(){
    if(currentSlideID > 1){
    currentSlideID--;
        showSlide()
    }
    else if(currentSlideID==1)
    currentSlideID = totalSlides;
    showSlide()
}


function showSlide(){
    slides = document.getElementById("slider").getElementsByTagName("img")
    for(let index=0; index < totalSlides; index++) {
        const element = slides[index];
        if(currentSlideID===index+1){
            element.classList.remove("hidden")
        }

        else{
            element.classList.add("hidden")
        }
    }
    console.log(slides)
    console.log(currentSlideID)
}


// Initialize variables
var filterList = [];
var tags = document.querySelectorAll(".tag"); // Select all checkboxes with the class "tag"
console.log(tags);

// Add event listeners for all tag checkboxes //
tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    console.log(e.target);

    if (e.target.checked) {
      // If the checkbox is checked, add its value to the filterList
      filterList.push(e.target.value);
    } else {
      // If unchecked, remove its value from the filterList
      filterList = filterList.filter((item) => item !== e.target.value);
    }
    console.log(filterList);

    update(); // Call the update function to filter products
  });
});

// Function to filter products based on selected tags
function update() {
  var productList = document.querySelectorAll(".product"); // Select all products
  console.log(productList);

  productList.forEach((product) => {
    var check = false;

    // Get tags for the current product
    var temp = product.querySelector(".tags").innerHTML;

    // Convert the tags string into an array
    const tempFilterArray = temp.split(",");
    console.log(tempFilterArray);

    // Check if any filter tag matches the product tags
    filterList.forEach((filterTag) => {
      if (tempFilterArray.includes(filterTag)) {
        check = true;
        console.log(filterTag, check);
      }
    });

    // Show or hide the product based on the match
    if (!check && filterList.length > 0) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
}   






















































