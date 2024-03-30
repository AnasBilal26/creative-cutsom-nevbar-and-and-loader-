// var menu = document.querySelector(".menu");
// var fullscreen = document.querySelector(".fullscreen");
// var ahsan = document.querySelector(".left");
// flag = 0;
// menu.addEventListener("click", function () {
//   if (flag == 0) {
//     ahsan.style.opacity = 0;
//     fullscreen.style.right = 0;
//     flag = 1;
//   } else {
//     ahsan.style.opacity = 1;
//     fullscreen.style.right = "-100%";
//     flag = 0;
//   }
// });
var menu = document.querySelector(".menu");
var fullscreen = document.querySelector(".fullscreen");
var ahsan = document.querySelector(".left");
var img = document.querySelector("img");
var fll = document.querySelector(".fll");
menu.addEventListener("click", function () {
  fullscreen.style.right = 0;
  ahsan.style.opacity = 0;
  fll.style.right = 0;
});
img.addEventListener("click", function () {
  fullscreen.style.right = "-100%";
  fll.style.right = "-100%";
  ahsan.style.opacity = 1;
});
fullscreen.addEventListener("click", function () {
  fullscreen.style.right = "-100%";
  fll.style.right = "-100%";
  ahsan.style.opacity = 1;
});
var loader = document.querySelector(".loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 3000);
