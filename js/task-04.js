
const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);
const incrementtBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementtBtn);
const counterRef = document.querySelector("#value");
console.log(counterRef);
let counterValue = (counterRef.textContent = 0);

decrementBtn.addEventListener("click", (event) => {
    counterValue += Number(decrementBtn.textContent)
counterRef.innerHTML = counterValue; 
});
 
incrementtBtn.addEventListener("click", (event) => {
    counterValue += Number(incrementtBtn.textContent)
counterRef.innerHTML = counterValue; 
});

