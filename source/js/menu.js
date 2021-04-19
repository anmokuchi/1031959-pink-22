const headerWrapper = document.querySelector(".header__wrapper");
const menuToggle = document.querySelector(".header__menu-toggle");
const mainMenu = document.querySelector(".menu");

menuToggle.classList.remove("header__menu-toggle--nojs");
headerWrapper.classList.remove("header__wrapper--opened");
mainMenu.classList.add("menu--closed");

menuToggle.addEventListener("click", function() {
  if (mainMenu.classList.contains("menu--closed")) {
    menuToggle.classList.remove("header__menu-toggle--closed");
    menuToggle.classList.add("header__menu-toggle--opened");
    headerWrapper.classList.add("header__wrapper--opened");
    mainMenu.classList.remove("menu--closed");
  } else {
    menuToggle.classList.remove("header__menu-toggle--opened");
    menuToggle.classList.add("header__menu-toggle--closed");
    headerWrapper.classList.remove("header__wrapper--opened");
    mainMenu.classList.add("menu--closed");
  }
});
