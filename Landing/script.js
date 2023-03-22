let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let bushes = document.getElementById("bushes");
let headed = document.querySelector("header");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1 + "px";
  bushes.style.top = value * 0.25 + "px";
  headed.style.top = value * 0.5 + "px";
});
console.log(4)