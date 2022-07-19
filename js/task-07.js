const input = document.querySelector("input");
const span = document.querySelector("#text");
console.log(input);
console.log(span);
input.addEventListener("input", (event) => {
    const size = `${event.currentTarget.value}px`;
    text.style.fontSize = size;
   console.log(text.style.fontSize);
    
})

