// import Typed from 'typed.js';

// window.onscroll = function () { myFunction() };
// var navbar = document.getElementById("nav");
// var sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// {/* <script> */}
//   // Handle the form submission
//     document.querySelector('form').addEventListener('submit', function(event) {
//         // Prevent the form from submitting normally
//         event.preventDefault();

//     // Get the form data
//     var name = document.querySelector('input[name="name"]').value;
//     var email = document.querySelector('input[name="email"]').value;
//     var message = document.querySelector('textarea[name="message"]').value;

//     // Validate the email address
//     if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/.test(email)) {
//         alert('Invalid email address.');
//     return;
//     }

//     // Send the email
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'contact.php', true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.send('name=' + name + '&email=' + email + '&message=' + message);

//     // Display a success message
//     if (xhr.status === 200) {
//         alert('Your message has been sent.');
//     }
//   });
// </script>





// function toggleNavbar() {
//   var navbar = document.getElementById("navbar");
//   var toggleCheckbox = document.getElementById("toggleCheckbox");

//   if (toggleCheckbox.checked) {
//     var links = navbar.getElementsByTagName("a");
//     for (var i = 0; i < links.length; i++) {
//       links[i].style.display = "block";
//     }
//   } else {
//     var links = navbar.getElementsByTagName("a");
//     for (var i = 0; i < links.length; i++) {
//       links[i].style.display = "none";
//     }
//   }
// }

// function hideNavbar() {
//   var toggleCheckbox = document.getElementById("toggleCheckbox");
//   toggleCheckbox.checked = false;
//   toggleNavbar();
// }





// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

// var typed = new Typed('.element', options);