function checkPasswords() {
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeat-password");
    const constraints = [".{5,}", "Password must have at least 5 characters"];
    const constraint = new RegExp(constraints[0], "");
    const passwordError = document.getElementById("password-error");
    const repeatPasswordError = document.getElementById("repeat-password-error");
    if (password.value === repeatPassword.value && constraint.test(password.value)) {
        // repeatPassword.setCustomValidity("");
        // password.setCustomValidity("");
        passwordError.innerText = "";
        repeatPasswordError.innerText = "";
    } else if (password.value != repeatPassword.value) {
        console.log("pass aint matchin")
        // repeatPassword.setCustomValidity("The passwords do not match!");
        // password.setCustomValidity("The passwords do not match!");
        passwordError.innerText = "The passwords do not match!";
        repeatPasswordError.innerText = "The passwords do not match!";
    } else if (!constraint.test(password.value)) {
        // password.setCustomValidity(constraints[1]);
        passwordError.innerText = constraints[1];
        repeatPasswordError.innerText = constraints[1];
    } else if (!constraint.test(repeatPassword.value)) {
        // repeatPassword.setCustomValidity(constraints[1]);
        repeatPasswordError.innerText = constraints[1];
        passwordError.innerText = constraints[1];
    }
    else {
        password.setCustomValidity("You should not be seeing this error?!")
    }
}

export default checkPasswords;