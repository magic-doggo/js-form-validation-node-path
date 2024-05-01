
import checkEmail from "/src/checkEmail.js";
import checkZip from "./checkZip";

window.onload = () => {
    document.getElementById("email").oninput = checkEmail;
    document.getElementById("zipcode").oninput = checkZip;
}
