"use strict";
const menu = document.querySelector("#MOid-top-nav-mobile");
const menuLinks = document.querySelector(".MO-top-nav-ul");
const heroSection = document.querySelectorAll(".allSection");
const hamburgerBars = document.querySelectorAll(".MO-top-nav-toggle-bar");
const logo = document.getElementById("MOid-top-nav-logo");
//Display Mobile Menu
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

// const highlightFun1 = function (entries, observers) {
//   if (window.innerWidth > 960) {
//     const [e] = entries;

//     let x = e.target.getAttribute("id");
//     let y = document.querySelector(`#MOid-top-nav-ul-li-${x}`);

//     if (!e.isIntersecting) {
//       return;
//     } else {
//       if (x == "home") {
//         y.classList.add("highlight");
//         if (
//           document
//             .querySelector("#MOid-top-nav-ul-li-about")
//             .classList.contains("highlight")
//         ) {
//           document
//             .querySelector("#MOid-top-nav-ul-li-about")
//             .classList.remove("highlight");
//         }
//         if (
//           document
//             .querySelector("#MOid-top-nav-ul-li-services")
//             .classList.contains("highlight")
//         ) {
//           document
//             .querySelector("#MOid-top-nav-ul-li-services")
//             .classList.remove("highlight");
//         }
//       } else if (x == "about") {
//         y.classList.add("highlight");
//         if (
//           document
//             .querySelector("#MOid-top-nav-ul-li-home")
//             .classList.contains("highlight")
//         ) {
//           document
//             .querySelector("#MOid-top-nav-ul-li-home")
//             .classList.remove("highlight");
//         }
//         if (
//           document
//             .querySelector("#MOid-top-nav-ul-li-services")
//             .classList.contains("highlight")
//         ) {
//           document
//             .querySelector("#MOid-top-nav-ul-li-services")
//             .classList.remove("highlight");
//         }
//       } else if (x == "services") {
//         y.classList.add("highlight");
//         if (
//           document
//             .querySelector("#MOid-top-nav-ul-li-home")
//             .classList.contains("highlight")
//         ) {
//           document
//             .querySelector("#MOid-top-nav-ul-li-home")
//             .classList.remove("highlight");
//         }
//         if (
//           document
//             .querySelector("#MOid-top-nav-ul-li-about")
//             .classList.contains("highlight")
//         ) {
//           document
//             .querySelector("#MOid-top-nav-ul-li-about")
//             .classList.remove("highlight");
//         }
//       }
//     }
//   } else {
//     if (
//       document
//         .querySelector("#MOid-top-nav-ul-li-about")
//         .classList.contains("highlight")
//     ) {
//       document
//         .querySelector("#MOid-top-nav-ul-li-about")
//         .classList.remove("highlight");
//     }
//     if (
//       document
//         .querySelector("#MOid-top-nav-ul-li-home")
//         .classList.contains("highlight")
//     ) {
//       document
//         .querySelector("#MOid-top-nav-ul-li-home")
//         .classList.remove("highlight");
//     }
//     if (
//       document
//         .querySelector("#MOid-top-nav-ul-li-services")
//         .classList.contains("highlight")
//     ) {
//       document
//         .querySelector("#MOid-top-nav-ul-li-services")
//         .classList.remove("highlight");
//     }
//   }
// };
// const observer1 = new IntersectionObserver(highlightFun1, {
//   root: null,
//   threshold: 0.3,
// });

// heroSection.forEach(function (tracker) {
//   observer1.observe(tracker);
// });

const navItems = document.querySelectorAll(".MO-top-nav-ul-li-a");

navItems.forEach((tracker) => {
  tracker.addEventListener("click", function () {
    if (window.innerWidth <= 960) {
      mobileMenu();
    }
  });
});

const navbar = document.querySelector(".MO-top-nav");
const topMainSection = document.querySelector(".MO-heroZ");
const navbarItemLinks = document.querySelectorAll(".MO-top-nav-ul-li-a");
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

observer2.observe(topMainSection);

// *******************************************
const allSection2 = document.querySelectorAll(".allSection2");
if (window.innerWidth > 960) {
  const bottomFadeIn = function (entries, observers) {
    const [en] = entries;

    if (!en.isIntersecting) {
      return;
    } else {
      en.target.classList.remove("section--hidden");
      observer3.unobserve(en.target);
    }
  };
  const observer3 = new IntersectionObserver(bottomFadeIn, {
    root: null,
    threshold: 0.4,
  });

  allSection2.forEach((tracker) => {
    observer3.observe(tracker);
    tracker.classList.add("section--hidden");
  });
}
//******************************************* */

// ******************************************************
const imgData1 = document.querySelector(".img-data-src1");

const imgLoadEffect1 = function (entries, observers) {
  const [en] = entries;
  if (!en.isIntersecting) {
    return;
  } else {
    en.target.classList.add("og-img-0");

    en.target.classList.remove("blurEffect");

    observer4_1.unobserve(en.target);
  }
};
const observer4_1 = new IntersectionObserver(imgLoadEffect1, {
  root: null,
  threshold: 0.4,
});

