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
    image.alt = recipe.name;
    image.loading = "lazy";
    setRecipeImage(image, recipe);

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

function setRecipeImage(img, recipe) {
    img.onerror = function () {
        this.onerror = function () {
            this.style.visibility = "hidden";
        };
        this.src = recipe.image;
    };

    img.src = recipe.photo || recipe.image;
}

function renderRecipeDetails() {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    recipeTitle.textContent = recipe.name;
    recipeImage.alt = recipe.name;
    recipeImage.style.visibility = "visible";
    setRecipeImage(recipeImage, recipe);

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

/* ---------- Picture guide for each step ---------- */

const STEP_ACTIONS = [
    { re: /\b(serve|garnish|plate)\w*/i, icon: "🍽️", label: "Serve" },
    { re: /\b(prep|cut|slice|chop|dice|mince|peel|shred|grate|julienne|trim|pound|crush|score|pit)\w*/i, icon: "🔪", label: "Prep" },
    { re: /\b(marinate|soak|rest|chill|refrigerate|cool|rise|rising|sit|set aside)\w*/i, icon: "⏳", label: "Rest" },
    { re: /\b(mix|whisk|stir|combine|beat|knead|toss|dissolve|blend|mash)\w*/i, icon: "🥣", label: "Mix" },
    { re: /\b(preheat|bake|roast|oven|broil)\w*/i, icon: "♨️", label: "Oven" },
    { re: /\b(grill|char)\w*/i, icon: "🔥", label: "Grill" },
    { re: /\b(fry|sauté|saute|sear|brown|toast|heat|cook|crisp)\w*/i, icon: "🍳", label: "Cook" },
    { re: /\b(boil|blanch|simmer|steam|poach|reduce)\w*/i, icon: "🫕", label: "Simmer" },
    { re: /\b(shape|roll|fill|seal|assemble|layer|arrange|wrap|thread|dredge|bread|coat|pipe|fold|spread)\w*/i, icon: "🤲", label: "Assemble" },
    { re: /\b(drain|rinse|wash|squeeze|pat|dry)\w*/i, icon: "💧", label: "Drain & dry" },
    { re: /\b(top|finish|taste|season|adjust)\w*/i, icon: "✅", label: "Finish" }
];

const STEP_STOP_WORDS = [
    "sauce", "powder", "paste", "juice", "seeds", "fresh", "ground", "sliced", "cooked", "whole",
    "large", "small", "dried", "extra", "virgin", "cooking", "boneless", "skinless", "grated",
    "minced", "chopped", "diced", "mixed", "plain", "heavy", "green", "black", "white", "brown",
    "light", "sweet", "sharp", "soft", "firm", "silken", "instant", "active", "purpose", "leaves",
    "ripe", "tart", "strong", "cooled", "hard", "boiled", "canned", "crushed", "thinly", "finely",
    "freshly", "pieces", "stalks", "cloves", "optional", "serving", "garnish", "taste", "bite"
];

function describeStep(step, recipe) {
    const labelMatch = step.match(/^([^:]{3,45}):\s/);
    const label = labelMatch ? labelMatch[1] : "";
    let action = null;

    // The bold label is the best clue; otherwise use whichever action word comes first
    for (const candidate of STEP_ACTIONS) {
        if (label && candidate.re.test(label)) {
            action = candidate;
            break;
        }
    }

    if (!action) {
        let bestIndex = Infinity;
        for (const candidate of STEP_ACTIONS) {
            const found = step.search(candidate.re);
            if (found !== -1 && found < bestIndex) {
                bestIndex = found;
                action = candidate;
            }
        }
    }

    const lower = step.toLowerCase();
    const ingredients = [];

    recipe.ingredients.forEach(function (ingredient) {
        const name = ingredient[1].split("(")[0].toLowerCase();
        const words = name.match(/[a-z]{4,}/g) || [];
        const matched = words.some(function (word) {
            if (STEP_STOP_WORDS.indexOf(word) !== -1) return false;
            return lower.indexOf(word.replace(/(es|s)$/, "")) !== -1;
        });

        if (matched && ingredients.length < 5 && !ingredients.some(function (item) {
            return item.icon === ingredient[0];
        })) {
            ingredients.push({ icon: ingredient[0], name: ingredient[1].split("(")[0].trim() });
        }
    });

    const chips = [];
    const timePattern = /(\d+(?:[–-]\d+)?)\s*(seconds?|minutes?|mins?|hours?|hrs?)\b/gi;
    let timeMatch;

    while ((timeMatch = timePattern.exec(step)) && chips.length < 2) {
        const unit = /^h/i.test(timeMatch[2]) ? "hr" : /^s/i.test(timeMatch[2]) ? "sec" : "min";
        chips.push("⏱ " + timeMatch[1] + " " + unit);
    }

    const temperature = step.match(/(\d+(?:[–-]\d+)?°C)(?:\s*\(([^)]*°F)\))?/);
    if (temperature) {
        chips.push("🌡 " + temperature[1] + (temperature[2] ? " / " + temperature[2] : ""));
    }

    return {
        icon: action ? action.icon : "👩‍🍳",
        label: action ? action.label : "Cook",
        ingredients: ingredients,
        chips: chips
    };
}

