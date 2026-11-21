import { recipesByCuisine, cuisineNames } from "../categoriespage/recipes-data.js";

/* ---------- Search index (built once from the shared recipe data) ---------- */

function normalize(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

const recipeIndex = [];
Object.keys(recipesByCuisine).forEach(category => {
    recipesByCuisine[category].forEach(recipe => {
        const ingredientNames = (recipe.ingredients || []).map(item => item[1]);
        recipeIndex.push({
            name: recipe.name,
            category,
            cuisine: cuisineNames[category] || category,
            ingredients: ingredientNames,
            nameKey: normalize(recipe.name),
            cuisineKey: normalize(category),
            ingredientKeys: ingredientNames.map(normalize)
        });
    });
});

function recipeUrl(category, name) {
    return `categories.html?type=${encodeURIComponent(category)}&recipe=${encodeURIComponent(name)}`;
}

function cuisineUrl(category) {
    return `categories.html?type=${encodeURIComponent(category)}`;
}

/* Returns up to `limit` results, best matches first.
   Every word typed must match the recipe name, cuisine, or an ingredient. */
export function searchRecipes(query, limit = 8) {
    const q = normalize(query);
    if (!q) return [];

    // "cuisine" is just filler ("italian cuisine"), so it isn't matched on its own
    const words = q.split(/\s+/).filter(word => word && !/^cuisines?$/.test(word));
    const results = [];

    // Cuisine shortcuts, e.g. "japanese" or "italian cuisine"
    Object.keys(cuisineNames).forEach(category => {
        const short = normalize(category);
        if (!words.length || words.every(word => short.startsWith(word))) {
            results.push({
                type: "cuisine",
                title: cuisineNames[category],
                subtitle: "Browse all recipes",
                url: cuisineUrl(category),
                score: -1
            });
        }
    });

    recipeIndex.forEach(item => {
        if (!words.length) return;
        let score = 0;
        let hint = "";
        let allMatched = true;

        for (const word of words) {
            if (item.nameKey.startsWith(word)) {
                score += 0;
            } else if (item.nameKey.split(/\s+/).some(part => part.startsWith(word))) {
                score += 1;
            } else if (item.nameKey.includes(word)) {
                score += 2;
            } else if (item.cuisineKey.startsWith(word)) {
                score += 3;
            } else {
                const index = item.ingredientKeys.findIndex(key => key.includes(word));
                if (index === -1) {
                    allMatched = false;
                    break;
                }
                score += 4;
                hint = item.ingredients[index];
            }
        }

        if (allMatched) {
            results.push({
                type: "recipe",
                title: item.name,
                subtitle: hint ? `${item.cuisine} \u00b7 contains ${hint}` : item.cuisine,
                url: recipeUrl(item.category, item.name),
                score
            });
        }
    });

    results.sort((a, b) => a.score - b.score || a.title.localeCompare(b.title));
    return results.slice(0, limit);
}

/* ---------- Page wiring (only runs in the browser) ---------- */

function escapeText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);
}

function initSearch() {
    const input = document.getElementById("searchInput");
    const box = document.getElementById("searchResults");
    if (!input || !box) return;

    injectStyles();

    let results = [];
    let active = -1;

    function render() {
        const query = input.value.trim();

        if (!query) {
            close();
            return;
        }

        results = searchRecipes(query);
        active = -1;

        if (!results.length) {
            box.innerHTML = `<div class="search-empty">No recipes found for "${escapeText(query)}".<br>Try a dish, cuisine, or ingredient.</div>`;
        } else {
            box.innerHTML = results.map((result, i) => `
                <a class="search-item" role="option" id="searchOption${i}" href="${result.url}">
                    <span class="search-item-title">${escapeText(result.title)}</span>
                    <span class="search-item-sub">${escapeText(result.subtitle)}</span>
                </a>`).join("");
        }

        box.hidden = false;
        input.setAttribute("aria-expanded", "true");
    }

    function close() {
        box.hidden = true;
        box.innerHTML = "";
        results = [];
        active = -1;
        input.setAttribute("aria-expanded", "false");
    }

    function setActive(next) {
        const items = box.querySelectorAll(".search-item");
        if (!items.length) return;
        active = (next + items.length) % items.length;
        items.forEach((item, i) => item.classList.toggle("active", i === active));
        items[active].scrollIntoView({ block: "nearest" });
    }

    input.addEventListener("input", render);
    input.addEventListener("focus", () => { if (input.value.trim()) render(); });

    input.addEventListener("keydown", event => {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (box.hidden) render();
            setActive(active + 1);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActive(active - 1);
        } else if (event.key === "Escape") {
            close();
        } else if (event.key === "Enter") {
            event.preventDefault();
            const query = input.value.trim();
            if (!query) return;
            const list = box.hidden ? searchRecipes(query) : results;
            const target = list[active >= 0 ? active : 0];
            if (target) {
                window.location.href = target.url;
            } else {
                render();
            }
        }
    });

    document.addEventListener("click", event => {
        if (!event.target.closest(".search-wrap")) close();
    });
}

function injectStyles() {
    if (document.getElementById("searchStyles")) return;
    const style = document.createElement("style");
    style.id = "searchStyles";
    style.textContent = `
        .search-results {
            position: absolute; top: calc(100% + 8px); left: 0; right: 0; z-index: 900;
            max-height: 340px; overflow-y: auto; padding: 6px;
            border: 1px solid #f4d3b0; border-radius: 18px;
            background: #fffdf8; box-shadow: 0 10px 28px rgba(57, 32, 25, .22);
            font-family: 'Nunito', sans-serif; text-align: left;
        }
        .search-results[hidden] { display: none; }
        .search-item {
            display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
            padding: 10px 14px; border-radius: 12px;
            color: #392019; text-decoration: none;
        }
        .search-item:hover, .search-item.active { background: #ffe4c5; }
        .search-item-title { font-size: 14px; font-weight: 800; }
        .search-item-sub { font-size: 12px; font-weight: 600; color: #806456; text-align: right; }
        .search-empty { padding: 18px 14px; text-align: center; font-size: 13px; line-height: 1.6; color: #806456; }
        @media (max-width: 600px) {
            .search-item { flex-direction: column; align-items: flex-start; gap: 2px; }
            .search-item-sub { text-align: left; }
        }
    `;
    document.head.appendChild(style);
}

if (typeof document !== "undefined") {
    initSearch();
}