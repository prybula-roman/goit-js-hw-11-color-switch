import { colors } from "./colors.js";
import { randomIntegerFromInterval } from "./funcRand.js";
console.log(randomIntegerFromInterval);
// colors.forEach((element) => {
//   console.log(element);
// });
const bodyItem = document.querySelector("body");
//console.dir(bodyItem);
//let clr = rgb(255, 255, 255);
//let clr = "rgb(0, 0, 0)";
//const colorAtr = bodyItem.setAttribute("style", `background:${clr}`);
//bodyItem.style.backgroundColor = clr;
const butStart = document.querySelector('button[data-action="start"]');
const butStop = document.querySelector('button[data-action="stop"]');
//console.dir(butStart);
//console.dir(butStop);
butStart.addEventListener("click", (e) => {
  //console.log("clicked 'START'");
  //console.log(colors.length);
  const rez = randomIntegerFromInterval(0, colors.length);
  console.log(rez);
  bodyItem.style.backgroundColor = colors[rez];
});

butStop.addEventListener("click", (e) => {
  console.log("clicked 'STOP'");
});