observer4_1.observe(imgData1);
//**************************************** */
const imgData2 = document.querySelector(".img-data-src2");
let imgDataCounter = 1;
const servicesCards = document.querySelectorAll(".MO-services-card");
const imgLoadEffect2 = function (entries, observers) {
  const [en] = entries;
  if (!en.isIntersecting) {
    return;
  } else {
    en.target.classList.add(`og-img-${imgDataCounter}`);
    imgDataCounter++;
    imgData2.classList.remove("blurEffect");
    observer4_2.unobserve(en.target);
  }
};
const observer4_2 = new IntersectionObserver(imgLoadEffect2, {
  root: null,
  threshold: 0.4,
});

for (let i = 0; i < 4; i++) {
  observer4_2.observe(servicesCards[i]);
}
// **************************************
const imgData3 = document.querySelector(".img-data-src3");

const imgLoadEffect3 = function (entries, observers) {
  const [en] = entries;
  if (!en.isIntersecting) {
    return;
  } else {
    en.target.classList.add(`og-img-${imgDataCounter}`);
    imgDataCounter++;
    imgData3.classList.remove("blurEffect");
    observer4_3.unobserve(en.target);
  }
};
const observer4_3 = new IntersectionObserver(imgLoadEffect3, {
  root: null,
  threshold: 0.4,
});

for (let i = 4; i < 8; i++) {
  observer4_3.observe(servicesCards[i]);
}
//******************************************* */
const imgData4 = document.querySelector(".img-data-src4");

const imgLoadEffect4 = function (entries, observers) {
  const [en] = entries;
  if (!en.isIntersecting) {
    return;
  } else {
    en.target.classList.add(`og-img-${imgDataCounter}`);
    imgDataCounter++;
    imgData4.classList.remove("blurEffect");
    observer4_4.unobserve(en.target);
  }
};
const observer4_4 = new IntersectionObserver(imgLoadEffect4, {
  root: null,
  threshold: 0.4,
});

for (let i = 8; i < 12; i++) {
  observer4_4.observe(servicesCards[i]);
}
// ***************************************************
const imgData5 = document.querySelector(".img-data-src5");

const imgLoadEffect5 = function (entries, observers) {
  const [en] = entries;
  if (!en.isIntersecting) {
    return;
  } else {
    en.target.classList.add(`og-img-${imgDataCounter}`);
    imgDataCounter++;
    imgData5.classList.remove("blurEffect");
    observer4_5.unobserve(en.target);
  }
};
const observer4_5 = new IntersectionObserver(imgLoadEffect5, {
  root: null,
  threshold: 0.4,
});

for (let i = 12; i < 16; i++) {
  observer4_5.observe(servicesCards[i]);
}

// ***************
const randomServicesCard = document.querySelector(".MO-services-card-andra");
const imgLoadEffct5_1 = function (entries, observers) {
  const [en] = entries;
  if (!en.isIntersecting) {
    return;
  } else {
    randomServicesCard.classList.add("og-img-16");
    observer4_5_1.unobserve(en.target);
  }
};
const observer4_5_1 = new IntersectionObserver(imgLoadEffct5_1, {
  root: null,
  threshold: 0.4,
});
observer4_5_1.observe(randomServicesCard);
// **********************************
const imgdata6 = document.querySelector(".img-data-src6");
const imgLoadEffct6 = function (entries, observers) {
  const [en] = entries;
  if (!en.isIntersecting) {
    return;
  } else {
    en.target.classList.add("og-img-17");
    en.target.classList.remove("blurEffect");
    observer6.unobserve(en.target);
  }
};
const observer6 = new IntersectionObserver(imgLoadEffct6, {
  root: null,
  threshold: 0.4,
});

observer6.observe(imgdata6);

//******************************ROCKING HAND**************** */
const rockingHandBlock = document.getElementById("rocking-hand");
// const RHpsuedoPos = window.getComputedStyle(
//   document.querySelector(".rocking-hand"),
//   "::after"
// );

const rockingHandFun = (entries, observers) => {
  const [en] = entries;
  if (!en.isIntersecting) {
    rockingHandBlock.style.setProperty("--rhHeight", "0px");
    // RHpsuedoPos.height = "0px"; //Error
    // console.log(RHpsuedoPos.height);
    // setTimeout(() => {
    //   rockingHandImg.classList.add("hidden");
    // }, 500);
  } else {
    rockingHandBlock.style.setProperty("--rhHeight", "900px");
    // RHpsuedoPos.height = "900px"; //Error
    // console.log(RHpsuedoPos.height);
    // rockingHandImg.classList.remove("hidden");
    // setTimeout(() => {
    //   rockingHandImg.classList.remove("rocking-hand-transform");
    // }, 100);
  }
};

const rockObserver = new IntersectionObserver(rockingHandFun, {
  root: null,
  threshold: 0.4,
});

rockObserver.observe(rockingHandBlock);

// *****************************************************
