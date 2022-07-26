import {
  gsap
} from "gsap";

const item = document.querySelectorAll(".advantage__item");

item.forEach((el) => {
  const image = el.querySelector('.advantage__box')

  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, {
      opacity: 1,
      duration: 0.5,
      scale: 1,
      ease: "ease-in"
    })
  })

  el.addEventListener('mouseleave', (e) => {
    gsap.to(image, {
      opacity: 0
    })
  })

  el.addEventListener('mousemove', (e) => {
    gsap.set(image, {
      x: e.offsetX + 20,
       })
  })
})
