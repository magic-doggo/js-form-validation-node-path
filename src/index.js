
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