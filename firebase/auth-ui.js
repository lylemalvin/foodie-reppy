import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getSavedRecipes } from "./saved-recipes.js";

const authNav = document.getElementById("authNav");

const PROFILE_ICON = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4"></circle>
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path>
    </svg>`;

injectProfileStyles();

if (authNav) {
    onAuthStateChanged(auth, user => {

        closeProfileModal();

        if (!user) {
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

        const profileButton = `
            <button class="profile-btn" id="profileButton" type="button"
                    aria-label="My profile: liked and saved recipes"
                    title="My profile">${PROFILE_ICON}</button>
        `;

        authNav.innerHTML = `
            ${profileButton}
            <button class="pill-btn signup" id="logoutButton" type="button">Log Out</button>
        `;

        document.getElementById("profileButton").addEventListener("click", () => openProfileModal(name, user.email));

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

/* ---------- Profile modal ---------- */

let activeTab = "favorites";

async function openProfileModal(name, email) {
    closeProfileModal();

    const overlay = document.createElement("div");
    overlay.className = "profile-overlay";
    overlay.id = "profileOverlay";
    overlay.innerHTML = `
        <div class="profile-modal" role="dialog" aria-modal="true" aria-labelledby="profileTitle">
            <button class="profile-close" type="button" aria-label="Close profile">&times;</button>
            <div class="profile-head">
                <div class="profile-avatar">${PROFILE_ICON}</div>
                <div>
                    <h2 id="profileTitle">${escapeText(name)}</h2>
                    ${email && email !== name ? `<p>${escapeText(email)}</p>` : ""}
                </div>
            </div>
            <div class="profile-tabs" role="tablist">
                <button type="button" role="tab" data-tab="favorites">&#9829; Liked <span class="profile-count" data-count="favorites"></span></button>
                <button type="button" role="tab" data-tab="bookmarks">&#128278; Saved <span class="profile-count" data-count="bookmarks"></span></button>
            </div>
            <div class="profile-list" id="profileList"><p class="profile-empty">Loading your recipes...</p></div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.classList.add("profile-open");

    overlay.addEventListener("click", event => {
        if (event.target === overlay || event.target.closest(".profile-close")) {
            closeProfileModal();
        }
    });
    document.addEventListener("keydown", onEscape);

    let saved = { favorites: [], bookmarks: [] };
    try {
        saved = await getSavedRecipes();
    } catch (error) {
        console.error("Could not load saved recipes:", error);
        const list = document.getElementById("profileList");
        if (list) list.innerHTML = `<p class="profile-empty">Couldn't load your recipes. Please try again.</p>`;
        return;
    }

    const sortByName = (a, b) => a.name.localeCompare(b.name);
    saved.favorites.sort(sortByName);
    saved.bookmarks.sort(sortByName);

    overlay.querySelector('[data-count="favorites"]').textContent = saved.favorites.length;
    overlay.querySelector('[data-count="bookmarks"]').textContent = saved.bookmarks.length;

    const showTab = tab => {
        activeTab = tab;
        overlay.querySelectorAll(".profile-tabs button").forEach(btn => {
            const on = btn.dataset.tab === tab;
            btn.classList.toggle("active", on);
            btn.setAttribute("aria-selected", String(on));
        });
        renderList(saved[tab], tab);
    };

    overlay.querySelectorAll(".profile-tabs button").forEach(btn => {
        btn.addEventListener("click", () => showTab(btn.dataset.tab));
    });

    showTab(activeTab);
}

function renderList(recipes, tab) {
    const list = document.getElementById("profileList");
    if (!list) return;

    if (!recipes.length) {
        list.innerHTML = `<p class="profile-empty">${
            tab === "favorites"
                ? "You haven't liked any recipes yet."
                : "You haven't saved any recipes yet."
        }<br>Open a recipe in Categories and tap the ${tab === "favorites" ? "heart" : "bookmark"} icon.</p>`;
        return;
    }

    list.innerHTML = recipes.map(recipe => `
        <a class="profile-item"
           href="categories.html?type=${encodeURIComponent(recipe.category)}&recipe=${encodeURIComponent(recipe.name)}">
            <span class="profile-item-name">${escapeText(recipe.name)}</span>
            <span class="profile-item-cat">${escapeText(capitalize(recipe.category))}</span>
        </a>
    `).join("");
}

