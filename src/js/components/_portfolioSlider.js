import _vars from '../_vars';
import Swiper, {
  Navigation
} from 'swiper/bundle';


new Swiper(_vars.portfolioSlider, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 1000,
  },

  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev',
  },

  breakpoints: {
    500: {
      slidesPerView: 1,
    },

    590: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 2.5,
       spaceBetween: 10,
    },

    1640: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }

});
