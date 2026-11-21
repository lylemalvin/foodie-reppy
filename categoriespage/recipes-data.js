// Single source of truth for all recipes.
// Used by the Categories page (script.js) and the homepage search (homepage/search.js).

export const recipesByCuisine = {
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

export const cuisineNames = {
    filipino: "Filipino Cuisine",
    japanese: "Japanese Cuisine",
    italian: "Italian Cuisine",
    chinese: "Chinese Cuisine",
    mexican: "Mexican Cuisine",
    indian: "Indian Cuisine",
    american: "American Cuisine"
};