
import checkEmail from "/src/checkEmail.js";
import checkZip from "./checkZip";
import checkPasswords from "./checkPasswords";
import './style.css';

window.onload = () => {
    document.getElementById("email").oninput = checkEmail;
    document.getElementById("zipcode").oninput = checkZip;
    document.getElementById("repeat-password").oninput = checkPasswords;
    document.getElementById("password").oninput = checkPasswords;

    document.getElementById("email").onchange = checkEmail;
    document.getElementById("zipcode").onchange = checkZip;
    document.getElementById("repeat-password").onchange = checkPasswords;
    document.getElementById("password").onchange = checkPasswords;
}

const validate = document.getElementById("validate");
const submitError = document.getElementById("submit-error");
const highFive = document.getElementById("high-five")
function revalidate(event) {
    checkEmail();
    checkZip();
    checkPasswords();
    if (!checkEmail() || !checkZip() || !checkPasswords()) {
        highFive.innerText = "";
        event.preventDefault();
        submitError.innerText = "Try again after following the requirements above";
        return;
    }
    highFive.innerText = "High 5!";
}
validate.addEventListener("click", revalidate)