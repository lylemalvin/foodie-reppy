document.addEventListener("DOMContentLoaded", function () {
    // Get form elements
    const signupForm = document.getElementById("signupForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");    
    const feedback = document.getElementById("formFeedback");
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // show at hide ng password
    document.querySelectorAll("[data-toggle]").forEach(function (button) {
        button.addEventListener("click", function () {
            const inputId = button.getAttribute("data-toggle");
            const input = document.getElementById(inputId);

            if (!input) return;

            if (input.type === "password") {
                input.type = "text";
                button.setAttribute("aria-label", "Hide password");
                button.textContent = "◎";
            } else {
                input.type = "password";
                button.setAttribute("aria-label", "Show password");
                button.textContent = "◉";
            }
        });
    });

    // Mobile menu
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
        });
    }

    // Display validation errors
    function setError(id, message) {
        const errorElement = document.getElementById(id);

        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Clear previous errors
    function clearErrors() {
        setError("nameError", "");
        setError("emailError", "");
        setError("passwordError", "");
        setError("confirmError", "");

        if (feedback) {
            feedback.textContent = "";
        }
    }

    // Validate ng sign-up form
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            clearErrors();

            let isValid = true;

            const nameValue = fullName.value.trim();
            const emailValue = email.value.trim();
            const passwordValue = password.value;
            const confirmValue = confirmPassword.value;

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // checkfull name
            if (nameValue.length < 2) {
                setError("nameError", "Please enter your full name.");
                isValid = false;
            }

            // check yung email
            if (!emailPattern.test(emailValue)) {
                setError("emailError", "Please enter a valid email address.");
                isValid = false;
            }

            // check nya yung pass
            if (passwordValue.length < 8) {
                setError(
                    "passwordError",
                    "Password must contain at least 8 characters."
                );
                isValid = false;
            }

            // check nya yung confirm pass
            if (confirmValue === "") {
                setError("confirmError", "Please confirm your password.");
                isValid = false;
            } else if (passwordValue !== confirmValue) {
                setError("confirmError", "Passwords do not match.");
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            const submitButton = signupForm.querySelector("[type='submit']");
            submitButton.disabled = true;

            const formData = new FormData(signupForm);

            fetch("signup.php", {
                method: "POST",
                body: formData
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.success) {
                        feedback.style.color = "#26733c";
                        feedback.textContent = data.message;
                        signupForm.reset();
                        return;
                    }

                    if (data.errors) {
                        setError("nameError", data.errors.fullName || "");
                        setError("emailError", data.errors.email || "");
                        setError("passwordError", data.errors.password || "");
                        setError("confirmError", data.errors.confirmPassword || "");
                    } else {
                        feedback.style.color = "#b63822";
                        feedback.textContent = data.message || "Sign-up failed.";
                    }
                })
                .catch(function () {
                    feedback.style.color = "#b63822";
                    feedback.textContent =
                        "Could not reach the server. Is Apache running?";
                })
                .finally(function () {
                    submitButton.disabled = false;
                });
        });
    }
});