
import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const authNav = document.getElementById("authNav");
const userGreeting = document.getElementById("userGreeting");

if (authNav) {
    onAuthStateChanged(auth, user => {

        if (!user) {
            if (userGreeting) {
                userGreeting.textContent = "";
            }

            authNav.innerHTML = `
                <a href="login.html">
                    <button class="pill-btn faq" type="button">Log In</button>
                </a>
                <a href="signup.html">
                    <button class="pill-btn signup" type="button">Sign Up</button>
                </a>
            `;

            return;
        }

        const name = user.displayName || user.email || "User";

        if (userGreeting) {
            userGreeting.textContent = `Hi, ${name}`;
            authNav.innerHTML = `
                <button class="pill-btn signup" id="logoutButton" type="button">Log Out</button>
            `;
        } else {
            authNav.innerHTML = `
                <span class="user-greeting">Hi, ${escapeText(name)}</span>
                <button class="pill-btn signup" id="logoutButton" type="button">Log Out</button>
            `;
        }

        document.getElementById("logoutButton").addEventListener("click", async () => {
            try {
                await signOut(auth);
                window.location.href = "index.html";
            } catch (error) {
                console.error("Logout error:", error);
            }
        });

    });
}

function escapeText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}
