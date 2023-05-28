const navbar = document.getElementById("navbar");
const btn = document.querySelectorAll(".btn");
const menuBtn = document.getElementById("toggle-menu-btn");
const menu = document.getElementById("menu");

// Hide navbar on scroll

let prevPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentPos = window.pageYOffset;
  if (currentPos > prevPos) {
    navbar.style.top = "-110px";
  } else {
    navbar.style.top = "0";
  }
  prevPos = currentPos;
});

// Button animation

btn.forEach((bt) => {
  bt.addEventListener("mousemove", (e) => {
    const x = e.pageX - bt.offsetLeft;
    const y = e.pageY - bt.offsetTop;
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  });
});

// Slideshow

let slideIndex = 1;
showSlide(slideIndex);

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

arrowLeft.addEventListener("click", () => {
  showSlide((slideIndex -= 1));
});
arrowRight.addEventListener("click", () => {
  showSlide((slideIndex += 1));
});

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide-quote");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Auto slideshow

function showSlideAuto() {
  let i;
  let slides = document.getElementsByClassName("slide-quote");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlideAuto, 3000);
}

showSlideAuto();

// Toggle menu

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("toggle-menu");
});

// Mobile menu collapse on scroll

window.addEventListener("scroll", () => {
  if (menu.classList.contains("toggle-menu")) {
    menu.classList.toggle("toggle-menu");
  }
});
