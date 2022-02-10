const navList = document.querySelector(".nav__list");
const navListItem = document.querySelectorAll(".nav__list-item");
const navButton = document.querySelector(".nav__button");

navButton.addEventListener("click", () => {
  const index = { i: 0 };
  navListItem.forEach((element) => {
    index.i = index.i + 30;
    setTimeout(() => {
      element.classList.toggle("show");
    }, index.i);
  });
  navList.classList.toggle("show");
});

document.addEventListener("scroll", () => {
  navListItem.forEach((element) => {
    element.classList.remove("show");
  });
  navList.classList.remove("show");
});

window.addEventListener("resize", () => {
  navListItem.forEach((element) => {
    element.classList.remove("show");
  });
  navList.classList.remove("show");
});

const navBar = document.querySelector(".nav__nav");
const navLogo = document.querySelector(".nav__logo-img");
const navButtonImage = document.querySelector(".nav__button-image");

// let prevOffset = window.pageYOffset;
// document.addEventListener("scroll", () => {
//   let currOffset = window.pageYOffset;
//     function repeatOften() {
//       if (prevOffset > currOffset) {
//         navBar.style.height = "90px";
//         //   setTimeout(() => {
//         navLogo.classList.remove("navHide");
//         navButton.classList.remove("navHide");
//         navButtonImage.classList.remove("navHide");
//         //   }, 100);
//       } else {
//         navBar.style.height = "0px";
//         navLogo.classList.add("navHide");
//         navButton.classList.add("navHide");
//         navButtonImage.classList.add("navHide");
//       }
//       prevOffset = currOffset;
//       requestAnimationFrame(repeatOften);
//     }
//     requestAnimationFrame(repeatOften);
// });

// var lastScrollTop;
// window.addEventListener("scroll", function () {
//   const mediaQuery = window.matchMedia("(max-width: 700px)");
//   if (!mediaQuery.matches) return;

//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop < 90) return;
//   if (document.body.clientHeight > scrollTop + 700) {
//     if (scrollTop > lastScrollTop) {
//       //   function repeatOften() {
//       navBar.style.height = "0px";
//       navLogo.classList.add("navHide");
//       navButton.classList.add("navHide");
//       navButtonImage.classList.add("navHide");
//     } else {
//       navBar.style.height = "90px";
//       setTimeout(() => {
//         navLogo.classList.remove("navHide");
//         navButton.classList.remove("navHide");
//         navButtonImage.classList.remove("navHide");
//       }, 100);
//     }
//     lastScrollTop = scrollTop;
//   }
  //     requestAnimationFrame(repeatOften);
  //   }
  //   requestAnimationFrame(repeatOften);
});
