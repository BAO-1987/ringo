// import {gsap} from "gsap";

// let menuItem = document.querySelectorAll(".advantage__item");
// let menuImage = document.querySelectorAll(".advantage__box");

// // adding eventListeners to all the menuItems.
// for (let i = 0; i < 5; i++) {
//   //   image reveal animation
//   const animation = gsap.to(menuImage[i], {
//     opacity: 1,
//     duration: 0.2,
//     // scale: 1,
//     ease: "ease-in-out"
//   });

//   menuItem[i].addEventListener("mouseenter", () => animation.play());
//   menuItem[i].addEventListener("mouseleave", () => animation.reverse());

//   //   initialization
//   animation.reverse();
// }

// //   to move image along with cursor
// function moveText(e) {GSDevTools
//   gsap.to([...menuImage], {
//     css: {
//       left: e.pageX + 50,
//       top: e.pageY,
//     },
//     duration: 0.3,
//   });
// }

// menuItem.forEach((el) => {
//   el.addEventListener("mousemove", moveText);
// });
