const input = document.querySelector("input");
const span = document.querySelector("#text");
console.log(input);
console.log(span);
input.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value;
    console.dir(input);
    
})
console.log(textEl.style.fontSize);
console.log(event.currentTarget.value);