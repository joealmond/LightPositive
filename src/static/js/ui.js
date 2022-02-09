const navList = document.querySelector(".nav__list");
const navButton = document.querySelector(".nav__button");
navButton.addEventListener("click", () => {
  navList.classList.toggle("show");
});
