let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");



input.addEventListener("input", onInputChange);

function onInputChange(event) {
  input = event.currentTarget.value;
  
    if (input === "") { output.innerText = "Anonymous" }
    else { output.innerText = input.trim() };
    console.log(output);
    console.log(input);
}


