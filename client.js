function validation() {
    if (document.formfill.Name.value == "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    } else if (document.formfill.Name.value.length < 6) {
        document.getElementById("result").innerHTML = "at least six letters*";
        return false;
    } else if (document.formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    } else if (document.formfill.password.value == "") {
        document.getElementById("result").innerHTML = "Enter your password";
        return false;
    } else if (document.formfill.password.value.length < 6) {
        document.getElementById("result").innerHTML = "password must be 6 characters";
        return false;
    } else if (document.formfill.cpassword.value == "") {
        document.getElementById("result").innerHTML = "Enter confirm password";
        return false;
    } else if (document.formfill.password.value !== document.formfill.cpassword.value) {
        document.getElementById("result").innerHTML = "passwords don't match";
        return false;
    } else {
        document.getElementById('popup').classList.add("open-slide");
        return false;
    }
}
function closeslide(){
   popup.classList.remove("open-slide")
}