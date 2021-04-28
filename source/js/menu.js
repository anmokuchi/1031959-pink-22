const header = document.querySelector(".header");
const menuToggle = document.querySelector(".header__menu-toggle");
const mainMenu = document.querySelector(".menu");

menuToggle.classList.remove("header__menu-toggle--nojs");
header.classList.remove("header--menu-opened");
mainMenu.classList.add("menu--closed");

menuToggle.addEventListener("click", function() {
  if (mainMenu.classList.contains("menu--closed")) {
    menuToggle.classList.remove("header__menu-toggle--closed");
    menuToggle.classList.add("header__menu-toggle--opened");
    header.classList.add("header--menu-opened");
    mainMenu.classList.remove("menu--closed");
  } else {
    menuToggle.classList.remove("header__menu-toggle--opened");
    menuToggle.classList.add("header__menu-toggle--closed");
    header.classList.remove("header--menu-opened");
    mainMenu.classList.add("menu--closed");
  }
});
