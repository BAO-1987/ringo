//  import gsap from "gsap"

// // // gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// // // ScrollSmoother.create ({
// // //   wrapper: "#smooth-wrapper",
// // //   content: "#smooth-content",
// // //   smooth: 2,
// // //   effects: true
// // // })

// // // // ScrollTrigger.create ({
// // // //   pin: ".way__item",
// // // //   start: "top center",
// // // //   end: "+300px",
// // // //   markers: true
// // // // })

// // gsap.registerPlugin(TextPlugin);


// // TweenLite.to(".title", 5, {
// //   delay: 1.5,
// //   scrambleText: {
// //     // text: "I sure hope this works for you.",
// //     rightToLeft: true,
// //     chars: "lowercase"
// //   }
// // })


// import gsap from "gsap";
// import GSDevTools from '../vendor/GSDevTools.js';

//  gsap.registerPlugin(SplitText);
// let split;
// let animation = gsap.timeline({});

// function init() {
//   gsap.set(".container", {
//     autoAlpha: 1
//   })
//   split = new SplitText("#title", {
//     type: "chars"
//   })
//   animation.from(split.chars, {
//     opacity: 0,
//     y: 50,
//     ease: "back(4)",
//     stagger: {
//       from: "end", //try "center" and "edges"
//       each: 0.05
//     }
//   })
//   GSDevTools.create({
//     animation: animation
//   })
// };

// window.addEventListener("load", init);
