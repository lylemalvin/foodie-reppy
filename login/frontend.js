import { auth, db } from "../firebase/firebase-config.js";
import { browserLocalPersistence, browserSessionPersistence, onAuthStateChanged, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
const submitButton = loginForm.querySelector(".login-button");

document.getElementById("year").textContent = new Date().getFullYear();

onAuthStateChanged(auth, user => {
    if (user) window.location.replace("index.html");
});

document.getElementById("forgotPassword").addEventListener("click", async event => {
    event.preventDefault();
    const email = emailInput.value.trim();
    if (!email || !emailInput.validity.valid) {
        showFieldError(emailInput, "Enter your email address first.");
        return;
    }
    try {
        await sendPasswordResetEmail(auth, email);
        feedback.textContent = "Password reset instructions have been sent to your email.";
        feedback.className = "success";
    } catch (error) {
        feedback.textContent = error.code === "auth/user-not-found" ? "No account was found with that email." : "Unable to send the reset email. Please try again.";
        feedback.className = "error-message";
    }
});

document.getElementById("togglePassword").addEventListener("click", function () {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    this.setAttribute("aria-label", passwordInput.type === "password" ? "Show password" : "Hide password");
});

[emailInput, passwordInput].forEach(input => input.addEventListener("input", function () {
    this.classList.remove("invalid");
    document.getElementById(this.id + "Error").textContent = "";
    feedback.textContent = "";
    feedback.className = "";
}));

function showFieldError(input, message) {
    input.classList.add("invalid");
    document.getElementById(input.id + "Error").textContent = message;
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

loginForm.addEventListener("submit", async event => {
    event.preventDefault();
    document.querySelectorAll(".error").forEach(error => error.textContent = "");
    emailInput.classList.remove("invalid");
    passwordInput.classList.remove("invalid");
    feedback.textContent = "";
    feedback.className = "";

    let valid = true;
    if (!emailInput.value.trim() || !emailInput.validity.valid) {
        showFieldError(emailInput, "Please enter a valid email address.");
        valid = false;
    }
    if (!passwordInput.value) {
        showFieldError(passwordInput, "Please enter your password.");
        valid = false;
    }
    if (!valid) {
        feedback.textContent = "Please correct the errors above.";
        feedback.className = "error-message";
        return;
    }

    submitButton.disabled = true;
    try {
        const persistence = document.getElementById("rememberMe").checked ? browserLocalPersistence : browserSessionPersistence;
        await setPersistence(auth, persistence);
        const result = await signInWithEmailAndPassword(auth, emailInput.value.trim(), passwordInput.value);
        const profileRef = doc(db, "users", result.user.uid);
        const profile = await getDoc(profileRef);
        if (!profile.exists()) {
            await setDoc(profileRef, { fullName: result.user.displayName || "", email: result.user.email, createdAt: new Date().toISOString() });
        }
        feedback.textContent = "Login successful! Redirecting...";
        feedback.className = "success";
        showToast("Login successful!", "success");
        setTimeout(() => window.location.href = "index.html", 900);
    } catch (error) {
        const message = error.code === "auth/invalid-credential" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found"
            ? "Incorrect email or password."
            : error.code === "auth/too-many-requests"
                ? "Too many attempts. Please try again later."
                : "Unable to log in. Please try again.";
        feedback.textContent = message;
        feedback.className = "error-message";
        showToast(message, "error");
    } finally {
        submitButton.disabled = false;
    }
});