function buildStepVisual(step, recipe) {
    const info = describeStep(step, recipe);

    const box = document.createElement("div");
    box.className = "step-visual";

    const action = document.createElement("span");
    action.className = "step-action";

    const actionIcon = document.createElement("span");
    actionIcon.className = "step-action-icon";
    actionIcon.textContent = info.icon;
    action.append(actionIcon, info.label);
    box.appendChild(action);

    if (info.ingredients.length) {
        const list = document.createElement("span");
        list.className = "step-ingredients";

        info.ingredients.forEach(function (ingredient) {
            const icon = document.createElement("span");
            icon.textContent = ingredient.icon;
            icon.title = ingredient.name;
            list.appendChild(icon);
        });

        box.appendChild(list);
    }

    info.chips.forEach(function (text) {
        const chip = document.createElement("span");
        chip.className = "step-chip";
        chip.textContent = text;
        box.appendChild(chip);
    });

    return box;
}

// One step: bold label + instruction, the picture guide, and your own photo if you added one
function buildStepItem(step, index, recipe, withPhoto) {
    const item = document.createElement("li");

    const text = document.createElement("div");
    text.className = "step-text";
    fillStep(text, step);

    item.append(text, buildStepVisual(step, recipe));

    const photo = recipe.stepImages && recipe.stepImages[index];

    if (withPhoto && photo) {
        const image = document.createElement("img");
        image.className = "step-photo";
        image.src = photo;
        image.alt = "Step " + (index + 1) + ": " + recipe.name;
        image.loading = "lazy";
        image.onerror = function () {
            this.remove();
        };
        item.appendChild(image);
    }

    return item;
}

function ensureModalExtras() {
    if (document.getElementById("modal-steps")) return;

    const modalCard = recipeModal.querySelector(".modal-card");
    const note = modalCard.querySelector(".modal-note");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    const hero = document.createElement("img");
    hero.id = "modal-hero";
    hero.className = "modal-hero";
    modalCard.insertBefore(hero, title);

    const facts = document.createElement("div");
    facts.id = "modal-facts";
    facts.className = "modal-facts";
    modalCard.insertBefore(facts, description);

    function addSection(title, element, beforeNode) {
        const heading = document.createElement("h3");
        heading.textContent = title;
        heading.className = "modal-section-title";
        modalCard.insertBefore(heading, beforeNode || note);
        modalCard.insertBefore(element, beforeNode || note);
    }

    // Equipment goes right after the ingredients grid
    const ingredientsList = document.getElementById("modal-ingredients");
    const afterIngredients = ingredientsList.nextSibling;

    const equipment = document.createElement("ul");
    equipment.id = "modal-equipment";
    addSection("Equipment", equipment, afterIngredients);

    const steps = document.createElement("ol");
    steps.id = "modal-steps";
    addSection("Instructions", steps);

    const tips = document.createElement("ul");
    tips.id = "modal-tips";
    addSection("Chef's Tips", tips);

    const subs = document.createElement("ul");
    subs.id = "modal-subs";
    addSection("Substitutions", subs);

    const serve = document.createElement("p");
    serve.id = "modal-serve";
    addSection("Serve With", serve);

    const storage = document.createElement("p");
    storage.id = "modal-storage";
    addSection("Storage & Reheating", storage);

    const allergens = document.createElement("p");
    allergens.id = "modal-allergens";
    addSection("Allergen Info", allergens);

    const printButton = document.createElement("button");
    printButton.type = "button";
    printButton.className = "modal-print-btn";
    printButton.innerHTML = '<i class="fa-solid fa-print"></i> Print this recipe';
    printButton.addEventListener("click", printCurrentRecipe);
    modalCard.insertBefore(printButton, note);

    note.textContent = "Happy cooking!";
}

