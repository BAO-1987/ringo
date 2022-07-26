import SmoothScroll from "smooth-scroll";

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  header: '[data-scroll-header]'
});
