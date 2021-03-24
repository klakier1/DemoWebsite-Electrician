import AddStyleOnScroll from "./AddStyleOnScroll.js";

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

const _animTime = 1;

new AddStyleOnScroll(
  ".wind-img img",
  `animation: fade-in-slide-up-right ${_animTime}s;`
);
new AddStyleOnScroll(
  ".wind-2",
  `animation: fade-in-slide-up-left ${_animTime}s;`
);
new AddStyleOnScroll(".wind-1", `animation: fade-in-slide-up ${_animTime}s;`);
new AddStyleOnScroll(
  ".whyus-text",
  `animation: fade-in-slide-up ${_animTime}s;`
);
new AddStyleOnScroll(
  ".whyus-card-1",
  `animation: fade-in-slide-up-right ${_animTime}s;`
);
new AddStyleOnScroll(
  ".whyus-card-2",
  `animation: fade-in-slide-up ${_animTime}s;`
);
new AddStyleOnScroll(
  ".whyus-card-3",
  `animation: fade-in-slide-up-left ${_animTime}s;`
);

new AddStyleOnScroll(
  ".service-card-1",
  `animation: fade-in-slide-up-right ${_animTime}s;`
);
new AddStyleOnScroll(
  ".service-card-2",
  `animation: fade-in-slide-up ${_animTime}s;`
);
new AddStyleOnScroll(
  ".service-card-3",
  `animation: fade-in-slide-up-left ${_animTime}s;`
);
new AddStyleOnScroll(
  ".service-card-4",
  `animation: fade-in-slide-up-right ${_animTime}s;`
);
new AddStyleOnScroll(
  ".service-card-5",
  `animation: fade-in-slide-up ${_animTime}s;`
);
new AddStyleOnScroll(
  ".service-card-6",
  `animation: fade-in-slide-up-left ${_animTime}s;`
);
new AddStyleOnScroll(
  ".contact-label",
  `animation: fade-in-slide-up ${_animTime}s;`
);
new AddStyleOnScroll(
  ".contact-info-container",
  `animation: fade-in-slide-up-right ${_animTime}s;`
);
new AddStyleOnScroll(
  ".bi-facebook",
  `animation: fade-in-slide-up-right ${_animTime}s;`
);
new AddStyleOnScroll(
  ".bi-twitter",
  `animation: fade-in-slide-up ${_animTime}s;`
);
new AddStyleOnScroll(
  ".bi-youtube",
  `animation: fade-in-slide-up-left ${_animTime}s;`
);
