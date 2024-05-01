function checkPasswords() {
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeat-password");
    const constraints = [".{5,}", "Password must have at least 5 characters"];
    const constraint = new RegExp(constraints[0], "");
    console.log(constraint.test(password.value))
    if (password.value === repeatPassword.value && constraint.test(password.value)) {
        repeatPassword.setCustomValidity("");
        password.setCustomValidity("");
    } else if (password.value != repeatPassword.value) {
        console.log("pass aint matchin")
        repeatPassword.setCustomValidity("The passwords do not match!");
        password.setCustomValidity("The passwords do not match!");
    } else if (!constraint.test(password.value)) {
        console.log("password too short")
        password.setCustomValidity(constraints[1]);
    } else if (!constraint.test(repeatPassword.value)) {
        console.log("repeat passw too short")
        repeatPassword.setCustomValidity(constraints[1]);
    }
    else {
        password.setCustomValidity("You should not be seeing this error?!")
    }
    


    console.log(password.value, repeatPassword.value)
}

export default checkPasswords;