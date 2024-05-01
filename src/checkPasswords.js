function checkPasswords() {
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeat-password");
    const constraints = [".{5,}", "Password must have at least 5 characters"];
    const constraint = new RegExp(constraints[0], "");
    const passwordError = document.getElementById("password-error");
    const repeatPasswordError = document.getElementById("repeat-password-error");
    if (password.value == "" && repeatPassword.value == "") {
        passwordError.innerText = "Password must not be empty";
        repeatPasswordError.innerText = "Password must not be empty";
        return false;
    } else if (password.value === repeatPassword.value && constraint.test(password.value)) {
        passwordError.innerText = "";
        repeatPasswordError.innerText = "";
        return true;
    } else if (password.value != repeatPassword.value) {
        passwordError.innerText = "The passwords do not match!";
        repeatPasswordError.innerText = "The passwords do not match!";
        return false;
    } else if (!constraint.test(password.value)) {
        passwordError.innerText = constraints[1];
        repeatPasswordError.innerText = constraints[1];
        return false;
    } else if (!constraint.test(repeatPassword.value)) {
        // repeatPassword.setCustomValidity(constraints[1]);
        repeatPasswordError.innerText = constraints[1];
        passwordError.innerText = constraints[1];
        return false;
    }
    else {
        password.setCustomValidity("You should not be seeing this error?!")
        return false;
    }
}

export default checkPasswords;