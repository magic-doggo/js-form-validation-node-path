function checkZip() {
    const constraints = {
        ro: [
            "^\\d{6}$",
            "Romanian ZIPs must have 6 digits"
        ],
        fr: [
            "^(F-)?\\d{5}$",
            "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012"
        ],
        est: [
            "^\\d{5}$",
            "Estonian ZIPs must have 5 digits"
        ]
    };
    const country = document.getElementById("country").value;
    const ZIPField = document.getElementById("zipcode");

    const constraint = new RegExp(constraints[country][0], "");

    if (constraint.test(ZIPField.value)){
        ZIPField.setCustomValidity("");
    } else {
        ZIPField.setCustomValidity(constraints[country][1]);
    }
}

export default checkZip;