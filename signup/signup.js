
import { auth, db } from "../firebase/firebase-config.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const signupForm = document.getElementById("signupForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const feedback = document.getElementById("formFeedback");

document.querySelectorAll("[data-toggle]").forEach(button => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.getAttribute("data-toggle"));
        if (!input) return;

        input.type = input.type === "password" ? "text" : "password";
        button.setAttribute("aria-label", input.type === "password" ? "Show password" : "Hide password");
    });
});

<<<<<<< HEAD
=======
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

>>>>>>> 4f7a15d8d88f2f5c51655ada76b4642cf4b3007f
function setError(id, message) {
    const element = document.getElementById(id);
    if (element) element.textContent = message;
}

function showToast(message, type) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.className = "toast show " + type;

    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

signupForm.addEventListener("submit", async event => {
    event.preventDefault();

    ["nameError", "emailError", "passwordError", "confirmError"].forEach(id => setError(id, ""));
    feedback.textContent = "";

    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;

    let valid = true;

    if (nameValue.length < 2) {
        setError("nameError", "Please enter your full name.");
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        setError("emailError", "Please enter a valid email address.");
        valid = false;
    }

    if (passwordValue.length < 8) {
        setError("passwordError", "Password must contain at least 8 characters.");
        valid = false;
    }

    if (!confirmValue || confirmValue !== passwordValue) {
        setError("confirmError", "Passwords do not match.");
        valid = false;
    }

    if (!valid) {
        showToast("Please fix the highlighted fields.", "error");
        return;
    }

    const submitButton = signupForm.querySelector("[type='submit']");
    submitButton.disabled = true;

    try {
        const result = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);

        await updateProfile(result.user, {
            displayName: nameValue
        });

        await setDoc(doc(db, "users", result.user.uid), {
            fullName: nameValue,
            email: emailValue,
            createdAt: new Date().toISOString()
        });

        feedback.style.color = "#26733c";
        feedback.textContent = "Account created successfully! Redirecting...";

        showToast("Account created successfully!", "success");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } catch (error) {
        let message = "Unable to create your account. Please try again.";

        if (error.code === "auth/email-already-in-use") {
            message = "This email is already registered.";
            setError("emailError", message);
        } else if (error.code === "auth/invalid-email") {
            message = "Please enter a valid email address.";
        } else if (error.code === "auth/weak-password") {
            message = "Password must contain at least 6 characters.";
        } else if (error.code === "permission-denied") {
            message = "Unable to save your profile. Please check your Firestore security rules.";
        }

        feedback.style.color = "#b63822";
        feedback.textContent = message;

        showToast(message, "error");

        console.error("Signup error:", error);

    } finally {
        submitButton.disabled = false;
    }
});
