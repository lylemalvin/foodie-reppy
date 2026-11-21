import { auth } from "../firebase/firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getSavedRecipes, toggleSavedRecipe as updateSavedRecipe } from "../firebase/saved-recipes.js";


import { recipesByCuisine, cuisineNames } from "./recipes-data.js";

const recipeList = document.getElementById("recipe-list");
const recipeCount = document.getElementById("recipe-count");
const recipeTitle = document.getElementById("recipe-title");
const recipeImage = document.getElementById("recipe-image");
const recipeDescription = document.getElementById("recipe-description");
const recipeCategory = document.getElementById("recipe-category");
const recipeServings = document.getElementById("recipe-servings");
const ingredientsContainer = document.getElementById("ingredients");
const tabsContainer = document.getElementById("tabs-container");

let currentCategory = "filipino";
let currentRecipeIndex = 0;

const favoriteRecipes = new Set();
const bookmarkedRecipes = new Set();
let savedRecipesLoaded = false;
let currentUserLoggedIn = false;

function makeRecipeKey(category, name) {
    return category + "-" + name;
}

async function loadSavedRecipes() {
    try {
        await new Promise(resolve => {
            const unsubscribe = onAuthStateChanged(auth, async user => {
                currentUserLoggedIn = Boolean(user);
                unsubscribe();
                try {
                    const data = await getSavedRecipes();
                    favoriteRecipes.clear();
                    bookmarkedRecipes.clear();
                    (data.favorites || []).forEach(recipe => favoriteRecipes.add(makeRecipeKey(recipe.category, recipe.name)));
                    (data.bookmarks || []).forEach(recipe => bookmarkedRecipes.add(makeRecipeKey(recipe.category, recipe.name)));
                } catch (error) {
                    console.error("Could not load saved recipes:", error);
                }
                resolve();
            });
        });
    } finally {
        savedRecipesLoaded = true;
        updateActionButtons();
    }
}

async function toggleSavedRecipe(type, recipe) {
    if (!recipe) return;

    if (!currentUserLoggedIn) {
        alert("Please log in to save your recipes.");
        window.location.href = "login.html";
        return;
    }

    const key = makeRecipeKey(currentCategory, recipe.name);
    const collection = type === "favorites" ? favoriteRecipes : bookmarkedRecipes;
    const button = document.getElementById(type === "favorites" ? "favorite-btn" : "bookmark-btn");
    button.disabled = true;

    try {
        const saved = await updateSavedRecipe(type, currentCategory, recipe.name);
        if (saved) collection.add(key);
        else collection.delete(key);
        updateActionButtons();
    } catch (error) {
        alert(error.message || "Unable to save this recipe. Please try again.");
    } finally {
        button.disabled = false;
    }
}

function getCurrentRecipe() {
    const recipes = recipesByCuisine[currentCategory] || [];
    return recipes[currentRecipeIndex] || recipes[0];
}

function createRecipeCard(recipe, index) {
    const item = document.createElement("li");

    item.className = "recipe-item";
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", "View " + recipe.name);

    if (index === currentRecipeIndex) {
        item.classList.add("active");
        item.setAttribute("aria-pressed", "true");
    } else {
        item.setAttribute("aria-pressed", "false");
    }

    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.name;
    image.loading = "lazy";

    image.onerror = function () {
        this.style.visibility = "hidden";
    };

    const title = document.createElement("h3");
    title.textContent = recipe.name;

    item.append(image, title);

    item.addEventListener("click", function () {
        selectRecipe(index);
    });

    item.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectRecipe(index);
        }
    });

    return item;
}

function renderRecipeList() {
    const recipes = recipesByCuisine[currentCategory] || [];

    recipeList.replaceChildren();

    recipes.forEach(function (recipe, index) {
        recipeList.appendChild(createRecipeCard(recipe, index));
    });

    recipeCount.textContent =
        recipes.length + (recipes.length === 1 ? " recipe" : " recipes");
}

function renderIngredients(recipe) {
    ingredientsContainer.replaceChildren();

    recipe.ingredients.forEach(function (ingredient) {
        const item = document.createElement("li");

        const emoji = document.createElement("span");
        emoji.className = "ingredient-emoji";
        emoji.textContent = ingredient[0];

        const name = document.createElement("span");
        name.textContent = ingredient[1];

        item.append(emoji, name);
        ingredientsContainer.appendChild(item);
    });
}

