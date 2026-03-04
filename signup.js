const signupBtn = document.getElementById("submit")
const signupFirstName = document.getElementById("fname")
const signupEmail = document.getElementById("email")
const signupPassword = document.getElementById("password")
const signupMessage = document.getElementById("message")


const namePattern = /^[A-Za-z]{2,}$/;
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


signupBtn.addEventListener("click", function (event) {
    event.preventDefault(); // this stops form refreshing

    const inputs = [signupFirstName, signupEmail, signupPassword];
    let allFilled = true;


    for (let input of inputs) {
        if (input.value.trim() === "") {
            signupMessage.textContent = "Please fill all fields";
            signupMessage.style.color = "red";
            allFilled = false;
            break;
        }
    }

    if (!allFilled) return;

    const fname = signupFirstName.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();;

    if (!fname || !email || !password) {
        signupMessage.textContent = "Please fill in all the fields";
        signupMessage.style.color = "red";
        return;
    }



    if (!namePattern.test(fname)) {
        signupMessage.textContent = "Username must be at least 2 letters and have only letters";
        signupMessage.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        signupMessage.textContent = "Please enter a valid email address";
        signupMessage.style.color = "red";
        return;
    }

    if (!passwordPattern.test(password)) {
        signupMessage.textContent = "Password must be 8 or more chars, have uppercase, lowercase, and a number";
        signupMessage.style.color = "red";
        return;


    }
    signupMessage.textContent = "All inputs are valid!";
    signupMessage.style.color = "green";

});

const inputs = [signupFirstName, signupEmail, signupPassword];

for (let input of inputs) {
    input.addEventListener("input", function () {
        signupMessage.textContent = "";
    });
}


signupFirstName.addEventListener("blur", function () {
    if (!namePattern.test(signupFirstName.value.trim())) {
        signupMessage.textContent = "Username must be at least 2 letters and only letters";
        signupMessage.style.color = "red";
    }
});

signupEmail.addEventListener("blur", function () {
    if (!emailPattern.test(signupEmail.value.trim())) {
        signupMessage.textContent = "Please enter a valid email address";
        signupMessage.style.color = "red";
    }
});

signupPassword.addEventListener("blur", function () {
    if (!passwordPattern.test(signupPassword.value.trim())) {
        signupMessage.textContent = "Password must be 8 characters or more, have uppercase, lowercase, and a number";
        signupMessage.style.color = "red";
    }
});


for (let input of inputs) {
    input.addEventListener("focus", function () {
        input.style.borderColor = "blue";
    });
    input.addEventListener("blur", function () {
        input.style.borderColor = ""; 
    });
}




