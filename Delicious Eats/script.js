const menuIcon = document.querySelector("#menu_icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".nav-bg");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
});
