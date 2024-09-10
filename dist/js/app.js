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
function showModal(modalCtx) {
  const modalbtn = document.querySelector(`${modalCtx} .modal-open`);
  const modal = document.querySelector(`${modalCtx} .modal`);

  modalbtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  modal.querySelector(".modal-close-btn").addEventListener("click", (e) => {
    modal.classList.toggle("hidden");
  });
}
showModal("#vape-ecommerce-ui");
showModal("#gutim");
showModal("#medi");
showModal("#hecto");
showModal("#modern-portfolio-ui");
showModal("#pm-dashboard");

/*--------------------------------
---> project showcase tabs
----------------------------------*/
const tabRef = document.getElementById("project");
const tabBtns = tabRef.querySelectorAll(".tab-btn");
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    const tabData = tabBtn.dataset;
    let tabContent = document.getElementById(tabData.tab);

    const allTabContent = document.querySelectorAll(".tab-content");
    allTabContent.forEach((eachTabContent) => {
      eachTabContent.classList.add("hidden");
    });

    tabBtns.forEach((allTabBtn) => {
      allTabBtn.classList.remove("primary-gradient");
    });

    tabBtn.classList.add("primary-gradient");
    tabContent.classList.remove("hidden");
  });
});
