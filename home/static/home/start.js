document.addEventListener("DOMContentLoaded", () => {
  const menuHeader1 = document.querySelector(".header1");
  const menuHeader2 = document.querySelector(".header2");

  menuHeader1.addEventListener("click", () => {
    const contents1 = document.querySelector(".contents1");
    const contents2 = document.querySelector(".contents2");

    if (!contents1.classList.contains("show")) {
      contents2.classList.remove("show");
    }
    contents1.classList.toggle("show");
  });

  menuHeader2.addEventListener("click", () => {
    const contents1 = document.querySelector(".contents1");
    const contents2 = document.querySelector(".contents2");

    if (!contents2.classList.contains("show")) {
      contents1.classList.remove("show");
    }
    contents2.classList.toggle("show");
  });
});
const result = document.querySelector(".result");
result.addEventListener("click", () => {
  const table = document.querySelector(".table");

  if (!table.classList.contains("show")) {
    table.classList.remove("show");
  }
  table.classList.toggle("show");
});

// *******************************
//  document.addEventListener('DOMContentLoaded', () => {
//       const MenuHeader = document.querySelectorAll('.menu-header');

//       MenuHeader.forEach(item => {
//           item.addEventListener('click', () => {
//               const subContent = item.nextElementSibling;
//               const SubmitReset = document.querySelector('.submit-reset');
//               if (subContent && subContent.classList.contains('sub-content') && SubmitReset.classList.contains('submit-reset')) {
//                   subContent.classList.toggle('show');
//                   SubmitReset.classList.toggle('show');
//               }
//           });
//       });

//   });
// **************************************
// const next = document.querySelector('.mantaghe');
// next.addEventListener("click",()=>{
//     let link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'start2.css';
//     document.getElementsByTagName('HEAD')[0].appendChild(link);
// })
// .......................................................................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const next2 = document.querySelector('.khak' );
// next2.addEventListener("click",()=>{
//     alert("hi2")
//     let link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'start2.css';
//     document.getElementsByTagName('HEAD')[0].appendChild(link);
// })
// const next3 = document.querySelector('.natayej' );
// next3.addEventListener("click",()=>{
//     alert("hi")
//     let link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'start3.css';
//     document.getElementsByTagName('HEAD')[0].appendChild(link);
// })
// const next4 = document.querySelector('.daryaft' );
// next4.addEventListener("click",()=>{
//     alert("hi4")
//     let link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'start5.css';
//     document.getElementsByTagName('HEAD')[0].appendChild(link);
// })
