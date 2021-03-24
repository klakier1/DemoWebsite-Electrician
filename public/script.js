/**
 * Global constants
 */
const _header = document.querySelector("header");
const _navBar = document.querySelector("#nav-container");
const _sticky = _header.offsetTop;
const _navBurger = document.querySelector(".nav-burger");
const _navList = document.querySelector("#nav-container .nav-ul-container ul");
const _navListLinks = document.querySelectorAll(
  "#nav-container .nav-ul-container ul li a"
);
const _navListItems = document.querySelectorAll(
  "#nav-container .nav-ul-container ul li"
);
const _offerBrands = document.querySelector(".brands");

//remove transition at the end of transition
// !prevents navList hopping on window resize
_navList.addEventListener("transitionend", () => {
  _navList.style.transition = "none";
});

_navListLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const isOpen = _navList.classList.contains("nav-slide");
    if (isOpen) _navBurger.click();
  });
});

/**
 * nabBar animation
 */
_navBurger.addEventListener("click", () => {
  //check if slide is open
  const isOpen = _navList.classList.contains("nav-slide");

  //set transition
  _navList.style.transition = "transform 0.3s ease-in-out";

  //toggle slide
  _navList.classList.toggle("nav-slide");

  //toggle burger
  _navBurger.classList.toggle("nav-burger-toggle");

  //set animations for list items
  _navListItems.forEach((item, index) => {
    //restart animation trick
    item.style.animation = "none";
    item.offsetHeight; /* trigger reflow */
    item.style.animation = null;

    if (!isOpen) {
      //as lower index as longer delay
      const delay = index / 6;
      item.style.animation = `nav-list-animation 0.4s 1 forwards ease-out ${delay}s normal`;
    } else {
      item.style.animation = `nav-list-animation 0.4s 1 ease-in 0s reverse`;
    }
  });
});
