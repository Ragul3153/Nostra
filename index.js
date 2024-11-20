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

sliderElement = document.getElementById("slider");
totalSlides = sliderElement.childElementCount;
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




