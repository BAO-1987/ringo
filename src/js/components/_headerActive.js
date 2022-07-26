 const header = document?.querySelector('.header');

 window.addEventListener('scroll', () => {
   downHeader()
 })

 downHeader()

 function downHeader() {
   if (window.pageYOffset > 0) return header.classList.add('header--active');
   header.classList.remove('header--active');
 }
