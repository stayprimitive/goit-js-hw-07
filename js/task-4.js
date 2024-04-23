const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", fuSubmit);

function fuSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const emailInput = elements.email.value.trim();
    const passwordInput = elements.password.value.trim();

    const result = {
        email: emailInput,
        password: passwordInput,
    }

    if (emailInput.length < 1 || passwordInput < 1) {
        alert("All form fields must be filled in!");
    }

    console.log(result);
    event.target.reset();
}

