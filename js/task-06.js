let input = document.querySelector("input");
const validLength = parseInt(input.getAttribute("data-length"))
input.addEventListener("blur", inputChange);
function inputChange(event) {
    if (event.currentTarget.value.length === validLength) {
       event.currentTarget.classList.add('valid')
    event.currentTarget.classList.remove('invalid')
    }
    else {
event.currentTarget.classList.add('invalid')
    event.currentTarget.classList.remove('valid')
    }
}


