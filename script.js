let body = document.querySelector("body");
let toggle = document.querySelector(".toggler-main");
let top_bg = document.querySelector(".bg");
let main_headers = document.querySelectorAll(".header--heading");
let cards = document.querySelectorAll(".card");
let smallCards = document.querySelectorAll(".wide-card");
let texts = document.querySelectorAll(".Followers-count");
let circle = document.querySelector(".circle");

let Theme = "light";

function toDark() {
  body.style.backgroundColor = "hsl(230, 17%, 14%)";
  top_bg.style.backgroundColor = "hsl(232, 19%, 15%)";
  toggle.style.background =
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  circle.style.transform = "translate(20%, -50%)";
  circle.style.backgroundColor = "hsl(232, 19%, 15%)";
  for (const i of main_headers) {
    i.style.color = "white";
  }
  for (const i of cards) {
    i.style.backgroundColor = "hsl(228, 28%, 20%)";
  }
  for (const i of smallCards) {
    i.style.backgroundColor = "hsl(228, 28%, 20%)";
  }
  for (const i of texts) {
    i.style.color = "white";
  }
}

function toLight() {
  body.style.backgroundColor = "white";
  top_bg.style.backgroundColor = "hsla(227, 47%, 96%, 0.5)";
  toggle.style.background = "hsl(230, 22%, 74%)";
  circle.style.transform = "translate(1.58rem, -50%)";
  circle.style.backgroundColor = "rgb(233, 233, 233)";
  //   for (const i of main_headers) {
  //     i.style.color = "white";
  //   }
  document.querySelector("#heading-1").style.color = "black";
  document.querySelector(".Today-header").style.color = "hsl(228, 12%, 44%)";
  for (const i of cards) {
    i.style.backgroundColor = "hsl(227, 47%, 96%)";
  }
  for (const i of smallCards) {
    i.style.backgroundColor = "hsl(227, 47%, 96%)";
  }
  for (const i of texts) {
    i.style.color = "black";
  }
}

toggle.addEventListener("click", function () {
  if (Theme == "light") {
    toDark();
    Theme = "dark";
  } else {
    toLight();
    Theme = "light";
  }
});
