// variables
const browserWidth = window.innerWidth;
//breakpoints
const sm = 640;
const md = 768;
const lg = 1024;
const xl = 1280;
const xxl = 1536;

/*#####################################
----------- nav bar expend ------------
#######################################*/
// elements
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll("#nav-list li");

// event listener
hamburger.addEventListener("click", function () {
  navList.classList.toggle("hidden");
});
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (browserWidth < lg) {
      navList.classList.add("hidden");
    }
  });
});

/*###########################################
----------- project modal expend ------------
#############################################*/
// Element
// const vapeEcommerceUi = document.getElementById("vape-ecommerce-ui");
// const vapeEcommerceUiModal = vapeEcommerceUi.querySelector(".modal");
// vapeEcommerceUi.addEventListener("click", (e) => {
//   vapeEcommerceUiModal.classList.toggle("hidden");
// });
// vapeEcommerceUiModal
//   .querySelector(".modal-wrapper")
//   .addEventListener("click", (e) => {
//     e.stopImmediatePropagation();
//   });

// vapeEcommerceUiModal
//   .querySelector(".modal-close-btn")
//   .addEventListener("click", (e) => {
//     vapeEcommerceUiModal.classList.toggle("hidden");
//     console.log("clicked");
//   });
