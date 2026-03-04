const loginBtn = document.getElementById("submit")
const loginFirstName = document.getElementById("fname")
const loginEmail = document.getElementById("email")
const loginPassword = document.getElementById("password")
const loginMessage = document.getElementById("message")


const namePattern = /^[A-Za-z]{2,}$/;
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


loginBtn.addEventListener("click", function (event) {
    event.preventDefault(); // this stops form refreshing

    const inputs = [loginFirstName, loginEmail, loginPassword];
    let allFilled = true;


    for (let input of inputs) {
        if (input.value.trim() === "") {
            loginMessage.textContent = "Please fill all fields";
            loginMessage.style.color = "red";
            allFilled = false;
            break;
        }
    }

    if (!allFilled) return;

    const fname = loginFirstName.value.trim();
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();;

    if (!fname || !email || !password) {
        loginMessage.textContent = "Please fill in all the fields";
        loginMessage.style.color = "red";
        return;
    }



    if (!namePattern.test(fname)) {
        loginMessage.textContent = "Username must be at least 2 letters and have only letters";
        loginMessage.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        loginMessage.textContent = "Please enter a valid email address";
        loginMessage.style.color = "red";
        return;
    }

    if (!passwordPattern.test(password)) {
        loginMessage.textContent = "Password must be 8 or more chars, have uppercase, lowercase, and a number";
        loginMessage.style.color = "red";
        return;


    }
    loginMessage.textContent = "All inputs are valid!";
    loginMessage.style.color = "green";

});


const inputs = [loginFirstName, loginEmail, loginPassword];

for (let input of inputs) {
    input.addEventListener("input", function () {
        loginMessage.textContent = "";
    });
}


loginFirstName.addEventListener("blur", function () {
    if (!namePattern.test(loginFirstName.value.trim())) {
        loginMessage.textContent = "Username must be at least 2 letters and only letters";
        loginMessage.style.color = "red";
    }
});

loginEmail.addEventListener("blur", function () {
    if (!emailPattern.test(loginEmail.value.trim())) {
        loginMessage.textContent = "Please enter a valid email address";
        loginMessage.style.color = "red";
    }
});

loginPassword.addEventListener("blur", function () {
    if (!passwordPattern.test(loginPassword.value.trim())) {
        loginMessage.textContent = "Password must be 8 characters or more, have uppercase, lowercase, and a number";
        loginMessage.style.color = "red";
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




