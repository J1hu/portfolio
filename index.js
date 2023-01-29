const navBar = document.getElementById("nav");
window.onscroll = function () {
    if (window.scrollY > 20) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
};

const navMenu = document.getElementById("burger-nav");
const burger = document.getElementById("burger");
const navActiveItem = document.getElementById("nav-active-item");
const closeNav = document.getElementById("close");

burger.addEventListener("click", () => {
    navMenu.classList.remove("not-active");
    burger.classList.add("not-active");
});

navActiveItem.addEventListener("click", () => {
    navMenu.classList.add("not-active");
    burger.classList.remove("not-active");
});

closeNav.addEventListener("click", () => {
    navMenu.classList.add("not-active");
});