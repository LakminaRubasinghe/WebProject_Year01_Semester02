let emaillField = document.getElementById("email");
let emailError = document.getElementById("email-error");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail() {
    if (!emaillField.value.match(emailRegex)) {
        emailError.innerHTML = "Please enter a valid email address";
        emaillField.style.borderBottom = "5px solid";
        emaillField.style.borderBottomColor = "red";
        return false;
    }
    emailError.innerHTML = "";
    emaillField.style.borderBottom = "5px solid";
    emaillField.style.borderBottomColor = "green";
    return true;
}


let nameField = document.getElementById("name");
let nameError = document.getElementById("name-error");
function validateName() {
    if (nameField.value.length < 3) {
        nameError.innerHTML = "Your name must be at least 3 characters";
        nameField.style.borderBottom = "5px solid";
        nameField.style.borderBottomColor = "red";
        return false;
    }
    nameError.innerHTML = "";
    nameField.style.borderBottom = "5px solid";
    nameField.style.borderBottomColor = "green";
    return true;
}


let messageField = document.getElementById("message");
let messageError = document.getElementById("message-error");
function validateMessage() {
    if (messageField.value.length < 10) {
        messageError.innerHTML = "Your message must be at least 10 characters";
        messageField.style.borderBottom = "5px solid";
        messageField.style.borderBottomColor = "red";
        return false;
    }
    messageError.innerHTML = "";
    messageField.style.borderBottom = "5px solid";
    messageField.style.borderBottomColor = "green";
    return true;
}


function validateForm() {
    if (!validateEmail() || !validateName() || !validateMessage()) {
        alert("Please fix the errors in the form");
        return false;
    }
    alert("Your responce has been submitted successfully");
    return true;
}


function timeUpadator() {
    const times = new Date();
    document.getElementById("timeNow").textContent = times.toLocaleTimeString();
}
setInterval(timeUpadator, 1000);
window.onload = timeUpadator;