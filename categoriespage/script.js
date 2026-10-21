
const recipesByCuisine = {
    filipino: [
        {
            name: "Adobo",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A popular Filipino dish made with meat marinated and cooked in soy sauce, vinegar, garlic, and spices. It's savory, tangy, and full of flavor, making it a household favorite in the Philippines.",
            servings: "4 servings",
            ingredients: [
                ["🥩", "Chicken or pork"],
                ["🌿", "Bay leaves"],
                ["🥣", "Soy sauce"],
                ["🌶️", "Black pepper"],
                ["🏺", "Vinegar"],
                ["💧", "Water"],
                ["🧄", "Garlic"]
            ]
        },
        {
            name: "Sinigang",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A comforting Filipino sour soup traditionally prepared with tamarind, vegetables, and pork or seafood. It is loved for its refreshing and savory broth.",
            servings: "4 servings",
            ingredients: [
                ["🥩", "Pork"],
                ["🍅", "Tomatoes"],
                ["🌿", "Kangkong"],
                ["🍆", "Eggplant"],
                ["🧅", "Onion"],
                ["🍋", "Tamarind"],
                ["💧", "Water"]
            ]
        },
        {
            name: "Tinola",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A warm Filipino chicken soup with ginger, green papaya, and leafy vegetables. Its light, aromatic broth makes it a comforting family meal.",
            servings: "4 servings",
            ingredients: [
                ["🍗", "Chicken"],
                ["🫚", "Ginger"],
                ["🧄", "Garlic"],
                ["🧅", "Onion"],
                ["🥬", "Chili leaves"],
                ["🥒", "Green papaya"],
                ["💧", "Water"]
            ]
        },
        {
            name: "Kare-Kare",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A rich Filipino stew known for its thick peanut sauce, tender meat, and vegetables. It is traditionally served with bagoong for extra flavor.",
            servings: "4 servings",
            ingredients: [
                ["🥩", "Beef or oxtail"],
                ["🥜", "Peanut butter"],
                ["🍆", "Eggplant"],
                ["🥬", "Pechay"],
                ["🫘", "String beans"],
                ["🧄", "Garlic"],
                ["🧅", "Onion"]
            ]
        },
        {
            name: "Sisig",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A flavorful Filipino dish commonly made with chopped pork, onions, calamansi, and seasonings. It is known for its savory taste and sizzling presentation.",
            servings: "3 servings",
            ingredients: [
                ["🥩", "Pork"],
                ["🧅", "Onion"],
                ["🍋", "Calamansi"],
                ["🌶️", "Chili"],
                ["🥚", "Egg"],
                ["🧂", "Salt"],
                ["⚫", "Pepper"]
            ]
        },
        {
            name: "Pancit",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85",
            description: "A beloved Filipino noodle dish tossed with vegetables, savory seasonings, and meat. Pancit is a familiar centerpiece at family gatherings and celebrations.",
            servings: "4 servings",
            ingredients: [
                ["🍜", "Rice noodles"],
                ["🥕", "Carrots"],
                ["🥬", "Cabbage"],
                ["🍗", "Chicken"],
                ["🧄", "Garlic"],
                ["🧅", "Onion"],
                ["🥣", "Soy sauce"]
            ]
        },
        {
            name: "Chicken Inasal",
            image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=85",
            description: "A Filipino grilled chicken specialty marinated with lemongrass, citrus, garlic, and spices. Its smoky aroma and savory flavor make it a favorite.",
            servings: "4 servings",
            ingredients: [
                ["🍗", "Chicken"],
                ["🍋", "Calamansi"],
                ["🧄", "Garlic"],
                ["🫚", "Ginger"],
                ["🌿", "Lemongrass"],
                ["🧂", "Salt"],
                ["🫒", "Oil"]
            ]
        },
        {
            name: "Bulalo",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A hearty Filipino beef soup prepared with beef shank, bone marrow, corn, and vegetables. Its rich broth is especially comforting on rainy days.",
            servings: "4 servings",
            ingredients: [
                ["🥩", "Beef shank"],
                ["🌽", "Corn"],
                ["🥬", "Pechay"],
                ["🧅", "Onion"],
                ["🥔", "Potatoes"],
                ["⚫", "Pepper"],
                ["💧", "Water"]
            ]
        },
        {
            name: "Lumpia",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85",
            description: "Crispy Filipino spring rolls filled with a savory mixture of vegetables and meat. They are often served as appetizers with a dipping sauce.",
            servings: "4 servings",
            ingredients: [
                ["🥕", "Carrots"],
                ["🥩", "Ground pork"],
                ["🧅", "Onion"],
                ["🧄", "Garlic"],
                ["🥬", "Cabbage"],
                ["🥚", "Egg"],
                ["🥟", "Lumpia wrappers"]
            ]
        },
        {
            name: "Bicol Express",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A spicy Filipino dish made with pork, coconut milk, and chili peppers. It combines creamy richness with a bold, spicy flavor.",
            servings: "4 servings",
            ingredients: [
                ["🥩", "Pork"],
                ["🥥", "Coconut milk"],
                ["🌶️", "Chili peppers"],
                ["🧄", "Garlic"],
                ["🧅", "Onion"],
                ["🦐", "Shrimp paste"]
            ]
        }
    ],

    japanese: [
        {
            name: "Sushi",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=85",
            description: "A Japanese favorite featuring seasoned rice paired with seafood, vegetables, or other flavorful fillings.",
            servings: "2 servings",
            ingredients: [
                ["🍚", "Sushi rice"],
                ["🐟", "Fish"],
                ["🥒", "Cucumber"],
                ["🌿", "Nori"],
                ["🍶", "Rice vinegar"],
                ["🧂", "Salt"]
            ]
        },
        {
            name: "Ramen",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85",
            description: "A comforting Japanese noodle soup served in a flavorful broth with noodles and a variety of toppings.",
            servings: "2 servings",
            ingredients: [
                ["🍜", "Ramen noodles"],
                ["🥚", "Egg"],
                ["🥩", "Pork"],
                ["🌿", "Green onion"],
                ["🍄", "Mushrooms"],
                ["🥣", "Broth"]
            ]
        },
        {
            name: "Tempura",
            image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=700&q=85",
            description: "Lightly battered seafood or vegetables fried until crisp and golden, commonly served with a dipping sauce.",
            servings: "3 servings",
            ingredients: [
                ["🍤", "Shrimp"],
                ["🥕", "Vegetables"],
                ["🌾", "Flour"],
                ["🥚", "Egg"],
                ["💧", "Water"],
                ["🫒", "Oil"]
            ]
        },
        {
            name: "Onigiri",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=700&q=85",
            description: "Japanese rice balls shaped by hand and often filled with savory ingredients or wrapped in seaweed.",
            servings: "2 servings",
            ingredients: [
                ["🍚", "Rice"],
                ["🌿", "Nori"],
                ["🐟", "Tuna"],
                ["🧂", "Salt"],
                ["🥣", "Mayonnaise"]
            ]
        }
    ],

    italian: [
        {
            name: "Pizza",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85",
            description: "A classic Italian favorite featuring a crisp crust, tomato sauce, melted cheese, and delicious toppings.",
            servings: "4 servings",
            ingredients: [
                ["🍞", "Pizza dough"],
                ["🍅", "Tomato sauce"],
                ["🧀", "Mozzarella"],
                ["🌿", "Basil"],
                ["🫒", "Olive oil"]
            ]
        },
        {
            name: "Spaghetti",
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=85",
            description: "A satisfying pasta dish served with a rich tomato sauce, herbs, and your choice of savory additions.",
            servings: "4 servings",
            ingredients: [
                ["🍝", "Spaghetti"],
                ["🍅", "Tomatoes"],
                ["🧄", "Garlic"],
                ["🧅", "Onion"],
                ["🧀", "Parmesan"],
                ["🌿", "Basil"]
            ]
        },
        {
            name: "Lasagna",
            image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=85",
            description: "Layers of pasta, savory sauce, and creamy cheese come together in this well-loved Italian baked dish.",
            servings: "6 servings",
            ingredients: [
                ["🍝", "Lasagna sheets"],
                ["🥩", "Ground beef"],
                ["🍅", "Tomato sauce"],
                ["🧀", "Mozzarella"],
                ["🥛", "Milk"],
                ["🧄", "Garlic"]
            ]
        },
        {
            name: "Risotto",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=700&q=85",
            description: "A creamy Italian rice dish made with broth, aromatics, and cheese for a rich and comforting meal.",
            servings: "3 servings",
            ingredients: [
                ["🍚", "Arborio rice"],
                ["🧅", "Onion"],
                ["🧈", "Butter"],
                ["🧀", "Parmesan"],
                ["🥣", "Broth"]
            ]
        }
    ],

    chinese: [
        {
            name: "Fried Rice",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85",
            description: "A versatile Chinese-style rice dish tossed with vegetables, egg, and savory seasonings.",
            servings: "3 servings",
            ingredients: [
                ["🍚", "Cooked rice"],
                ["🥚", "Egg"],
                ["🥕", "Carrots"],
                ["🟢", "Peas"],
                ["🧅", "Green onion"],
                ["🥣", "Soy sauce"]
            ]
        },
        {
            name: "Dumplings",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=85",
            description: "Delicate dough wrappers filled with a savory mixture of meat and vegetables, enjoyed steamed or pan-fried.",
            servings: "3 servings",
            ingredients: [
                ["🥟", "Dumpling wrappers"],
                ["🥩", "Ground pork"],
                ["🥬", "Cabbage"],
                ["🧄", "Garlic"],
                ["🫚", "Ginger"],
                ["🥣", "Soy sauce"]
            ]
        },
        {
            name: "Chow Mein",
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=85",
            description: "A popular noodle dish tossed with crunchy vegetables and a savory sauce.",
            servings: "3 servings",
            ingredients: [
                ["🍜", "Noodles"],
                ["🥕", "Carrots"],
                ["🥬", "Cabbage"],
                ["🧄", "Garlic"],
                ["🧅", "Onion"],
                ["🥣", "Soy sauce"]
            ]
        },
        {
            name: "Sweet and Sour Chicken",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85",
            description: "Crispy chicken pieces coated in a tangy sweet-and-sour sauce with colorful vegetables.",
            servings: "4 servings",
            ingredients: [
                ["🍗", "Chicken"],
                ["🍍", "Pineapple"],
                ["🫑", "Bell pepper"],
                ["🍅", "Ketchup"],
                ["🍚", "Vinegar"],
                ["🍬", "Sugar"]
            ]
        }
    ],

    mexican: [
        {
            name: "Tacos",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=700&q=85",
            description: "Flavorful tortillas filled with seasoned meat, fresh vegetables, and tasty toppings.",
            servings: "3 servings",
            ingredients: [
                ["🌮", "Tortillas"],
                ["🥩", "Ground beef"],
                ["🥬", "Lettuce"],
                ["🍅", "Tomatoes"],
                ["🧀", "Cheese"],
                ["🍋", "Lime"]
            ]
        },
        {
            name: "Burrito",
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=85",
            description: "A filling flour tortilla wrapped around rice, beans, meat, and a selection of toppings.",
            servings: "2 servings",
            ingredients: [
                ["🌯", "Tortillas"],
                ["🍚", "Rice"],
                ["🫘", "Beans"],
                ["🥩", "Beef"],
                ["🧀", "Cheese"],
                ["🥑", "Avocado"]
            ]
        },
        {
            name: "Quesadilla",
            image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=700&q=85",
            description: "A toasted tortilla filled with melted cheese and other savory ingredients.",
            servings: "2 servings",
            ingredients: [
                ["🫓", "Tortillas"],
                ["🧀", "Cheese"],
                ["🍗", "Chicken"],
                ["🫑", "Bell pepper"],
                ["🧅", "Onion"]
            ]
        }
    ],

    indian: [
        {
            name: "Chicken Curry",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85",
            description: "A richly spiced chicken dish with a fragrant sauce, often served with rice or flatbread.",
            servings: "4 servings",
            ingredients: [
                ["🍗", "Chicken"],
                ["🧅", "Onion"],
                ["🍅", "Tomatoes"],
                ["🥥", "Coconut milk"],
                ["🌶️", "Curry spices"],
                ["🧄", "Garlic"]
            ]
        },
        {
            name: "Biryani",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=85",
            description: "An aromatic rice dish layered with fragrant spices and meat or vegetables.",
            servings: "4 servings",
            ingredients: [
                ["🍚", "Basmati rice"],
                ["🍗", "Chicken"],
                ["🧅", "Onion"],
                ["🧄", "Garlic"],
                ["🌿", "Fresh herbs"],
                ["🌶️", "Spices"]
            ]
        },
        {
            name: "Samosa",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85",
            description: "Crispy triangular pastries with a savory filling of potatoes, peas, and fragrant spices.",
            servings: "4 servings",
            ingredients: [
                ["🥔", "Potatoes"],
                ["🟢", "Peas"],
                ["🌾", "Flour"],
                ["🌶️", "Spices"],
                ["🧅", "Onion"],
                ["🫒", "Oil"]
            ]
        }
    ],

    american: [
        {
            name: "Burger",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
            description: "A classic burger featuring a juicy patty, fresh vegetables, cheese, and sauces in a soft bun.",
            servings: "2 servings",
            ingredients: [
                ["🍞", "Burger buns"],
                ["🥩", "Beef patties"],
                ["🧀", "Cheese"],
                ["🍅", "Tomatoes"],
                ["🥬", "Lettuce"],
                ["🧅", "Onion"]
            ]
        },
        {
            name: "Pancakes",
            image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=85",
            description: "Fluffy breakfast pancakes served with butter and syrup for a sweet and satisfying start to the day.",
            servings: "3 servings",
            ingredients: [
                ["🌾", "Flour"],
                ["🥚", "Eggs"],
                ["🥛", "Milk"],
                ["🧈", "Butter"],
                ["🍬", "Sugar"],
                ["🍯", "Syrup"]
            ]
        },
        {
            name: "Fried Chicken",
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=85",
            description: "Crispy golden chicken with a flavorful coating and a juicy interior, a popular comfort food.",
            servings: "4 servings",
            ingredients: [
                ["🍗", "Chicken"],
                ["🌾", "Flour"],
                ["🥚", "Eggs"],
                ["🥛", "Milk"],
                ["🧂", "Salt"],
                ["🌶️", "Seasonings"]
            ]
        }
    ]
};

