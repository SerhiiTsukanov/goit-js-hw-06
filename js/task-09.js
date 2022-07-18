const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");
changeColor.addEventListener("click", changeBackgroundColor);
console.dir(color);
function changeBackgroundColor() {
  
  color.style.backgroundColor = getRandomHexColor;
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
