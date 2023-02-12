"use strict";
// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************
const carouselBlock = document.querySelector(".carousel-block");

let viewPortWidthVar = window.matchMedia("(max-width:767px )");

//Function which will effect in screen change:

function eventsChange(x) {
  if (x.matches) {
    carouselBlock.innerHTML = "";
    //if media matches
    const smallScreenCarouselHtml = `<div
    id="carouselExampleIndicators"
    class="carousel slide aboutUs-carousel"
    data-bs-ride="true"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="miniCarao-1.jpg"
          class="d-block w-100 carousel-image"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="miniCarao-2.jpg"
          class="d-block w-100 carousel-image"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="miniCarao-3.jpg"
          class="d-block w-100 carousel-image"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;
    carouselBlock.insertAdjacentHTML("afterbegin", smallScreenCarouselHtml);
  } else {
    carouselBlock.innerHTML = "";
    const largeScreenCarouselHtml = `<div
    id="carouselExampleIndicators"
    class="carousel slide aboutUs-carousel"
    data-bs-ride="true"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="joincarousel2.jpg"
          class="d-block w-100 carousel-image"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="joincarousel3.jpg"
          class="d-block w-100 carousel-image"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="joincarousel1.jpg"
          class="d-block w-100 carousel-image"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;
    carouselBlock.insertAdjacentHTML("afterbegin", largeScreenCarouselHtml);
  }
}

eventsChange(viewPortWidthVar);
viewPortWidthVar.addEventListener("change", eventsChange); //Will change event automatically , upon size
// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************
//**
//**
//**********Mobile Hamburger Nav toggle ******* */
const menu = document.querySelector("#MOid-top-nav-mobile");
const menuLinks = document.querySelector(".MO-top-nav-ul");
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  navbar.classList.toggle("stickyNavbar1");
  if (window.scrollY < 81) {
    hamburgerBars.forEach(function (tracker) {
      tracker.classList.toggle("colorBlack");
      logo.classList.toggle("logo-whiteNav-trigger");
    });
  }
};

menu.addEventListener("click", mobileMenu);

//********************************************* */
//***********STICKY NAVBAR****************** */
const aboutUsHeroSection = document.querySelector(".aboutUs-hero-section"); //*CHANGEABLE */
const navbar = document.querySelector(".MO-top-nav");
const logo = document.getElementById("MOid-top-nav-logo");
const navbarItemLinks = document.querySelectorAll(".MO-top-nav-ul-li-a");
const hamburgerBars = document.querySelectorAll(".MO-top-nav-toggle-bar");
const stickyNav = (entries, observers) => {
  const [e1] = entries;
  if (e1.isIntersecting) {
    navbar.classList.remove("stickyNavbar");
    logo.classList.remove("logo-whiteNav-trigger");
    navbarItemLinks.forEach(function (tracker) {
      tracker.classList.remove("stickyNavbarText");
    });
    hamburgerBars.forEach(function (tracker) {
      tracker.classList.remove("colorBlack");
    });
  } else {
    navbar.classList.add("stickyNavbar");
    logo.classList.add("logo-whiteNav-trigger");
    navbarItemLinks.forEach(function (tracker) {
      tracker.classList.add("stickyNavbarText");
    });
    hamburgerBars.forEach(function (tracker) {
      tracker.classList.add("colorBlack");
    });
  }
};

const observer2 = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.8,
});

observer2.observe(aboutUsHeroSection);

//*********************************************** */

const extraStoryP = document.querySelectorAll(".story-para-ex");
const storyBtn = document.querySelector(".story-btn");

storyBtn.addEventListener("click", function () {
  if (storyBtn.textContent == "read less-") {
    storyBtn.textContent = "read more+";
  } else {
    storyBtn.textContent = "read less-";
  }
  extraStoryP.forEach(function (tracker) {
    tracker.classList.toggle("hidden");
  });
});

//************************************************ */

//***********HOVER EFFECT ************/
const brandImg = document.querySelectorAll(".test-brand");
// const brandLink = document.querySelectorAll(".test-brand-link");
const brandMiniBlock = document.querySelectorAll(".mini-brand-logo-block");

brandMiniBlock.forEach(function (tracker, num) {
  tracker.addEventListener("mouseover", () => {
    brandImg[num].classList.add("test-brandZ");
    // brandLink[num].classList.add("test-brandZ");
  });
  tracker.addEventListener("mouseout", () => {
    brandImg[num].classList.remove("test-brandZ");
    // brandLink[num].classList.remove("test-brandZ");
  });
});
//*********************************** */
