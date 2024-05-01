function checkEmail() {
    const constraints = ["^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", 'email must use format "alex@alex.alex"'];
    const email = document.getElementById("email");

    const constraint = new RegExp(constraints[0], "");
    console.log(constraint)

    console.log(constraint.test(email.value))
    console.log(email.value)
    if (constraint.test(email.value)) {
        email.setCustomValidity("");
    }
    else {
        email.setCustomValidity(constraints[1])
    }
}

export default checkEmail;