function updateActionButtons() {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    const recipeKey = currentCategory + "-" + recipe.name;
    const favoriteButton = document.getElementById("favorite-btn");
    const bookmarkButton = document.getElementById("bookmark-btn");

    const isFavorite = favoriteRecipes.has(recipeKey);
    const isBookmarked = bookmarkedRecipes.has(recipeKey);

    favoriteButton.classList.toggle("selected", isFavorite);
    favoriteButton.setAttribute("aria-pressed", String(isFavorite));

    favoriteButton.innerHTML = isFavorite
        ? '<i class="fa-solid fa-heart"></i>'
        : '<i class="fa-regular fa-heart"></i>';

    bookmarkButton.classList.toggle("selected", isBookmarked);
    bookmarkButton.setAttribute("aria-pressed", String(isBookmarked));

    bookmarkButton.innerHTML = isBookmarked
        ? '<i class="fa-solid fa-bookmark"></i>'
        : '<i class="fa-regular fa-bookmark"></i>';
}

function renderRecipeDetails() {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    recipeTitle.textContent = recipe.name;
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;
    recipeImage.style.visibility = "visible";

    recipeImage.onerror = function () {
        this.style.visibility = "hidden";
    };

    recipeDescription.textContent = recipe.description;
    recipeCategory.innerHTML =
        '<i class="fa-solid fa-utensils"></i> ' +
        cuisineNames[currentCategory];

    recipeServings.textContent = recipe.servings;

    const timeLabel = document.getElementById("recipe-time");
    const difficultyLabel = document.getElementById("recipe-difficulty");
    if (timeLabel) timeLabel.textContent = recipe.time || "";
    if (difficultyLabel) difficultyLabel.textContent = recipe.difficulty || "";

    renderIngredients(recipe);
    updateActionButtons();
}

function selectRecipe(index) {
    currentRecipeIndex = index;

    renderRecipeList();
    renderRecipeDetails();
}

