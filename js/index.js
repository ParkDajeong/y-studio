const header = document.querySelector("header");
const btnMenu = document.querySelectorAll(".toggle-menu");

AOS.init({
  duration: 1000,
});

// Menu-Modal Toggle Event 
btnMenu.forEach((item, i) => {
  item.addEventListener("click", () => header.classList.toggle("on"));
});

// Header scroll Event
window.addEventListener("scroll", () => {
  if(window.scrollY >= 50) {
    if(header.classList.contains("active")) return;
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Main Visual - Swiper
const swiper = new Swiper(".main-visual", {
  loop: true,
  autoplay: {
    delay: 10000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".main-visual-btn-next",
    prevEl: ".main-visual-btn-prev",
  },
});