// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const body = document.querySelector(".body");
// const changeColor = document.querySelector(".change-color");
// const color = document.querySelector(".color");
// changeColor.addEventListener("click", changeBackgroundColor);
// console.dir(color);
// function changeBackgroundColor() {
//   const newColor = getRandomHexColor()
//   body.style.background = newColor;
//   color.textContent = `${newColor}`;

// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
let color = document.querySelector(".color");
button.addEventListener("click", changeColor);
function changeColor() {
  const newColor = getRandomHexColor()
  body.style.backgroundColor = newColor;
  color.textContent = `${newColor}`;
}