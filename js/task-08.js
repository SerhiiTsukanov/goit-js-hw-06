const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;
    if (email === "" || password === "") {
        alert('порожне поле!');
        form.reset();
        return
    }
    else {  
    const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            let data = { value, name };
       console.log('onFormSubmit -> name', name);
       console.log('onFormSubmit -> value', value);
      console.log(data);
    });
      form.reset();  
}
    
}