import _vars from '../_vars';

import Swiper, {
  Navigation
} from 'swiper/bundle';



new Swiper(_vars.partnersSlider, {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  autoplay: {
  delay: 3000,
  },

  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev',
  },

  breakpoints: {

   430: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    580: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

      750: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

});
