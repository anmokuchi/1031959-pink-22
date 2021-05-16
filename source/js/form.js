const contestForm = document.querySelector(".form");
const contestSurname = contestForm.querySelector(".field__surname");
const contestName = contestForm.querySelector(".field__name");
const contestEmail = contestForm.querySelector(".field__email");
const formSubmit = contestForm.querySelector(".form__submit");
const successPopup = document.querySelector(".popup--success");
const errorPopup = document.querySelector(".popup--error");
const closeSuccess = successPopup.querySelector(".popup__close");
const closeError = errorPopup.querySelector(".popup__close");

contestForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!contestSurname.value || !contestName.value || !contestEmail.value) {
    errorPopup.classList.add("popup--active");
  } else {
    successPopup.classList.add("popup--active");
  }
});

let closePopup = function (element) {
  if (element.classList.contains("popup--active")) {
    element.classList.remove("popup--active");
  }
}

closeError.addEventListener("click", function (evt, errorPopup) {
  evt.preventDefault();
  closePopup(errorPopup);
});

window.addEventListener("keydown", function (evt, errorPopup) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closePopup(errorPopup);
  }
});

closeSuccess.addEventListener("click", function (evt, successPopup) {
  evt.preventDefault();
  closePopup(successPopup);
});

window.addEventListener("keydown", function (evt, successPopup) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closePopup(successPopup);
  }
});
