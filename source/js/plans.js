const plansList = document.querySelector(".plans__list");

let plansListWidth = plansList.scrollWidth;

let setScrollPosition = function () {
  let scrollPosition = (plansListWidth / 2) - (window.innerWidth / 2);
  plansList.scrollLeft = scrollPosition;
}

setScrollPosition();

window.onresize = function () {
  setScrollPosition();
}