const cuisineNames = {
    filipino: "Filipino Cuisine",
    japanese: "Japanese Cuisine",
    italian: "Italian Cuisine",
    chinese: "Chinese Cuisine",
    mexican: "Mexican Cuisine",
    indian: "Indian Cuisine",
    american: "American Cuisine"
};

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
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    const key = currentCategory + "-" + recipe.name;

    if (favoriteRecipes.has(key)) {
        favoriteRecipes.delete(key);
    } else {
        favoriteRecipes.add(key);
    }

    updateActionButtons();
});

/* BOOKMARKS */

document.getElementById("bookmark-btn").addEventListener("click", function () {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    const key = currentCategory + "-" + recipe.name;

    if (bookmarkedRecipes.has(key)) {
        bookmarkedRecipes.delete(key);
    } else {
        bookmarkedRecipes.add(key);
    }

    updateActionButtons();
});

/* FULL RECIPE MODAL */

const recipeModal = document.getElementById("recipe-modal");

document.getElementById("full-recipe-btn").addEventListener("click", function () {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    document.getElementById("modal-title").textContent = recipe.name;
    document.getElementById("modal-description").textContent =
        recipe.description;

    const modalIngredients = document.getElementById("modal-ingredients");
    modalIngredients.replaceChildren();

    recipe.ingredients.forEach(function (ingredient) {
        const item = document.createElement("li");
        item.textContent = ingredient[0] + " " + ingredient[1];
        modalIngredients.appendChild(item);
    });

    recipeModal.classList.add("open");
    recipeModal.setAttribute("aria-hidden", "false");

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

document.getElementById("print-btn").addEventListener("click", function () {
    window.print();
});

/* SHARE */

document.getElementById("share-btn").addEventListener("click", async function () {
    const recipe = getCurrentRecipe();

    if (!recipe) return;

    const shareData = {
        title: recipe.name + " - Foodie Reppy",
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

renderRecipeList();
renderRecipeDetails();
