let generatedOTP;
let userRole;

function login() {
    let username = document.getElementById("username").value;

    if (username === "admin") {
        userRole = "Admin";
    } else if (username === "hr") {
        userRole = "HR";
    } else {
        userRole = "Developer";
    }

    generatedOTP = Math.floor(1000 + Math.random() * 9000);
    alert("Your OTP is: " + generatedOTP);

    document.getElementById("loginCard").classList.add("hidden");
    document.getElementById("otpCard").classList.remove("hidden");
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otpInput").value;

    if (enteredOTP == generatedOTP) {
        document.getElementById("otpCard").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");

        if (userRole === "Admin") {
            document.getElementById("roleText").innerText = "Welcome Admin! Full Access Granted.";
        } else if (userRole === "HR") {
            document.getElementById("roleText").innerText = "Welcome HR! Access to HR Systems.";
        } else {
            document.getElementById("roleText").innerText = "Welcome Developer! Access to Dev Tools.";
        }
    } else {
        alert(" Wrong OTP!");
    }
}

function showSection(section) {
    document.getElementById("security").classList.add("hidden");
    document.getElementById("physical").classList.add("hidden");

    document.getElementById(section).classList.remove("hidden");
}

function logout() {
    location.reload();
}