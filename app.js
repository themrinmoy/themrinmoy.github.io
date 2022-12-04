window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// const form = document.querySelector("#f1");;


// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     console.log("form submitted");

// });