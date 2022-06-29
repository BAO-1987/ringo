import _vars from '../_vars';

import Swiper, {
  Navigation
} from 'swiper/bundle';

new Swiper(_vars.heroBanner, {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000,
  },

  navigation: {
    nextEl: '.banner-btn__next',
    prevEl: '.banner-btn__prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