function getAllergenText(recipe) {
    const list = recipe.allergens || [];
    return (list.length ? "Contains: " + list.join(", ") + ". " : "No common allergens found in the ingredient list. ") +
        "This is based on the listed ingredients only. Always check the labels of the products you use.";
}

function fillList(listElement, items) {
    listElement.replaceChildren();

    (items || []).forEach(function (text) {
        const item = document.createElement("li");
        item.textContent = text;
        listElement.appendChild(item);
    });
}

document.getElementById("full-recipe-btn").addEventListener("click", function () {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    ensureModalExtras();

    const hero = document.getElementById("modal-hero");
    hero.alt = recipe.name;
    hero.style.visibility = "visible";
    setRecipeImage(hero, recipe);

    document.getElementById("modal-title").textContent = recipe.name;

    const facts = document.getElementById("modal-facts");
    facts.replaceChildren();

    [
        recipe.prep ? "🔪 Prep " + recipe.prep : "",
        recipe.cook ? "🔥 Cook " + recipe.cook : "",
        recipe.time ? "⏱ Total " + recipe.time : "",
        recipe.servings ? "🍽 " + recipe.servings : "",
        recipe.difficulty ? "📊 " + recipe.difficulty : ""
    ].filter(Boolean).forEach(function (text) {
        const chip = document.createElement("span");
        chip.className = "modal-fact";
        chip.textContent = text;
        facts.appendChild(chip);
    });

    document.getElementById("modal-description").textContent =
        recipe.description;

    const modalIngredients = document.getElementById("modal-ingredients");
    modalIngredients.replaceChildren();

    recipe.ingredients.forEach(function (ingredient) {
        const item = document.createElement("li");

        const icon = document.createElement("span");
        icon.className = "ing-emoji";
        icon.textContent = ingredient[0];

        const text = document.createElement("span");
        const match = ingredient[1].match(/^(.*?)\s*\((.*)\)$/);

        const name = document.createElement("span");
        name.className = "ing-name";
        name.textContent = match ? match[1] : ingredient[1];
        text.appendChild(name);

        if (match) {
            const amount = document.createElement("span");
            amount.className = "ing-amount";
            amount.textContent = match[2];
            text.appendChild(amount);
        }

        item.append(icon, text);
        modalIngredients.appendChild(item);
    });

    fillList(document.getElementById("modal-equipment"), recipe.equipment);

    const modalSteps = document.getElementById("modal-steps");
    modalSteps.replaceChildren();

    (recipe.steps || []).forEach(function (step, index) {
        modalSteps.appendChild(buildStepItem(step, index, recipe, true));
    });

    fillList(document.getElementById("modal-tips"), recipe.tips);
    fillList(document.getElementById("modal-subs"), recipe.subs);
    document.getElementById("modal-serve").textContent = recipe.serve || "";
    document.getElementById("modal-storage").textContent = recipe.storage || "";
    document.getElementById("modal-allergens").textContent = getAllergenText(recipe);

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

    function plainList(tag, items) {
        const listNode = document.createElement(tag);
        items.forEach(function (text) {
            listNode.appendChild(el("li", text));
        });
        return listNode;
    }

    const image = document.createElement("img");
    image.alt = recipe.name;
    setRecipeImage(image, recipe);

    const metaText = getTimeParts(recipe)
        .concat([
            recipe.servings ? "Serves: " + recipe.servings : "",
            recipe.difficulty ? "Difficulty: " + recipe.difficulty : ""
        ].filter(Boolean))
        .join("   |   ");

    const stepList = document.createElement("ol");
    stepList.className = "print-steps";
    (recipe.steps || []).forEach(function (step, index) {
        stepList.appendChild(buildStepItem(step, index, recipe, true));
    });

    sheet.append(
        el("p", "Flavorly", "print-brand"),
        el("h1", recipe.name),
        el("p", cuisineNames[currentCategory], "print-cuisine"),
        el("p", metaText, "print-meta"),
        image,
        el("p", recipe.description),
        el("h2", "Ingredients"),
        plainList("ul", recipe.ingredients.map(function (ingredient) {
            return ingredient[0] + " " + ingredient[1];
        }))
    );

    if (recipe.equipment && recipe.equipment.length) {
        sheet.append(el("h2", "Equipment"), el("p", recipe.equipment.join("  •  ")));
    }

    sheet.append(el("h2", "Instructions"), stepList);

    if (recipe.tips && recipe.tips.length) {
        sheet.append(el("h2", "Chef's Tips"), plainList("ul", recipe.tips));
    }

    if (recipe.subs && recipe.subs.length) {
        sheet.append(el("h2", "Substitutions"), plainList("ul", recipe.subs));
    }

    if (recipe.serve) {
        sheet.append(el("h2", "Serve With"), el("p", recipe.serve));
    }

    if (recipe.storage) {
        sheet.append(el("h2", "Storage & Reheating"), el("p", recipe.storage));
    }

    sheet.append(
        el("h2", "Allergen Info"),
        el("p", getAllergenText(recipe)),
        el("p", "Printed from Flavorly - Discover. Cook. Enjoy.", "print-footer")
    );
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
        .modal-hero {
            display: block;
            width: 100%;
            height: 210px;
            margin: 0 0 14px;
            border-radius: 14px;
            object-fit: cover;
        }

        .modal-facts {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 0 0 14px;
        }

        .modal-fact {
            padding: 6px 12px;
            border: 1px solid var(--border);
            border-radius: 20px;
            background: #fff;
            font-size: 12px;
            font-weight: 800;
        }

        .modal-section-title {
            margin-top: 22px;
        }

        #modal-ingredients {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
            gap: 8px;
            padding: 0;
            list-style: none;
        }

        #modal-ingredients li {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 10px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: #fff;
            line-height: 1.3;
        }

        .ing-emoji {
            font-size: 28px;
        }

        .ing-name {
            display: block;
            font-size: 13px;
            font-weight: 800;
        }

        .ing-amount {
            display: block;
            color: var(--muted);
            font-size: 12px;
        }

        #modal-equipment {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 0;
            list-style: none;
        }

        #modal-equipment li {
            padding: 5px 13px;
            border: 1px solid var(--border);
            border-radius: 20px;
            background: #fff;
            font-size: 12.5px;
            font-weight: 700;
        }

        #modal-steps {
            padding: 0;
            list-style: none;
            counter-reset: step;
        }

        #modal-steps li {
            position: relative;
            margin-bottom: 12px;
            padding: 12px 14px 12px 54px;
            border: 1px solid var(--border);
            border-radius: 14px;
            background: #fff;
            counter-increment: step;
        }

        #modal-steps li::before {
            content: counter(step);
            position: absolute;
            top: 12px;
            left: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--terracotta);
            color: #fff;
            font-size: 13px;
            font-weight: 900;
        }

        .step-visual {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            padding: 8px 12px;
            border-radius: 10px;
            background: var(--cream-dark, #fff0d8);
        }

        .step-action {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            font-weight: 800;
        }

        .step-action-icon {
            font-size: 24px;
        }

        .step-ingredients {
            display: inline-flex;
            gap: 4px;
            font-size: 22px;
        }

        .step-chip {
            padding: 3px 10px;
            border: 1px solid var(--border);
            border-radius: 14px;
            background: #fff;
            font-size: 11.5px;
            font-weight: 800;
        }

        .step-photo {
            display: block;
            width: 100%;
            margin-top: 10px;
            border-radius: 10px;
        }

        #modal-tips,
        #modal-subs {
            margin: 0 0 6px;
            padding-left: 22px;
        }

        #modal-serve,
        #modal-storage {
            margin: 0 0 6px;
        }

        #modal-allergens {
            margin: 0 0 18px;
            color: var(--muted);
            font-size: 13px;
        }

        .modal-print-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin: 6px 0 16px;
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
                font-size: 11.5pt;
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

            #print-sheet > img {
                display: block;
                width: 100%;
                max-height: 75mm;
                margin: 0 0 12px;
                border-radius: 6px;
                object-fit: cover;
            }

            #print-sheet h2 {
                margin: 16px 0 6px;
                padding-bottom: 2px;
                border-bottom: 1px solid #ccc;
                font-family: 'Playfair Display', Georgia, serif;
                font-size: 15pt;
                break-after: avoid;
            }

            #print-sheet ul,
            #print-sheet ol {
                margin: 0;
                padding-left: 22px;
            }

            #print-sheet ul li {
                margin-bottom: 4px;
                break-inside: avoid;
            }

            #print-sheet ol.print-steps li {
                margin-bottom: 10px;
                break-inside: avoid;
            }

            #print-sheet .step-visual {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 8px;
                margin-top: 3px;
                padding: 0;
                border-radius: 0;
                background: none;
                color: #555;
                font-size: 9.5pt;
            }

            #print-sheet .step-action-icon,
            #print-sheet .step-ingredients {
                font-size: 12pt;
            }

            #print-sheet .step-chip {
                padding: 0 7px;
                border: 1px solid #bbb;
                font-size: 9pt;
            }

            #print-sheet .step-photo {
                max-width: 90mm;
                margin-top: 5px;
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