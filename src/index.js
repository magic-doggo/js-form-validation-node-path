
import checkEmail from "/src/checkEmail.js";
import checkZip from "./checkZip";
import checkPasswords from "./checkPasswords";

window.onload = () => {
    document.getElementById("email").oninput = checkEmail;
    document.getElementById("zipcode").oninput = checkZip;
    document.getElementById("repeat-password").oninput = checkPasswords;
    document.getElementById("password").oninput = checkPasswords;
}
