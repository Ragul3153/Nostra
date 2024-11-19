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











