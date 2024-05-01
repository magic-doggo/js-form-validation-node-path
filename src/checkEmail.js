function checkEmail() {
    const constraints = ["^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", 'email must use format "alex@alex.alex"'];
    const email = document.getElementById("email");
    const constraint = new RegExp(constraints[0], "");
    const error = document.getElementById("email-error");
    if (constraint.test(email.value) && email.value != "") {
        error.innerText = "";
        return true;
    }
    else {
        // email.setCustomValidity(constraints[1])
        error.innerText = constraints[1];
        return false;
    }
}

export default checkEmail;