function selectCategory(category) {
    if (!recipesByCuisine[category]) return;

    currentCategory = category;
    currentRecipeIndex = 0;

    document.querySelectorAll(".tab-item").forEach(function (tab) {
        const isActive = tab.dataset.category === category;

        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-pressed", String(isActive));

        if (isActive) {
            tab.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    });

    renderRecipeList();
    renderRecipeDetails();
}

document.querySelectorAll(".tab-item").forEach(function (tab) {
    tab.addEventListener("click", function () {
        selectCategory(tab.dataset.category);
    });

    tab.setAttribute(
        "aria-pressed",
        String(tab.dataset.category === currentCategory)
    );
});

/* SCROLL THROUGH CUISINE TABS */

document.getElementById("prev-tab").addEventListener("click", function () {
    tabsContainer.scrollBy({
        left: -220,
        behavior: "smooth"
    });
});

document.getElementById("next-tab").addEventListener("click", function () {
    tabsContainer.scrollBy({
        left: 220,
        behavior: "smooth"
    });
});

/* FAVORITES */

document.getElementById("favorite-btn").addEventListener("click", function () {
    toggleSavedRecipe("favorites", getCurrentRecipe());
});

/* BOOKMARKS */

document.getElementById("bookmark-btn").addEventListener("click", function () {
    toggleSavedRecipe("bookmarks", getCurrentRecipe());
});

/* FULL RECIPE MODAL */

const recipeModal = document.getElementById("recipe-modal");

function getTimeParts(recipe) {
    return [
        recipe.prep ? "Prep: " + recipe.prep : "",
        recipe.cook ? "Cook: " + recipe.cook : "",
        recipe.time ? "Total: " + recipe.time : ""
    ].filter(Boolean);
}

// Turns "Prep the meat: Cut it up." into a bold label followed by the instruction
function fillStep(item, text) {
    const match = text.match(/^([^:]{3,45}):\s+([\s\S]*)$/);

    if (match) {
        const label = document.createElement("strong");
        label.textContent = match[1] + ": ";
        item.append(label, match[2]);
    } else {
        item.textContent = text;
    }
}

function ensureModalExtras() {
    if (document.getElementById("modal-steps")) return;

    const modalCard = recipeModal.querySelector(".modal-card");
    const note = modalCard.querySelector(".modal-note");

    const meta = document.createElement("p");
    meta.id = "modal-meta";
    meta.className = "modal-meta";
    modalCard.insertBefore(meta, document.getElementById("modal-description"));

    function addSection(title, element) {
        const heading = document.createElement("h3");
        heading.textContent = title;
        heading.className = "modal-section-title";
        modalCard.insertBefore(heading, note);
        modalCard.insertBefore(element, note);
        return heading;
    }

    const steps = document.createElement("ol");
    steps.id = "modal-steps";
    addSection("Instructions", steps);

    const tips = document.createElement("ul");
    tips.id = "modal-tips";
    addSection("Chef's Tips", tips);

    const storage = document.createElement("p");
    storage.id = "modal-storage";
    addSection("Storage & Reheating", storage);

    const printButton = document.createElement("button");
    printButton.type = "button";
    printButton.className = "modal-print-btn";
    printButton.innerHTML = '<i class="fa-solid fa-print"></i> Print this recipe';
    printButton.addEventListener("click", printCurrentRecipe);
    modalCard.insertBefore(printButton, note);

    note.textContent = "Happy cooking!";
}

document.getElementById("full-recipe-btn").addEventListener("click", function () {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    ensureModalExtras();

    document.getElementById("modal-title").textContent = recipe.name;
    document.getElementById("modal-meta").textContent = getTimeParts(recipe)
        .concat([recipe.servings, recipe.difficulty].filter(Boolean))
        .join("  •  ");
    document.getElementById("modal-description").textContent =
        recipe.description;

    const modalIngredients = document.getElementById("modal-ingredients");
    modalIngredients.replaceChildren();

    recipe.ingredients.forEach(function (ingredient) {
        const item = document.createElement("li");
        item.textContent = ingredient[0] + " " + ingredient[1];
        modalIngredients.appendChild(item);
    });

    const modalSteps = document.getElementById("modal-steps");
    modalSteps.replaceChildren();

    (recipe.steps || []).forEach(function (step) {
        const item = document.createElement("li");
        fillStep(item, step);
        modalSteps.appendChild(item);
    });

    const modalTips = document.getElementById("modal-tips");
    modalTips.replaceChildren();

    (recipe.tips || []).forEach(function (tip) {
        const item = document.createElement("li");
        item.textContent = tip;
        modalTips.appendChild(item);
    });

    document.getElementById("modal-storage").textContent = recipe.storage || "";

    recipeModal.classList.add("open");
    recipeModal.setAttribute("aria-hidden", "false");
    recipeModal.querySelector(".modal-card").scrollTop = 0;

    document.getElementById("close-modal").focus();
});

function closeRecipeModal() {
    recipeModal.classList.remove("open");
    recipeModal.setAttribute("aria-hidden", "true");
}

document.getElementById("close-modal").addEventListener("click", closeRecipeModal);

recipeModal.addEventListener("click", function (event) {
    if (event.target === recipeModal) {
        closeRecipeModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeRecipeModal();
    }
});

/* PRINT */

function buildPrintSheet(recipe) {
    let sheet = document.getElementById("print-sheet");

    if (!sheet) {
        sheet = document.createElement("div");
        sheet.id = "print-sheet";
        document.body.appendChild(sheet);
    }

    sheet.replaceChildren();

    function el(tag, text, className) {
        const node = document.createElement(tag);
        if (text) node.textContent = text;
        if (className) node.className = className;
        return node;
    }

    function list(tag, items, stepStyle) {
        const listNode = document.createElement(tag);
        items.forEach(function (text) {
            const item = document.createElement("li");
            if (stepStyle) {
                fillStep(item, text);
            } else {
                item.textContent = text;
            }
            listNode.appendChild(item);
        });
        return listNode;
    }

    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.name;
    image.onerror = function () {
        this.style.display = "none";
    };

    const metaText = getTimeParts(recipe)
        .concat([
            recipe.servings ? "Serves: " + recipe.servings : "",
            recipe.difficulty ? "Difficulty: " + recipe.difficulty : ""
        ].filter(Boolean))
        .join("   |   ");

    sheet.append(
        el("p", "Flavorly", "print-brand"),
        el("h1", recipe.name),
        el("p", cuisineNames[currentCategory], "print-cuisine"),
        el("p", metaText, "print-meta"),
        image,
        el("p", recipe.description),
        el("h2", "Ingredients"),
        list("ul", recipe.ingredients.map(function (ingredient) {
            return ingredient[1];
        })),
        el("h2", "Instructions"),
        list("ol", recipe.steps || [], true)
    );

    if (recipe.tips && recipe.tips.length) {
        sheet.append(el("h2", "Chef's Tips"), list("ul", recipe.tips));
    }

    if (recipe.storage) {
        sheet.append(el("h2", "Storage & Reheating"), el("p", recipe.storage));
    }

    sheet.append(el("p", "Printed from Flavorly - Discover. Cook. Enjoy.", "print-footer"));
}

function printCurrentRecipe() {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    buildPrintSheet(recipe);
    window.print();
}

document.getElementById("print-btn").addEventListener("click", printCurrentRecipe);

// Also covers Ctrl+P / the browser's own Print menu
window.addEventListener("beforeprint", function () {
    const recipe = getCurrentRecipe();
    if (recipe) buildPrintSheet(recipe);
});

/* STYLES FOR THE FULL RECIPE POPUP AND THE PRINTED RECIPE */

(function injectRecipeStyles() {
    const style = document.createElement("style");
    style.textContent = `
        .modal-section-title {
            margin-top: 20px;
        }

        #modal-tips {
            margin: 0 0 6px;
            padding-left: 22px;
        }

        #modal-storage {
            margin: 0 0 18px;
        }

        .modal-meta {
            margin: 0 0 12px;
            color: var(--muted);
            font-size: 13px;
            font-weight: 800;
        }

        .modal-card ol {
            margin: 0 0 18px;
            padding-left: 22px;
        }

        .modal-card ol li {
            margin-bottom: 9px;
        }

        .modal-print-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin: 0 0 16px;
            padding: 10px 18px;
            border: 0;
            border-radius: 25px;
            background: var(--terracotta);
            color: #fff;
            font-family: 'Nunito', sans-serif;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
            transition: .2s ease;
        }

        .modal-print-btn:hover {
            background: var(--terracotta-dark);
        }

        #print-sheet {
            display: none;
        }

        @media print {
            @page {
                margin: 16mm;
            }

            body {
                padding-top: 0 !important;
                background: #fff !important;
            }

            body > *:not(#print-sheet) {
                display: none !important;
            }

            #print-sheet {
                display: block;
                color: #000;
                font-family: 'Nunito', Arial, sans-serif;
                font-size: 12pt;
                line-height: 1.5;
            }

            #print-sheet .print-brand {
                margin: 0;
                color: #c24f08;
                font-family: 'Pacifico', cursive;
                font-size: 18pt;
            }

            #print-sheet h1 {
                margin: 4px 0 2px;
                font-family: 'Playfair Display', Georgia, serif;
                font-size: 26pt;
            }

            #print-sheet .print-cuisine {
                margin: 0;
                color: #555;
                font-weight: 700;
            }

            #print-sheet .print-meta {
                margin: 6px 0 12px;
                padding: 6px 0;
                border-top: 1px solid #999;
                border-bottom: 1px solid #999;
                font-weight: 700;
            }

            #print-sheet img {
                display: block;
                width: 100%;
                max-height: 70mm;
                margin: 0 0 12px;
                object-fit: cover;
                border-radius: 6px;
            }

            #print-sheet h2 {
                margin: 16px 0 6px;
                font-family: 'Playfair Display', Georgia, serif;
                font-size: 16pt;
                break-after: avoid;
            }

            #print-sheet ul,
            #print-sheet ol {
                margin: 0;
                padding-left: 22px;
            }

            #print-sheet li {
                margin-bottom: 5px;
                break-inside: avoid;
            }

            #print-sheet .print-footer {
                margin-top: 22px;
                color: #777;
                font-size: 9pt;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);
})();

/* SHARE */

document.getElementById("share-btn").addEventListener("click", async function () {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    const shareData = {
        title: recipe.name + " - Flavorly",
        text: recipe.description
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(
                shareData.title + "\n\n" + shareData.text
            );

            alert("Recipe details copied to clipboard!");
        } else {
            window.prompt(
                "Copy the recipe details below:",
                shareData.title + "\n\n" + shareData.text
            );
        }
    } catch (error) {
        if (error.name !== "AbortError") {
            alert("Unable to share this recipe right now.");
        }
    }
});

/* INITIAL DISPLAY */


const requestedCategory = (
    new URLSearchParams(window.location.search).get("type") || ""
).toLowerCase();

if (recipesByCuisine[requestedCategory]) {
    selectCategory(requestedCategory);

    const requestedRecipe = (
        new URLSearchParams(window.location.search).get("recipe") || ""
    ).toLowerCase();
    const requestedIndex = recipesByCuisine[requestedCategory].findIndex(function (recipe) {
        return recipe.name.toLowerCase() === requestedRecipe;
    });

    if (requestedIndex > 0) {
        selectRecipe(requestedIndex);
    }
} else {
    renderRecipeList();
    renderRecipeDetails();
}

loadSavedRecipes();