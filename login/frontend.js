const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");

// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Show or hide password
document.getElementById("togglePassword").addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.setAttribute("aria-label", "Hide password");
    } else {
        passwordInput.type = "password";
        this.setAttribute("aria-label", "Show password");
    }
});

// Clear error messages while typing
[emailInput, passwordInput].forEach(input => {
    input.addEventListener("input", function () {
        this.classList.remove("invalid");
        document.getElementById(this.id + "Error").textContent = "";
        feedback.textContent = "";
        feedback.className = "";
    });
});

// Frontend form validation
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });

    emailInput.classList.remove("invalid");
    passwordInput.classList.remove("invalid");

    feedback.textContent = "";
    feedback.className = "";

    let valid = true;

    if (emailInput.value.trim() === "" || !emailInput.validity.valid) {
        emailInput.classList.add("invalid");
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        valid = false;
    }

    if (passwordInput.value.trim() === "") {
        passwordInput.classList.add("invalid");
        document.getElementById("passwordError").textContent =
            "Please enter your password.";
        valid = false;
    }

    if (!valid) {
        feedback.textContent = "Please correct the errors above.";
        feedback.className = "error-message";
        return;
    }

    // Frontend demonstration only
    feedback.textContent =
        "Form validated. Connect your PHP backend to log in securely.";
    feedback.className = "success";
});