
import checkEmail from "/src/checkEmail.js"

window.onload = () => {
    document.getElementById("email").oninput = checkEmail
}
