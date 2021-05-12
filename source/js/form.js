const contestForm = document.querySelector(".form");
const contestSurname = document.querySelector(".field__surname");
const contestName = document.querySelector(".field__name");
const contestEmail = document.querySelector(".field__email");
const formSubmit = contestForm.querySelector(".form__submit");
const successPopup = document.querySelector(".popup--success");
const errorPopup = document.querySelector(".popup--error");
const closeSuccess = successPopup.querySelector(".popup__close");
const closeError = errorPopup.querySelector(".popup__close");

formSubmit.addEventListener("click", function (evt) {
  if (!contestSurname.value || !contestName.value || !contestEmail.value) {
    errorPopup.classList.add("popup--active");
  } else {
    evt.preventDefault();
    successPopup.classList.add("popup--active");
  }
});

closeError.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (errorPopup.classList.contains("popup--active")) {
    errorPopup.classList.remove("popup--active");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (errorPopup.classList.contains("popup--active")) {
      evt.preventDefault();
      errorPopup.classList.remove("popup--active");
    }
  }
});

closeSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (successPopup.classList.contains("popup--active")) {
    successPopup.classList.remove("popup--active");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (successPopup.classList.contains("popup--active")) {
      evt.preventDefault();
      successPopup.classList.remove("popup--active");
    }
  }
});
