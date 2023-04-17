let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let phone = document.getElementById("phoneNumber")
let password1 = document.getElementById("password");
let password2 = document.getElementById("confirmPW");
let errorMessage = document.getElementById("error-message")

let inputs = [firstName, lastName, email, phone, password1, password2]

inputs.forEach((item) => {
    item.addEventListener("focusin", () => {
        errorMessage.textContent = '';
    })
})

const submit = (e) => {
    e.preventDefault();
    if (password1.value !== password2.value){
        errorMessage.textContent = "*Passwords do not match";
        password1.classList.add("error");
        password2.classList.add("error");
        return;
    }
    if (firstName.value.length < 2){
        errorMessage.textContent = "Name must be at least three characters";
        firstName.classList.add("error");
        return;
    }
    if (lastName.value.length < 2){
        errorMessage.textContent = "Name must be at least three characters";
        lastName.classList.add("error");
        return;
    }
    if (!phone.value.match(/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
        )
    ) {
        phone.classList.add("error");
        errorMessage.textContent = "Phone number needs to be 10 numbers";
        return;
    }
    if (password1.value.length < 8){
        password1.classList.add("error");
        errorMessage.textContent = "Password must be at least 8 characters";
        return;
    }
    if (password2.value.length < 8){
        password2.classList.add("error");
        errorMessage.textContent = "Password must be at least 8 characters";
    }
    e.currentTarget.submit();
    errorMessage.textContent = "Form submitted successfully";
}

let form = document.getElementById("account-info-form");
form.addEventListener("submit", submit);