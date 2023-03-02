const elemPrimaryNavigation = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".btn-hamburger");
const navLinks = elemPrimaryNavigation.querySelectorAll("a");
const elemHamburger = navToggle.querySelector(".icon-hamburger");


// Display mobile menu and change the hamburger button on cellphones:

navToggle.addEventListener('click', () => {
   elemPrimaryNavigation.classList.toggle('open');
   elemHamburger.classList.toggle("morphToClose");
   // navToggle.setAttribute("aria-expanded", navToggle.getAttribute("aria-expanded") === "false" ? "true" : "false");

   
});

navLinks.forEach(link => {
   link.addEventListener('click', () => {
      elemPrimaryNavigation.classList.remove('open');
      elemHamburger.classList.remove("morphToClose");
      navToggle.setAttribute("aria-expanded", "false");
   });
});