// import JustValidate from 'just-validate';
// import Inputmask from "inputmask";


// console.log('Init!');

// // inputmask
// const formBtn = document.querySelector('.form__btn');
// const form = document.querySelector('.form');
// const telSelector = form.querySelector('input[type="tel"]');
// const inputMask = new Inputmask('+380 99-999-99-99');
// inputMask.mask(telSelector);

// const validation = new JustValidate('.form',);

// validation

//   .addField('.input-name', [{
//       rule: 'minLength',
//       value: 3,
//       errorMessage: 'Введіть не менше трьох букв!'
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//       errorMessage: 'Введіть не більше тридцяти букв!'
//     },
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Введіть імя!'
//     }
//   ])
//   //   .addField('.form__label--text', [{
//   //     validator: (value) => {
//   //       return value[0] === '!';
//   //     },
//   //   },
//   // ])
//   .addField('#consent_checkbox', [{
//     rule: 'required',
//     errorMessage: 'Ви не надали згоду на оброку своїх персональних даних'
//   }, ])

//   .addField('.input-file', [{
//       rule: 'minFilesCount',
//       value: 1,
//       errorMessage: 'Ви не прикріпили файл'
//     },
//     {
//       rule: 'maxFilesCount',
//       value: 3,
//        errorMessage: 'Максимально 3 файли'
//     },
//   ])

//   .addField('.input-tel', [{
//       rule: 'required',
//       value: true,
//       errorMessage: "Телефон обов'язковий",
//     },
//     {
//       rule: 'function',
//       validator: function () {
//         const phone = telSelector.inputmask.unmaskedvalue();
//         return phone.length === 9;
//       },
//       errorMessage: 'Введіть коректний номер телефону',
//     },
//   ])

//   .onSuccess((event) => {
//     console.log('Validation passes and form submitted', event);

//     let formData = new FormData(event.target);

//     console.log(...formData);

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log('Отправлено');
//         }
//       }
//     }

//     xhr.open('POST', 'mail.php', true);
//     xhr.send(formData);

//     event.target.reset();
//   });


