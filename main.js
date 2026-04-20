const menuBtn = document.getElementById("menu-btn") ;
const navLinks = document.getElementById("nav__links") ;
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
})

const ScrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...ScrollRevealOption,
    origin:"right",
});

ScrollReveal().reveal(".header__content h1", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
    ...ScrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__stats", {
    ...ScrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
    ...ScrollRevealOption,
    origin:"left",
});

ScrollReveal().reveal(".about__content .section__header", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...ScrollRevealOption,
    delay: 1000,
    interval: 500,
});

ScrollReveal().reveal(".about__btn", {
    ...ScrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".program__card", {
    ...ScrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".service__image img", {
    ...ScrollRevealOption,
    origin:"right",
});

ScrollReveal().reveal(".service__content .section__header", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service__list li", {
    ...ScrollRevealOption,
    delay: 1000,
    interval: 500,
});

ScrollReveal().reveal(".service__btn", {
    ...ScrollRevealOption,
    delay: 2500,
});

//Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
  loop : true,
  grapCursor: true,
  SpaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
        sliderPerView: 1
    },
    769: {
        sliderPerView: 2
    },
    1024: {
        sliderPerView: 3
    }

  }

});