function onEscape(event) {
    if (event.key === "Escape") closeProfileModal();
}

function closeProfileModal() {
    const overlay = document.getElementById("profileOverlay");
    if (overlay) overlay.remove();
    document.body.classList.remove("profile-open");
    document.removeEventListener("keydown", onEscape);
}

function capitalize(value) {
    value = String(value || "");
    return value.charAt(0).toUpperCase() + value.slice(1);
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

function injectProfileStyles() {
    if (document.getElementById("profileStyles")) return;
    const style = document.createElement("style");
    style.id = "profileStyles";
    style.textContent = `
        .profile-btn {
            display: inline-flex; align-items: center; justify-content: center;
            width: 38px; height: 38px; padding: 0; flex: 0 0 auto;
            border: 1px solid rgba(119, 59, 25, .20); border-radius: 50%;
            color: #542d1b; background: rgba(255, 255, 255, .45);
            cursor: pointer; transition: .2s ease;
        }
        .profile-btn:hover { background: #e9431b; color: #fff; transform: translateY(-1px); }

        body.profile-open { overflow: hidden; }
        .profile-overlay {
            position: fixed; inset: 0; z-index: 10000;
            display: flex; align-items: center; justify-content: center; padding: 16px;
            background: rgba(57, 32, 25, .55);
        }
        .profile-modal {
            position: relative; width: 100%; max-width: 460px; max-height: 85vh;
            display: flex; flex-direction: column;
            padding: 24px 22px 18px; border-radius: 18px;
            background: #fffdf8; color: #392019;
            font-family: 'Nunito', sans-serif;
            box-shadow: 0 18px 50px rgba(57, 32, 25, .35);
        }
        .profile-close {
            position: absolute; top: 10px; right: 14px;
            border: 0; background: transparent; color: #806456;
            font-size: 28px; line-height: 1; cursor: pointer;
        }
        .profile-close:hover { color: #e9431b; }
        .profile-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; padding-right: 26px; }
        .profile-head h2 { margin: 0; font-size: 20px; font-weight: 900; word-break: break-word; }
        .profile-head p { margin: 2px 0 0; font-size: 13px; color: #806456; word-break: break-all; }
        .profile-avatar {
            display: flex; align-items: center; justify-content: center; flex: 0 0 auto;
            width: 52px; height: 52px; border-radius: 50%;
            background: #ffc583; color: #542d1b;
        }
        .profile-avatar svg { width: 28px; height: 28px; }
        .profile-tabs { display: flex; gap: 8px; margin-bottom: 14px; }
        .profile-tabs button {
            flex: 1; padding: 9px 10px; border: 1px solid #f4d3b0; border-radius: 25px;
            background: #fff8eb; color: #542d1b;
            font-family: inherit; font-size: 13px; font-weight: 800; cursor: pointer; transition: .2s ease;
        }
        .profile-tabs button.active { background: #e9431b; border-color: #e9431b; color: #fff; }
        .profile-count { opacity: .8; }
        .profile-count:not(:empty)::before { content: "("; }
        .profile-count:not(:empty)::after { content: ")"; }
        .profile-list { overflow-y: auto; display: flex; flex-direction: column; gap: 8px; min-height: 120px; }
        .profile-item {
            display: flex; align-items: center; justify-content: space-between; gap: 10px;
            padding: 12px 14px; border: 1px solid #f4d3b0; border-radius: 12px;
            background: #fff8eb; color: #392019; text-decoration: none; transition: .2s ease;
        }
        .profile-item:hover { background: #ffe4c5; transform: translateY(-1px); }
        .profile-item-name { font-weight: 800; font-size: 14px; }
        .profile-item-cat { font-size: 12px; font-weight: 700; color: #806456; white-space: nowrap; }
        .profile-empty { margin: 30px 10px; text-align: center; color: #806456; font-size: 14px; line-height: 1.6; }

        @media (max-width: 600px) {
            .header-buttons .firebase-auth-nav .profile-btn {
                width: 100%; height: 40px; border-radius: 25px;
            }
        }
    `;
    document.head.appendChild(style);
}