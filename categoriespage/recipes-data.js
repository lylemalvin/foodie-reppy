// Single source of truth for all recipes.
// Used by the Categories page (script.js) and the homepage search (homepage/search.js).
//
// Each recipe has: name, image, description, servings, time, difficulty,
// prep and cook (times), ingredients ([emoji, "Ingredient (amount)"]), steps (detailed instructions),
// tips (chef's tips) and storage (storing and reheating).
//
// Recipes without a photo use ph(...) to draw a colored placeholder card.
// To use a real photo, replace the image value with a URL or a path such as "images/recipes/ramen.jpg".

const palette = {
    filipino: ["#f6c453", "#e9431b"],
    japanese: ["#f5a3b5", "#c2334d"],
    italian: ["#9ed08b", "#2f8f4e"],
    chinese: ["#f08a5d", "#b83b1d"],
    mexican: ["#ffd166", "#ef476f"],
    indian: ["#ffb347", "#c0562b"],
    american: ["#7cb7ff", "#2b59c3"]
};

const ph = (emoji, cuisine, name) => {
    const [a, b] = palette[cuisine];
    const svg =
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 500'>" +
        "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
        "<stop offset='0' stop-color='" + a + "'/><stop offset='1' stop-color='" + b + "'/>" +
        "</linearGradient></defs><rect width='700' height='500' fill='url(#g)'/>" +
        "<text x='350' y='270' font-size='190' text-anchor='middle'>" + emoji + "</text>" +
        "<text x='350' y='415' font-size='46' font-family='Georgia, serif' fill='white' text-anchor='middle'>" + name + "</text>" +
        "</svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
};

export const recipesByCuisine = {
    filipino: [
        {
            name: "Adobo",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A popular Filipino dish made with meat marinated and cooked in soy sauce, vinegar, garlic, and spices. It's savory, tangy, and full of flavor, making it a household favorite in the Philippines.",
            servings: "4 servings",
            time: "50 mins",
            difficulty: "Easy",
            prep: "10 mins (+ 30 mins marinating)",
            cook: "40 mins",
            ingredients: [
                ["🥩", "Chicken or pork (1 kg)"],
                ["🌿", "Bay leaves (3 pcs)"],
                ["🥣", "Soy sauce (1/3 cup)"],
                ["🌶️", "Black pepper (1 tsp whole)"],
                ["🏺", "Vinegar (1/2 cup)"],
                ["💧", "Water (1 cup)"],
                ["🧄", "Garlic (1 head, crushed)"],
                ["🫒", "Cooking oil (1 tbsp, optional, for browning)"]
            ],
            steps: [
                "Prep the meat: Pat the chicken or pork dry and cut it into 4–5 cm (about 2 in) pieces. Bone-in chicken thighs, drumsticks or pork belly stay the juiciest.",
                "Prep the garlic: Separate the cloves from the head, peel them, and smash each one with the flat of a knife so it releases its aroma.",
                "Marinate: In a bowl, toss the meat with the soy sauce, half of the vinegar, the garlic and the black pepper. Cover and rest for 30 minutes at room temperature, or overnight in the refrigerator.",
                "Start the pot: Transfer everything, including the marinade, to a heavy pot. Add the bay leaves and the rest of the vinegar.",
                "Cook off the vinegar: Bring to a boil over medium-high heat and leave it without stirring for 2–3 minutes. This mellows the sharp vinegar smell and keeps the sauce balanced.",
                "Simmer: Pour in the water, lower the heat, cover and simmer for 30–35 minutes for chicken (45–50 minutes for pork belly), until a knife slides in easily.",
                "Brown for extra flavor (optional): Lift out the meat and pat it dry. Brown it in the oil for 2 minutes per side, until the edges are golden and crisp.",
                "Reduce the sauce: Simmer the sauce uncovered for 5–8 minutes until it lightly coats a spoon. Skim off excess oil from the surface if you like.",
                "Finish: Return the meat to the pot and spoon the sauce over it for 1 minute. Taste and adjust: a pinch of sugar softens a sharp sauce, and a splash of soy sauce deepens a bland one.",
                "Serve: Serve hot over steamed rice. Adobo tastes even better the next day."
            ],
            tips: [
                "Do not stir right after adding the vinegar. Letting it boil undisturbed for a few minutes removes the harsh edge.",
                "Cane vinegar (sukang maasim) gives the most authentic taste, but white vinegar works well too.",
                "For a creamy version (adobo sa gata), stir in 1/2 cup of coconut milk during the final reduction."
            ],
            storage: "Keeps 5 days in an airtight container in the refrigerator, or 2 months in the freezer. Reheat gently with a splash of water."
        },
        {
            name: "Sinigang",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A comforting Filipino sour soup traditionally prepared with tamarind, vegetables, and pork or seafood. It is loved for its refreshing and savory broth.",
            servings: "4 servings",
            time: "1 hr 15 mins",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "1 hr",
            ingredients: [
                ["🥩", "Pork (600 g pork ribs)"],
                ["🍅", "Tomatoes (2 medium, quartered)"],
                ["🌿", "Kangkong (1 bunch)"],
                ["🍆", "Eggplant (2 pcs, sliced)"],
                ["🧅", "Onion (1 large, quartered)"],
                ["🍋", "Tamarind (40 g mix or 12 fresh pods)"],
                ["💧", "Water (8 cups)"],
                ["🐟", "Fish sauce (2 tbsp)"]
            ],
            steps: [
                "Prep the ingredients: Cut the pork into 4 cm pieces. Quarter the tomatoes and onion, slice the eggplant on the diagonal into 2 cm pieces, and cut the kangkong into 5 cm lengths, keeping the stems and leaves separate.",
                "Clean the pork: Put the pork in a pot, cover with water, and boil for 5 minutes. Drain, then rinse the pork and the pot. This keeps the final broth clear.",
                "Build the broth: Return the pork to the pot with 8 cups of fresh water, the onion and the tomatoes. Bring to a boil over high heat.",
                "Skim: For the first 5 minutes, skim off the foam and scum that rises to the surface.",
                "Simmer: Reduce the heat to low, partly cover, and simmer for 45–60 minutes until the pork is fork-tender. Press a tomato against the side of the pot to release its juices into the broth.",
                "Add the sourness: Stir in the tamarind mix. If using fresh tamarind, boil the pods in 1 cup of water for 10 minutes, mash, strain into the pot, and discard the seeds. Simmer for 5 minutes.",
                "Season: Add the fish sauce a tablespoon at a time and taste. The broth should taste sour first and salty second.",
                "Add the vegetables: Add the eggplant and cook for 5 minutes. Add the kangkong stems for 1 minute, then the leaves, and turn off the heat right away.",
                "Serve: Ladle into deep bowls and serve with steamed rice, plus fish sauce and chili on the side."
            ],
            tips: [
                "Brands of tamarind mix vary in strength, so add it gradually and taste as you go.",
                "Add vegetables in order of cooking time so nothing turns mushy.",
                "Swap the pork for shrimp (cook only 3–5 minutes) or salmon belly for a quicker version."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat gently and add fresh kangkong to revive the greens."
        },
        {
            name: "Tinola",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A warm Filipino chicken soup with ginger, green papaya, and leafy vegetables. Its light, aromatic broth makes it a comforting family meal.",
            servings: "4 servings",
            time: "50 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "40 mins",
            ingredients: [
                ["🍗", "Chicken (1 kg, cut into pieces)"],
                ["🫚", "Ginger (2-inch piece, sliced)"],
                ["🧄", "Garlic (4 cloves)"],
                ["🧅", "Onion (1 medium, sliced)"],
                ["🥬", "Chili leaves (2 cups)"],
                ["🥒", "Green papaya (1 medium, in wedges)"],
                ["💧", "Water (6 cups)"],
                ["🐟", "Fish sauce (2 tbsp)"],
                ["🫒", "Cooking oil (1 tbsp)"]
            ],
            steps: [
                "Prep the chicken: Cut the chicken into serving pieces, keeping the bones in for flavor, and pat dry.",
                "Prep the aromatics: Peel the ginger and slice it into thin matchsticks. Mince the garlic and slice the onion.",
                "Prep the vegetables: Peel the green papaya, halve it, scoop out the seeds, and cut it into thick wedges about 3 cm wide. Pick the chili leaves off their stems.",
                "Sauté: Heat the oil in a pot over medium heat. Cook the ginger, garlic and onion for about 2 minutes until fragrant and softened.",
                "Brown the chicken: Add the chicken and cook for 5 minutes, turning, until lightly browned on the outside. Pour in the fish sauce and stir for 1 minute.",
                "Simmer: Add the water, bring to a boil, then cover and simmer for 25 minutes until the chicken is cooked through and the broth is flavorful.",
                "Add the papaya: Add the green papaya and cook for 8–10 minutes until a fork goes through easily but it still holds its shape.",
                "Finish: Stir in the chili leaves, cook for 1 minute until just wilted, then taste and adjust with fish sauce or salt.",
                "Serve: Serve piping hot with steamed rice."
            ],
            tips: [
                "If you cannot find green papaya, use chayote (sayote) for a similar texture.",
                "Do not boil the chili leaves for long, or they turn bitter and lose color.",
                "A drop of calamansi juice at the table brightens the broth."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat gently over low heat so the papaya does not break down."
        },
        {
            name: "Kare-Kare",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A rich Filipino stew known for its thick peanut sauce, tender meat, and vegetables. It is traditionally served with bagoong for extra flavor.",
            servings: "4 servings",
            time: "2 hrs 30 mins",
            difficulty: "Medium",
            prep: "25 mins",
            cook: "2 hrs 10 mins",
            ingredients: [
                ["🥩", "Beef or oxtail (1 kg, cut into chunks)"],
                ["🥜", "Peanut butter (1/2 cup)"],
                ["🍆", "Eggplant (2 pcs, sliced)"],
                ["🥬", "Pechay (2 bunches)"],
                ["🫘", "String beans (1 bunch (about 150 g))"],
                ["🧄", "Garlic (4 cloves, minced)"],
                ["🧅", "Onion (1 medium, chopped)"],
                ["🫒", "Cooking oil (2 tbsp)"],
                ["🧂", "Salt (to taste)"],
                ["🦐", "Bagoong, for serving"]
            ],
            steps: [
                "Prep the beef: Cut the beef or oxtail into 4–5 cm chunks. Rinse well and pat dry.",
                "Tenderize: Place the beef in a large pot, cover with about 8 cups of water, and bring to a boil. Skim off the scum, then lower the heat, cover and simmer for 2 hours (or 45 minutes in a pressure cooker) until very tender.",
                "Reserve the broth: Lift the beef out and strain the broth. Measure out 4 cups to use for the sauce.",
                "Prep the vegetables: Slice the eggplant into thick rounds, cut the string beans into 6 cm lengths, and trim the pechay.",
                "Start the sauce: In a clean pot, heat the oil over medium heat. Sauté the garlic for 30 seconds, then the onion for 3 minutes until soft.",
                "Add the peanut butter: Stir in the peanut butter until it melts into the onion mixture, then slowly pour in the reserved broth while stirring so it does not clump.",
                "Thicken: Simmer the sauce for 10 minutes, stirring now and then, until it thickens and turns rich and glossy.",
                "Cook the vegetables: Return the beef to the sauce. Add the eggplant and string beans and cook for 5 minutes, then add the pechay for 2 minutes.",
                "Season and serve: Taste and add salt. Serve with steamed rice and bagoong on the side."
            ],
            tips: [
                "Bagoong (shrimp paste) is not optional in the Filipino table. Its saltiness balances the mild, nutty sauce.",
                "For a deeper color, add a little annatto (atsuete) water to the sauce.",
                "Make the beef a day ahead. It speeds up dinner and the flavor improves."
            ],
            storage: "Keeps 4 days in the refrigerator. The sauce thickens as it cools, so loosen it with a little water when reheating."
        },
        {
            name: "Sisig",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A flavorful Filipino dish commonly made with chopped pork, onions, calamansi, and seasonings. It is known for its savory taste and sizzling presentation.",
            servings: "3 servings",
            time: "1 hr 30 mins",
            difficulty: "Medium",
            prep: "20 mins",
            cook: "1 hr 10 mins",
            ingredients: [
                ["🥩", "Pork (500 g pork belly)"],
                ["🧅", "Onion (1 large, chopped)"],
                ["🍋", "Calamansi (6 pcs, juiced)"],
                ["🌶️", "Chili (3 pcs, chopped)"],
                ["🥚", "Egg (1 per serving)"],
                ["🧂", "Salt (1 tsp)"],
                ["⚫", "Pepper (1/2 tsp)"]
            ],
            steps: [
                "Boil the pork: Place the pork belly in a pot with enough water to cover, add a teaspoon of the salt and the pepper, and boil for 40 minutes until tender.",
                "Dry it well: Drain and pat the pork very dry with paper towels. Moisture is the enemy of crispiness.",
                "Crisp the pork: Grill the pork over medium-high heat or pan-fry it for 5–6 minutes per side until the skin is blistered, golden and crisp.",
                "Chop: Let it rest for 5 minutes, then chop into small 5 mm pieces.",
                "Prep the toppings: Chop the onion and chilies finely. Squeeze the calamansi and strain out the seeds.",
                "Sauté: Heat a skillet over high heat. Cook the onion and chilies for 2 minutes until fragrant.",
                "Combine: Add the chopped pork, the calamansi juice, and the remaining salt and pepper. Toss for 2–3 minutes until sizzling and well mixed.",
                "Add the egg: Make a well in the center, crack in an egg and stir it quickly through, or top the dish with a fried egg.",
                "Serve: Serve on a preheated sizzling plate or the skillet itself, with extra calamansi on the side."
            ],
            tips: [
                "Fully drying the pork before frying is what gives sisig its signature crunch.",
                "For a richer version, add 2 tablespoons of chicken liver spread (or mayonnaise) while tossing.",
                "Sisig pairs well with cold drinks and plain steamed rice."
            ],
            storage: "Best eaten fresh. Leftovers keep 2 days in the refrigerator; re-crisp in a hot pan, not the microwave."
        },
        {
            name: "Pancit",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85",
            description: "A beloved Filipino noodle dish tossed with vegetables, savory seasonings, and meat. Pancit is a familiar centerpiece at family gatherings and celebrations.",
            servings: "4 servings",
            time: "35 mins",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "20 mins",
            ingredients: [
                ["🍜", "Rice noodles (250 g)"],
                ["🥕", "Carrots (1 medium, julienned)"],
                ["🥬", "Cabbage (2 cups, shredded)"],
                ["🍗", "Chicken (200 g, sliced)"],
                ["🧄", "Garlic (4 cloves, minced)"],
                ["🧅", "Onion (1 medium, sliced)"],
                ["🥣", "Soy sauce (1/4 cup)"],
                ["🫒", "Cooking oil (2 tbsp)"],
                ["🍋", "Calamansi (4 pcs), for serving"]
            ],
            steps: [
                "Soak the noodles: Soak the rice noodles in warm water for 10 minutes until pliable, then drain well.",
                "Prep the vegetables: Julienne the carrots into matchsticks, shred the cabbage, and slice the onion. Mince the garlic.",
                "Prep the chicken: Slice the chicken into thin strips, about 5 mm thick, so it cooks quickly.",
                "Sauté the aromatics: Heat the oil in a large wok or pan over medium-high heat. Cook the garlic and onion for 1 minute until fragrant.",
                "Cook the chicken: Add the chicken and stir-fry for 4–5 minutes until no longer pink.",
                "Add the vegetables: Add the carrots and cabbage and stir-fry for 3 minutes until crisp-tender.",
                "Season the liquid: Pour in the soy sauce and about 1 cup of water, then bring to a simmer.",
                "Add the noodles: Add the noodles and toss constantly for 3–4 minutes until they absorb all the liquid and are tender.",
                "Serve: Taste and adjust the seasoning, then serve hot with calamansi wedges squeezed over the top."
            ],
            tips: [
                "Do not over-soak the noodles. They will keep softening in the pan.",
                "Add a handful of sliced shrimp or Chinese sausage for a festive version.",
                "Pancit is traditionally served at birthdays, as the long noodles symbolize long life."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat in a pan with a splash of water."
        },
        {
            name: "Chicken Inasal",
            image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=85",
            description: "A Filipino grilled chicken specialty marinated with lemongrass, citrus, garlic, and spices. Its smoky aroma and savory flavor make it a favorite.",
            servings: "4 servings",
            time: "1 hr (+ marinating)",
            difficulty: "Easy",
            prep: "15 mins (+ 4 hrs marinating)",
            cook: "45 mins",
            ingredients: [
                ["🍗", "Chicken (1 kg leg quarters)"],
                ["🍋", "Calamansi (1/2 cup juice)"],
                ["🧄", "Garlic (6 cloves, minced)"],
                ["🫚", "Ginger (2 tbsp, grated)"],
                ["🌿", "Lemongrass (2 stalks, pounded)"],
                ["🧂", "Salt (1 tbsp)"],
                ["🫒", "Oil (3 tbsp)"]
            ],
            steps: [
                "Make the marinade: In a large bowl, mix the calamansi juice, garlic, ginger, lemongrass (white part only, pounded), salt and half of the oil.",
                "Prep the chicken: Pat the chicken dry. Score the thickest parts with a knife, 1 cm deep, so the marinade can soak in.",
                "Marinate: Coat the chicken thoroughly, cover, and marinate in the refrigerator for at least 4 hours, preferably overnight.",
                "Heat the grill: Bring the chicken to room temperature for 20 minutes. Heat the grill to medium and brush the grates with oil.",
                "Grill: Place the chicken skin-side down and grill for 35–40 minutes, turning every 8–10 minutes.",
                "Baste: Brush with the remaining oil (mixed with a spoonful of the marinade, if you like) every time you turn the chicken.",
                "Check doneness: The chicken is done when the juices run clear and the thickest part reaches 74°C (165°F).",
                "Rest: Let the chicken rest for 5 minutes before serving.",
                "Serve: Serve with garlic rice, and a dipping sauce of calamansi, soy sauce and chili."
            ],
            tips: [
                "Do not skip the lemongrass. It gives inasal its distinctive aroma.",
                "No grill? Roast at 220°C (425°F) for 35–40 minutes, then broil for 3 minutes for char.",
                "Baste with annatto oil for the classic orange-gold color."
            ],
            storage: "Keeps 4 days in the refrigerator. Reheat in a 180°C (350°F) oven for 15 minutes to keep the skin crisp."
        },
        {
            name: "Bulalo",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A hearty Filipino beef soup prepared with beef shank, bone marrow, corn, and vegetables. Its rich broth is especially comforting on rainy days.",
            servings: "4 servings",
            time: "3 hrs",
            difficulty: "Medium",
            prep: "20 mins",
            cook: "2 hrs 40 mins",
            ingredients: [
                ["🥩", "Beef shank (1 kg, bone-in)"],
                ["🌽", "Corn (2 ears, cut in thirds)"],
                ["🥬", "Pechay (1 bunch)"],
                ["🧅", "Onion (1 large, quartered)"],
                ["🥔", "Potatoes (2 medium, halved)"],
                ["⚫", "Pepper (1 tsp whole)"],
                ["💧", "Water (10 cups)"],
                ["🐟", "Fish sauce (to taste)"]
            ],
            steps: [
                "Blanch the beef: Put the beef shank in a large pot, cover with the water, and boil for 10 minutes. Drain and rinse the beef and the pot to remove impurities.",
                "Start the broth: Return the beef to the pot with fresh water, the onion and the peppercorns. Bring to a boil.",
                "Skim: Skim off any foam that rises during the first 10 minutes.",
                "Simmer low and slow: Reduce the heat to low, cover, and simmer for 2 hours until the meat pulls easily from the bone. Top up with hot water if the level drops.",
                "Prep the vegetables: Cut the corn into thirds and halve the potatoes. Trim the pechay.",
                "Add the starchy vegetables: Add the potatoes and corn and simmer for 20 minutes until tender.",
                "Season: Add fish sauce to taste. Season gradually, since the broth reduces as it simmers.",
                "Add the greens: Add the pechay and cook for 2 minutes.",
                "Serve: Ladle into bowls so each has a piece of shank with marrow. Serve with rice and a dip of fish sauce, calamansi and chili."
            ],
            tips: [
                "Scoop out the bone marrow and spread it on hot rice. It is the best part.",
                "A pressure cooker cuts the cooking time to about 50 minutes.",
                "Skimming and the first blanching are what make the broth crystal clear."
            ],
            storage: "Keeps 4 days in the refrigerator. Skim off the solidified fat before reheating if you prefer a lighter broth."
        },
        {
            name: "Lumpia",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85",
            description: "Crispy Filipino spring rolls filled with a savory mixture of vegetables and meat. They are often served as appetizers with a dipping sauce.",
            servings: "4 servings",
            time: "45 mins",
            difficulty: "Medium",
            prep: "30 mins",
            cook: "15 mins",
            ingredients: [
                ["🥕", "Carrots (1 medium, minced)"],
                ["🥩", "Ground pork (300 g)"],
                ["🧅", "Onion (1 medium, minced)"],
                ["🧄", "Garlic (3 cloves, minced)"],
                ["🥬", "Cabbage (1 cup, finely chopped)"],
                ["🥚", "Egg (1 beaten, for sealing)"],
                ["🥟", "Lumpia wrappers (20 pieces)"],
                ["🫒", "Oil for frying (2 cups)"]
            ],
            steps: [
                "Prep the filling ingredients: Finely mince the onion and garlic, shred the carrots, and finely chop the cabbage so everything cooks evenly and fits inside the wrapper.",
                "Cook the pork: Heat a little oil in a pan. Sauté the garlic and onion for 2 minutes, then add the ground pork and cook for 5–6 minutes until browned, breaking up the lumps.",
                "Add the vegetables: Stir in the carrots and cabbage and cook for 3–4 minutes. Season with salt and pepper.",
                "Cool completely: Spread the filling on a plate and cool for 15 minutes. Warm filling will tear the wrappers.",
                "Prep the wrappers: Keep the wrappers covered with a damp towel so they do not dry out.",
                "Roll: Place 2 tablespoons of filling near one corner of a wrapper, fold the corner over, tuck in the sides, and roll tightly. Seal the edge with a dab of beaten egg.",
                "Heat the oil: Heat the frying oil in a deep pan to 175°C (350°F). A wooden spoon dipped in should sizzle steadily.",
                "Fry: Fry in batches of 5–6 for 3–4 minutes, turning, until deep golden. Do not crowd the pan.",
                "Drain and serve: Drain on paper towels or a wire rack. Serve hot with sweet chili sauce or banana ketchup."
            ],
            tips: [
                "Roll tightly and squeeze out air pockets so the lumpia stay crisp and do not burst.",
                "Freeze uncooked rolls on a tray, then bag them. Fry straight from frozen, adding 1–2 minutes.",
                "Use a thermometer if possible. Oil that is too cool makes greasy lumpia."
            ],
            storage: "Cooked lumpia keep 3 days in the refrigerator. Re-crisp in a 190°C (375°F) oven or air fryer for 6–8 minutes."
        },
        {
            name: "Bicol Express",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
            description: "A spicy Filipino dish made with pork, coconut milk, and chili peppers. It combines creamy richness with a bold, spicy flavor.",
            servings: "4 servings",
            time: "1 hr",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "45 mins",
            ingredients: [
                ["🥩", "Pork (500 g pork belly, cubed)"],
                ["🥥", "Coconut milk (2 cups)"],
                ["🌶️", "Chili peppers (6 finger chilies, sliced)"],
                ["🧄", "Garlic (4 cloves, minced)"],
                ["🧅", "Onion (1 medium, chopped)"],
                ["🦐", "Shrimp paste (2 tbsp)"]
            ],
            steps: [
                "Prep the pork: Cut the pork belly into 2–3 cm cubes and pat dry.",
                "Prep the aromatics: Mince the garlic, chop the onion, and slice the chilies into rings. Remove the seeds from half of them if you prefer less heat.",
                "Sauté: Heat a pan over medium heat. Cook the pork in its own fat for 8–10 minutes until browned and some fat renders out.",
                "Add the aromatics: Add the garlic and onion and cook for 2–3 minutes until soft.",
                "Add the shrimp paste: Stir in the shrimp paste and cook for 1 minute until aromatic.",
                "Add the coconut milk: Pour in the coconut milk, scraping up the browned bits from the bottom of the pan.",
                "Simmer: Cook on low heat for 20–25 minutes, uncovered, stirring now and then, until the pork is tender.",
                "Add the chilies: Add the chilies and simmer for 5–10 minutes until the sauce is thick and the oil separates and glistens.",
                "Serve: Taste and adjust. Serve with plenty of steamed rice."
            ],
            tips: [
                "Do not cover the pot while simmering. The coconut milk can curdle and the sauce will not thicken.",
                "Use siling labuyo for fiery heat or finger chilies for a milder version.",
                "Add a handful of green beans or eggplant for a heartier version."
            ],
            storage: "Keeps 4 days in the refrigerator. It tastes even better the next day. Reheat gently on low heat."
        }
    ],
    japanese: [
        {
            name: "Sushi",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=85",
            description: "A Japanese favorite featuring seasoned rice paired with seafood, vegetables, or other flavorful fillings.",
            servings: "2 servings",
            time: "1 hr",
            difficulty: "Hard",
            prep: "40 mins",
            cook: "20 mins",
            ingredients: [
                ["🍚", "Sushi rice (2 cups, uncooked)"],
                ["🐟", "Fish (200 g, sushi-grade)"],
                ["🥒", "Cucumber (1 pc, cut in strips)"],
                ["🌿", "Nori (4 sheets)"],
                ["🍶", "Rice vinegar (1/4 cup)"],
                ["🧂", "Salt (1 tsp)"],
                ["🍬", "Sugar (2 tbsp)"]
            ],
            steps: [
                "Rinse the rice: Place the rice in a bowl and rinse under cold water, swirling with your hand, 4–5 times until the water runs almost clear. Drain for 15 minutes.",
                "Cook the rice: Cook with 2 cups of water in a rice cooker, or in a covered pot over low heat for 15 minutes, then rest off the heat for 10 minutes.",
                "Make the sushi vinegar: Warm the rice vinegar, sugar and salt in a small pot, stirring just until the sugar dissolves. Do not boil. Let it cool.",
                "Season the rice: Spread the hot rice in a wide bowl. Drizzle over the vinegar and fold it in with a cutting motion, fanning the rice to cool it quickly. This gives it a glossy finish.",
                "Let it cool: Keep the rice at room temperature, covered with a damp cloth, until no longer hot to the touch.",
                "Prep the fillings: Slice the fish into 1 cm thick strips and cut the cucumber into long matchsticks. Wipe the fish with paper towel.",
                "Roll: Place a nori sheet shiny-side down on a bamboo mat. With wet fingers, spread a thin 1 cm layer of rice over it, leaving 2 cm at the top bare. Lay the fish and cucumber across the center.",
                "Seal: Roll the mat away from you, pressing firmly, then wet the bare edge of nori and seal the roll.",
                "Slice: Wet a very sharp knife and slice the roll into 6–8 pieces, wiping the blade between cuts.",
                "Serve: Serve with soy sauce, wasabi and pickled ginger."
            ],
            tips: [
                "Use only sushi-grade fish from a trusted fishmonger and keep it refrigerated until the last minute.",
                "Wet your hands in water with a splash of vinegar so the rice does not stick.",
                "Do not overfill the roll. Less filling means a tighter roll."
            ],
            storage: "Best eaten the same day. Refrigerate leftovers up to 1 day, wrapped tightly; the rice firms up, so let it sit at room temperature for 20 minutes before eating."
        },
        {
            name: "Ramen",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85",
            description: "A comforting Japanese noodle soup served in a flavorful broth with noodles and a variety of toppings.",
            servings: "2 servings",
            time: "40 mins",
            difficulty: "Medium",
            prep: "15 mins",
            cook: "25 mins",
            ingredients: [
                ["🍜", "Ramen noodles (2 portions (200 g))"],
                ["🥚", "Egg (2 pcs)"],
                ["🥩", "Pork (150 g, cooked and sliced)"],
                ["🌿", "Green onion (2 stalks, sliced)"],
                ["🍄", "Mushrooms (4, sliced)"],
                ["🥣", "Broth (4 cups)"],
                ["🥣", "Soy sauce (2 tbsp)"]
            ],
            steps: [
                "Prep the toppings: Slice the mushrooms, slice the green onions on a sharp diagonal, and slice the cooked pork into thin pieces.",
                "Start the broth: In a pot, bring the broth to a gentle simmer over medium heat. Add the mushrooms and simmer for 10 minutes.",
                "Season: Stir in the soy sauce, then taste. Add a little more for a saltier broth.",
                "Cook the eggs: Gently lower the eggs into boiling water and cook for exactly 6½ minutes for a jammy yolk.",
                "Chill the eggs: Transfer immediately to ice water for 5 minutes, then peel under running water and cut in half.",
                "Boil the noodles: Cook the noodles in a separate pot of boiling water according to the package, usually 2–3 minutes. Do not cook them in the broth; it makes the broth cloudy.",
                "Drain: Drain the noodles well and shake off the excess water so they do not dilute the broth.",
                "Assemble: Divide the noodles between two warm bowls and pour the very hot broth over them.",
                "Top: Arrange the pork, egg halves and green onion on top and serve immediately."
            ],
            tips: [
                "Warm the bowls with hot water first so the soup stays hot longer.",
                "Add toppings like corn, nori, bean sprouts or a drizzle of chili oil to make it your own.",
                "Slurp as soon as it is served. Fresh noodles are at their best in the first few minutes."
            ],
            storage: "Store broth, noodles and toppings separately in the refrigerator for up to 3 days. Reheat the broth to boiling before assembling."
        },
        {
            name: "Tempura",
            image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=700&q=85",
            description: "Lightly battered seafood or vegetables fried until crisp and golden, commonly served with a dipping sauce.",
            servings: "3 servings",
            time: "30 mins",
            difficulty: "Medium",
            prep: "15 mins",
            cook: "15 mins",
            ingredients: [
                ["🍤", "Shrimp (8 large, peeled)"],
                ["🥕", "Vegetables (2 cups, sliced (sweet potato, pumpkin, green beans))"],
                ["🌾", "Flour (1 cup)"],
                ["🥚", "Egg (1 yolk)"],
                ["💧", "Water (3/4 cup, ice-cold)"],
                ["🫒", "Oil (4 cups, for frying)"]
            ],
            steps: [
                "Prep the shrimp: Peel the shrimp, leaving the tails on. Make 3–4 shallow cuts along the belly and gently press flat to straighten them.",
                "Prep the vegetables: Cut the vegetables into 5 mm slices or sticks of even thickness.",
                "Dry everything: Pat the shrimp and vegetables completely dry with paper towels.",
                "Heat the oil: Heat the oil to 170–180°C (340–355°F). A drop of batter should sink slightly and rise right away.",
                "Make the batter: Beat the egg yolk with the ice-cold water, then add the flour all at once and stir only 5–6 times. Leave the batter lumpy. Do not overmix.",
                "Fry the vegetables first: Dip the vegetables in the batter and fry for 2–3 minutes until pale golden and crisp.",
                "Fry the shrimp: Dip the shrimp by the tail and fry for 2–3 minutes until light golden.",
                "Drain: Lift out and drain on a wire rack (not paper towels, which make the bottoms soggy). Skim bits of batter from the oil between batches.",
                "Serve: Serve immediately with tentsuyu dipping sauce or a pinch of salt."
            ],
            tips: [
                "Keep the batter ice cold. Add an ice cube to the bowl to stay crisp.",
                "Fry in small batches so the oil temperature does not drop.",
                "Overmixing the batter develops gluten and makes the coating chewy instead of lacy."
            ],
            storage: "Tempura is best eaten right away. Re-crisp leftovers in a 200°C (400°F) oven or air fryer for 5 minutes."
        },
        {
            name: "Onigiri",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=700&q=85",
            description: "Japanese rice balls shaped by hand and often filled with savory ingredients or wrapped in seaweed.",
            servings: "2 servings",
            time: "20 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "15 mins",
            ingredients: [
                ["🍚", "Rice (2 cups, cooked and warm)"],
                ["🌿", "Nori (2 strips)"],
                ["🐟", "Tuna (1 can (140 g), drained)"],
                ["🧂", "Salt (1 tsp)"],
                ["🥣", "Mayonnaise (2 tbsp)"]
            ],
            steps: [
                "Check the rice: Use freshly cooked short-grain rice that is warm, not boiling hot. Cold rice will not hold together.",
                "Make the filling: Drain the tuna well and mix it with the mayonnaise and a pinch of salt until creamy.",
                "Prep the nori: Cut the nori sheets into long strips about 3 cm wide.",
                "Prep your hands: Wet your hands with cold water and rub a pinch of salt over your palms.",
                "Portion the rice: Scoop about 1/2 cup of warm rice into your palm and flatten it slightly.",
                "Fill: Press a small dent into the center, spoon in about 1 tablespoon of the tuna filling, and fold the rice over to enclose it.",
                "Shape: Cup your hands and rotate the rice while pressing gently into a triangle. Press firmly enough to hold together but not so hard that the grains are crushed.",
                "Wrap: Wrap a strip of nori around the base of the triangle just before serving, so the nori stays crisp.",
                "Serve: Serve right away or wrap tightly in plastic wrap for a lunchbox."
            ],
            tips: [
                "Salted hands season the outside of the rice and prevent sticking.",
                "Other fillings include salmon flakes, pickled plum (umeboshi) and kombu.",
                "Wrap the nori separately in lunchboxes to keep it crisp."
            ],
            storage: "Keep at room temperature for up to 4 hours, or wrapped in the refrigerator for 1 day. Microwave for 15 seconds to soften chilled rice."
        },
        {
            name: "Chicken Teriyaki",
            image: ph("🍗", "japanese", "Chicken Teriyaki"),
            description: "Juicy pan-seared chicken glazed in a glossy, sweet-savory teriyaki sauce. It comes together in one pan and is perfect over steamed rice.",
            servings: "3 servings",
            time: "30 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "20 mins",
            ingredients: [
                ["🍗", "Boneless chicken thighs (600 g)"],
                ["🥣", "Soy sauce (1/4 cup)"],
                ["🍶", "Mirin (1/4 cup)"],
                ["🍬", "Sugar (2 tbsp)"],
                ["🫚", "Ginger, grated (1 tsp)"],
                ["🫒", "Cooking oil (1 tbsp)"],
                ["🧅", "Green onion, sliced (2 stalks)"],
                ["🌾", "Sesame seeds (1 tbsp)"]
            ],
            steps: [
                "Prep the chicken: Pat the chicken thighs dry. Trim excess fat and cut a few shallow slits in the thickest parts so they cook evenly.",
                "Make the sauce: In a small bowl, stir the soy sauce, mirin, sugar and grated ginger until the sugar dissolves.",
                "Heat the pan: Heat the oil in a large non-stick skillet over medium-high heat until shimmering.",
                "Sear the skin side: Place the chicken skin-side down and cook for 5–6 minutes, without moving, until deeply golden.",
                "Flip: Turn the chicken over and cook for 4 minutes more.",
                "Remove excess fat: Spoon or wipe away excess oil from the pan so the sauce does not turn greasy.",
                "Add the sauce: Pour in the teriyaki sauce, reduce the heat to medium, and simmer for 3–4 minutes.",
                "Glaze: Spoon the sauce over the chicken repeatedly until it thickens and becomes glossy and the chicken is cooked through (74°C / 165°F).",
                "Slice and serve: Rest for 3 minutes, slice, and spoon the pan sauce over. Top with green onion and sesame seeds, and serve with rice."
            ],
            tips: [
                "Do not add the sauce too early. The sugar can burn before the chicken cooks.",
                "Chicken thighs are juicier, but breasts work if you pound them to an even thickness.",
                "Double the sauce and keep it in the refrigerator for up to 2 weeks to use on salmon or vegetables."
            ],
            storage: "Keeps 4 days in the refrigerator. Reheat gently in a covered pan with a splash of water."
        },
        {
            name: "Miso Soup",
            image: ph("🍲", "japanese", "Miso Soup"),
            description: "A light, comforting Japanese soup made with dashi stock, miso paste, tofu and seaweed. It is a staple at breakfast and alongside any meal.",
            servings: "2 servings",
            time: "15 mins",
            difficulty: "Easy",
            prep: "5 mins",
            cook: "10 mins",
            ingredients: [
                ["💧", "Dashi stock (3 cups)"],
                ["🥣", "Miso paste (3 tbsp)"],
                ["🧈", "Silken tofu, cubed (150 g)"],
                ["🌿", "Dried wakame (1 tbsp)"],
                ["🧅", "Green onion, sliced (1 stalk)"]
            ],
            steps: [
                "Soak the wakame: Place the dried wakame in a small bowl of cool water for 5 minutes until it expands, then drain.",
                "Prep the tofu: Cut the silken tofu into 1.5 cm cubes. Handle it gently, as it breaks easily.",
                "Heat the dashi: Pour the dashi into a pot and heat over medium heat until it just begins to simmer.",
                "Add the ingredients: Add the tofu and wakame and warm for 2 minutes. Do not boil hard.",
                "Turn the heat low: Lower the heat before adding the miso so its delicate flavor and probiotics are not destroyed.",
                "Dissolve the miso: Place the miso in a ladle, dip it into the hot broth, and whisk with chopsticks or a spoon until completely smooth, then stir it into the pot.",
                "Taste: Taste and add a little more miso if you want it saltier.",
                "Garnish: Add the sliced green onion.",
                "Serve: Serve immediately in warm bowls."
            ],
            tips: [
                "Never boil miso. Boiling dulls the flavor and gives it a bitter aftertaste.",
                "If you have no dashi, use water with 1 teaspoon of instant dashi granules.",
                "Red miso is stronger and saltier; white miso is milder and sweeter."
            ],
            storage: "Best fresh. Refrigerate up to 2 days and reheat gently without boiling."
        },
        {
            name: "Tonkatsu",
            image: ph("🥩", "japanese", "Tonkatsu"),
            description: "A crispy, golden breaded pork cutlet served with shredded cabbage and tangy tonkatsu sauce. Crunchy outside and tender inside.",
            servings: "2 servings",
            time: "35 mins",
            difficulty: "Medium",
            prep: "15 mins",
            cook: "15 mins",
            ingredients: [
                ["🥩", "Pork loin cutlets (2 pieces, about 150 g each)"],
                ["🌾", "Flour (1/4 cup)"],
                ["🥚", "Egg, beaten (1 pc)"],
                ["🍞", "Panko breadcrumbs (1 cup)"],
                ["🫒", "Oil for frying (2 cups)"],
                ["🥬", "Cabbage, finely shredded (2 cups)"],
                ["🥣", "Tonkatsu sauce (4 tbsp)"],
                ["🧂", "Salt and pepper (to taste)"]
            ],
            steps: [
                "Prep the pork: Trim the fat from the pork cutlets and make small cuts along the edges to stop them curling when fried.",
                "Tenderize: Lightly pound the cutlets with a meat mallet to an even 1.5 cm thickness. Season both sides with salt and pepper.",
                "Set up the breading station: Place the flour, beaten egg and panko in three shallow dishes.",
                "Bread: Coat each cutlet in flour, shake off the excess, dip it in egg, then press into the panko until fully coated on both sides.",
                "Rest: Let the breaded cutlets rest for 5 minutes so the coating sets.",
                "Heat the oil: Heat the oil to 170°C (340°F) in a deep pan, enough to come halfway up the cutlets.",
                "Fry: Fry for 4–5 minutes per side until deep golden and the pork is cooked through (63°C / 145°F).",
                "Drain and rest: Drain on a wire rack for 3 minutes so the crust stays crisp.",
                "Slice and serve: Slice into 2 cm strips and serve over finely shredded cabbage with tonkatsu sauce."
            ],
            tips: [
                "Pressing the panko on firmly stops the breading from falling off.",
                "Do not crowd the pan. Fry one or two cutlets at a time.",
                "Rest on a rack, not paper, so steam does not make the bottom soggy."
            ],
            storage: "Keeps 2 days in the refrigerator. Re-crisp in a 200°C (400°F) oven for 8–10 minutes."
        },
        {
            name: "Okonomiyaki",
            image: ph("🥞", "japanese", "Okonomiyaki"),
            description: "A savory Japanese cabbage pancake cooked on a griddle and topped with sweet-tangy sauce, mayonnaise and bonito flakes.",
            servings: "2 servings",
            time: "30 mins",
            difficulty: "Medium",
            prep: "15 mins",
            cook: "15 mins",
            ingredients: [
                ["🌾", "Flour (1 cup)"],
                ["💧", "Dashi or water (3/4 cup)"],
                ["🥚", "Eggs (2 pcs)"],
                ["🥬", "Cabbage, finely shredded (3 cups)"],
                ["🥓", "Thin pork belly slices (100 g)"],
                ["🥣", "Okonomiyaki sauce (3 tbsp)"],
                ["🥄", "Mayonnaise (2 tbsp)"],
                ["🐟", "Bonito flakes (1/4 cup, optional)"],
                ["🧅", "Green onion, sliced (2 stalks)"]
            ],
            steps: [
                "Shred the cabbage: Finely shred the cabbage, about 3 mm thick, for a tender, light pancake. Slice the green onion.",
                "Make the batter: In a large bowl, whisk the flour, dashi and eggs into a smooth batter.",
                "Add the cabbage: Fold in the cabbage and green onion until every shred is coated. The mixture will look very full of cabbage.",
                "Heat the pan: Heat a lightly oiled non-stick pan or griddle over medium heat.",
                "Pour: Pour in half of the mixture and shape it into a 2 cm thick round, about 15–18 cm wide. Do not press it flat.",
                "Add the pork: Lay half of the pork belly slices on top.",
                "Cook the first side: Cook for 4–5 minutes until golden brown underneath.",
                "Flip: Slide a wide spatula under it and flip confidently. Cook for 4–5 minutes more until the pork is crisp and the center is cooked.",
                "Top: Brush with okonomiyaki sauce, drizzle with mayonnaise in a zigzag, and sprinkle with bonito flakes and extra green onion.",
                "Repeat: Cook the remaining batter the same way."
            ],
            tips: [
                "Do not press the pancake while cooking; it keeps the inside fluffy.",
                "Add shrimp, squid or cheese into the batter for variations.",
                "Bonito flakes will \"dance\" from the steam. That is part of the charm."
            ],
            storage: "Best fresh. Keeps 2 days in the refrigerator; reheat in a dry pan over medium heat."
        },
        {
            name: "Gyoza",
            image: ph("🥟", "japanese", "Gyoza"),
            description: "Crescent-shaped Japanese pan-fried dumplings filled with pork and cabbage, crisp on the bottom and juicy inside.",
            servings: "4 servings",
            time: "45 mins",
            difficulty: "Medium",
            prep: "30 mins",
            cook: "15 mins",
            ingredients: [
                ["🥟", "Gyoza wrappers (30 pieces)"],
                ["🥩", "Ground pork (250 g)"],
                ["🥬", "Cabbage, minced (1 cup)"],
                ["🧅", "Green onion, minced (3 tbsp)"],
                ["🧄", "Garlic, minced (2 cloves)"],
                ["🫚", "Ginger, grated (1 tsp)"],
                ["🥣", "Soy sauce (1 tbsp)"],
                ["🫒", "Sesame oil (1 tsp)"],
                ["🫒", "Cooking oil (1 tbsp)"],
                ["💧", "Water (1/3 cup)"]
            ],
            steps: [
                "Prep the cabbage: Mince the cabbage finely, toss with a pinch of salt, and let it sit for 10 minutes. Squeeze out the excess water with your hands.",
                "Make the filling: Mix the pork, cabbage, green onion, garlic, ginger, soy sauce and sesame oil in a bowl. Stir in one direction for 1–2 minutes until sticky.",
                "Fill the wrappers: Place 1 teaspoon of filling in the center of each wrapper. Do not overfill.",
                "Seal: Wet half of the edge with a fingertip of water, fold in half, and make 5–6 small pleats along one side, pressing to seal firmly.",
                "Heat the pan: Heat the cooking oil in a non-stick skillet with a lid over medium-high heat.",
                "Fry: Arrange the gyoza flat-side down in a circle. Cook for 2 minutes until the bottoms are deep golden.",
                "Steam: Pour in the water, cover immediately, and steam for 5 minutes until the wrappers look translucent.",
                "Crisp again: Remove the lid and cook 1 more minute until the water has evaporated and the bottoms are crisp.",
                "Serve: Slide onto a plate crisp-side up. Serve with soy sauce, vinegar and chili oil."
            ],
            tips: [
                "Squeezing the cabbage dry stops the filling from becoming watery.",
                "Freeze uncooked gyoza on a tray and then transfer to a bag. Cook from frozen, adding 2 minutes of steaming.",
                "A non-stick pan and a tight lid are the keys to a crisp bottom and tender top."
            ],
            storage: "Cooked gyoza keep 2 days in the refrigerator. Reheat in a hot pan with a splash of water. Uncooked gyoza keep 1 month in the freezer."
        },
        {
            name: "Oyakodon",
            image: ph("🍳", "japanese", "Oyakodon"),
            description: "A comforting Japanese rice bowl topped with tender chicken and softly set egg simmered in a sweet dashi-soy sauce. The name means \"parent and child\".",
            servings: "2 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "15 mins",
            ingredients: [
                ["🍗", "Boneless chicken thigh, bite-sized (200 g)"],
                ["🧅", "Onion, thinly sliced (1/2 pc)"],
                ["🥚", "Eggs, lightly beaten (3 pcs)"],
                ["💧", "Dashi stock (3/4 cup)"],
                ["🥣", "Soy sauce (3 tbsp)"],
                ["🍶", "Mirin (3 tbsp)"],
                ["🍬", "Sugar (1 tsp)"],
                ["🍚", "Cooked rice (2 bowls)"]
            ],
            steps: [
                "Prep the chicken: Cut the chicken thigh into bite-sized pieces, about 2.5 cm.",
                "Prep the onion: Slice the onion thinly, about 3 mm thick.",
                "Beat the eggs: Crack the eggs into a bowl and stir only 3–4 times. You want to see streaks of white and yolk, not a uniform mix.",
                "Make the sauce: Combine the dashi, soy sauce, mirin and sugar in a wide, shallow pan and bring to a simmer.",
                "Cook the onion and chicken: Add the onion and chicken and simmer for 5–6 minutes, until the chicken is cooked through and the onion is tender.",
                "Add the first egg: Pour in about two-thirds of the egg in a circular motion. Cover and cook for 1 minute.",
                "Add the second egg: Pour in the remaining egg, turn off the heat, and cover for 30 seconds. The egg should be soft and barely set.",
                "Serve: Divide hot rice between two bowls and slide the egg and chicken mixture on top, with the sauce."
            ],
            tips: [
                "Do not overcook the egg. The custardy texture is what makes oyakodon special.",
                "Use a small pan so the egg stays thick and does not spread out too thin.",
                "Add chopped mitsuba, or green onion, at the end for freshness."
            ],
            storage: "Best eaten immediately. Do not store with the rice, as the egg turns rubbery when reheated."
        }
    ],
    italian: [
        {
            name: "Pizza",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85",
            description: "A classic Italian favorite featuring a crisp crust, tomato sauce, melted cheese, and delicious toppings.",
            servings: "4 servings",
            time: "1 hr",
            difficulty: "Medium",
            prep: "20 mins (+ 30 mins resting)",
            cook: "12 mins",
            ingredients: [
                ["🍞", "Pizza dough (1 ball (250 g))"],
                ["🍅", "Tomato sauce (1/3 cup)"],
                ["🧀", "Mozzarella (125 g, torn)"],
                ["🌿", "Basil (6 leaves)"],
                ["🫒", "Olive oil (1 tbsp)"]
            ],
            steps: [
                "Rest the dough: Take the dough out of the refrigerator and let it come to room temperature, covered, for 30 minutes. Cold dough resists stretching and shrinks back.",
                "Heat the oven: Place a baking tray or pizza stone on the middle rack and preheat the oven to its highest setting, 230–250°C (450–480°F), for at least 30 minutes.",
                "Flour your surface: Dust a clean work surface and your hands lightly with flour.",
                "Stretch the dough: Press the dough from the center outward with your fingertips, leaving the edge slightly thicker. Gently stretch it over your knuckles into a 30 cm (12 in) round. Avoid a rolling pin, which squeezes out the air bubbles.",
                "Transfer: Place the dough on a sheet of parchment paper or a floured peel.",
                "Add the sauce: Spoon the tomato sauce onto the center and spread in a spiral, leaving a 2 cm border for the crust.",
                "Add the cheese: Tear the mozzarella into small pieces, pat dry with paper towel to remove moisture, and scatter over the sauce.",
                "Bake: Slide the pizza with its parchment onto the hot tray and bake for 8–12 minutes until the crust is golden brown and the cheese is bubbling with a few browned spots.",
                "Finish: Remove, tear the basil over the top, and drizzle with the olive oil.",
                "Serve: Rest for 2 minutes, then slice and serve."
            ],
            tips: [
                "A very hot oven is the secret. It gives a puffy crust with a crisp base.",
                "Do not overload the pizza with toppings. Less lets the crust cook through.",
                "Drained, dried mozzarella prevents a watery center."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat slices in a hot, dry skillet covered for 3 minutes for a crisp base."
        },
        {
            name: "Spaghetti",
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=85",
            description: "A satisfying pasta dish served with a rich tomato sauce, herbs, and your choice of savory additions.",
            servings: "4 servings",
            time: "30 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "25 mins",
            ingredients: [
                ["🍝", "Spaghetti (400 g)"],
                ["🍅", "Tomatoes (1 can (400 g), crushed)"],
                ["🧄", "Garlic (3 cloves, minced)"],
                ["🧅", "Onion (1 small, diced)"],
                ["🧀", "Parmesan (1/3 cup, grated)"],
                ["🌿", "Basil (1 handful)"],
                ["🫒", "Olive oil (2 tbsp)"]
            ],
            steps: [
                "Prep the sauce ingredients: Finely dice the onion, mince the garlic, and crush the canned tomatoes with your hands or a fork.",
                "Boil the water: Bring a large pot of water to a rolling boil and salt it generously, about 1 tablespoon per liter, until it tastes like the sea.",
                "Cook the onion: Heat the olive oil in a wide pan over medium heat. Cook the onion for 4–5 minutes until soft and translucent but not browned.",
                "Add the garlic: Add the garlic and cook for 30 seconds, stirring, until fragrant. Do not let it brown, or it turns bitter.",
                "Simmer the sauce: Add the tomatoes with a pinch of salt and pepper. Simmer gently for 15 minutes, stirring occasionally, until it thickens and the oil begins to separate.",
                "Cook the pasta: Add the spaghetti to the boiling water and cook for 1 minute less than the package time, until al dente. Reserve 1/2 cup of the pasta water, then drain.",
                "Combine: Add the pasta to the sauce and toss over medium heat for 1 minute, adding pasta water a splash at a time until the sauce clings to every strand.",
                "Finish: Tear in half of the basil and stir.",
                "Serve: Serve in warm bowls topped with the Parmesan and the remaining basil."
            ],
            tips: [
                "Do not rinse the pasta after draining. The starch helps the sauce stick.",
                "Pasta water is liquid gold. The starch makes the sauce silky.",
                "For a sweeter sauce, add a small pinch of sugar to cut the acidity of the tomatoes."
            ],
            storage: "Keeps 4 days in the refrigerator. Sauce alone freezes well for 3 months."
        },
        {
            name: "Lasagna",
            image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=85",
            description: "Layers of pasta, savory sauce, and creamy cheese come together in this well-loved Italian baked dish.",
            servings: "6 servings",
            time: "1 hr 45 mins",
            difficulty: "Medium",
            prep: "30 mins",
            cook: "1 hr 15 mins",
            ingredients: [
                ["🍝", "Lasagna sheets (250 g)"],
                ["🥩", "Ground beef (500 g)"],
                ["🍅", "Tomato sauce (3 cups)"],
                ["🧀", "Mozzarella (250 g, shredded)"],
                ["🥛", "Milk (2 cups)"],
                ["🧄", "Garlic (3 cloves, minced)"],
                ["🧈", "Butter (3 tbsp)"],
                ["🌾", "Flour (3 tbsp)"]
            ],
            steps: [
                "Preheat the oven: Heat the oven to 180°C (350°F) and lightly grease a 23×33 cm (9×13 in) baking dish.",
                "Cook the meat sauce: Brown the beef in a large pan over medium-high heat for 8–10 minutes, breaking it up. Add the garlic and cook for 1 minute.",
                "Simmer: Stir in the tomato sauce, season with salt and pepper, and simmer on low heat for 20 minutes until thick. Let it cool slightly.",
                "Make the white sauce: Melt the butter in a saucepan over medium heat. Whisk in the flour and cook for 1 minute without browning.",
                "Add the milk: Pour in the milk gradually while whisking constantly. Simmer for 5–6 minutes until it coats the back of a spoon. Season with salt and a pinch of nutmeg if you have it.",
                "Prep the sheets: Cook the lasagna sheets in salted boiling water if they are not no-boil, for 2 minutes less than the package time. Drain and lay flat to prevent sticking.",
                "Assemble: Spread a thin layer of meat sauce in the dish. Add a layer of sheets, then meat sauce, white sauce and a handful of mozzarella. Repeat 3 times, finishing with white sauce and the remaining mozzarella.",
                "Bake covered: Cover tightly with foil and bake for 30 minutes.",
                "Brown the top: Remove the foil and bake for 15 minutes more until the cheese is golden and bubbling.",
                "Rest: Let it rest for 10–15 minutes before cutting so the layers set."
            ],
            tips: [
                "Resting is essential. Cutting too early makes the layers slide apart.",
                "Make it a day ahead. The flavors develop and it slices more neatly.",
                "Use full-fat mozzarella for the best melt."
            ],
            storage: "Keeps 4 days in the refrigerator, or freeze portions for 3 months. Reheat covered at 175°C (350°F) until hot in the center."
        },
        {
            name: "Risotto",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=700&q=85",
            description: "A creamy Italian rice dish made with broth, aromatics, and cheese for a rich and comforting meal.",
            servings: "3 servings",
            time: "40 mins",
            difficulty: "Medium",
            prep: "10 mins",
            cook: "30 mins",
            ingredients: [
                ["🍚", "Arborio rice (1 1/2 cups)"],
                ["🧅", "Onion (1 small, finely diced)"],
                ["🧈", "Butter (3 tbsp)"],
                ["🧀", "Parmesan (1/2 cup, grated)"],
                ["🥣", "Broth (5 cups, kept hot)"]
            ],
            steps: [
                "Prep: Finely dice the onion and grate the Parmesan.",
                "Heat the broth: Bring the broth to a gentle simmer in a saucepan and keep it hot over low heat. Cold broth would stop the cooking.",
                "Sweat the onion: Melt half of the butter in a wide, heavy pan over medium heat. Cook the onion for 4 minutes until soft and translucent.",
                "Toast the rice: Add the rice and stir for 1–2 minutes until the edges turn translucent and it smells nutty. Do not rinse the rice first; the starch makes it creamy.",
                "Add the first ladle: Add one ladle of broth and stir until almost fully absorbed.",
                "Continue: Keep adding broth one ladle at a time, stirring often, for 18–20 minutes, waiting until each addition is almost absorbed before adding the next.",
                "Test: Taste a grain. It should be tender with a slight bite in the center (al dente) and the risotto should flow loosely like lava.",
                "Finish (mantecatura): Remove from the heat. Vigorously stir in the remaining butter and the Parmesan for 1 minute to make it creamy.",
                "Rest and serve: Cover for 2 minutes, adjust the salt, and serve immediately on warm plates."
            ],
            tips: [
                "Use Arborio, Carnaroli or Vialone Nano rice. Long-grain rice will not become creamy.",
                "Constant gentle stirring releases the starch that makes the creaminess.",
                "Risotto waits for no one. Serve it right away so it stays loose."
            ],
            storage: "Best fresh. Leftovers keep 2 days in the refrigerator and are great shaped into patties and pan-fried."
        },
        {
            name: "Spaghetti Carbonara",
            image: ph("🍝", "italian", "Spaghetti Carbonara"),
            description: "The classic Roman pasta with crispy guanciale, eggs, Pecorino Romano and plenty of black pepper. The sauce is silky and made without cream.",
            servings: "3 servings",
            time: "25 mins",
            difficulty: "Medium",
            prep: "10 mins",
            cook: "15 mins",
            ingredients: [
                ["🍝", "Spaghetti (300 g)"],
                ["🥓", "Guanciale or pancetta, diced (150 g)"],
                ["🥚", "Egg yolks (4 pcs)"],
                ["🥚", "Whole egg (1 pc)"],
                ["🧀", "Pecorino Romano, finely grated (3/4 cup)"],
                ["⚫", "Freshly ground black pepper (1 tsp)"],
                ["🧂", "Salt, for the pasta water"]
            ],
            steps: [
                "Prep: Cut the guanciale into 1 cm strips or cubes. Finely grate the pecorino.",
                "Make the egg mixture: In a bowl, whisk the egg yolks, whole egg, most of the pecorino and the black pepper into a thick paste.",
                "Boil the water: Bring a large pot of water to a boil and salt it lightly. The guanciale and cheese are already salty.",
                "Render the guanciale: Cook the guanciale in a cold, large pan over medium heat for 8–10 minutes, until the fat is rendered and the pieces are crisp and golden. Turn off the heat.",
                "Cook the pasta: Boil the spaghetti until al dente. Reserve 1 cup of pasta water, then drain.",
                "Cool the pan slightly: Let the pan sit for 1 minute off the heat so it is warm, not hot. Hot pan equals scrambled eggs.",
                "Combine: Add the pasta to the pan with the guanciale and toss in the fat to coat.",
                "Add the sauce: Pour in the egg mixture and toss quickly, adding splashes of the pasta water until the sauce is creamy and glossy.",
                "Serve: Serve immediately in warm bowls, topped with the remaining pecorino and more black pepper."
            ],
            tips: [
                "Real carbonara has no cream. The creaminess comes from the egg, cheese and pasta water.",
                "If the sauce thickens too much, add a splash of hot pasta water.",
                "Use fresh eggs, and work quickly so the residual heat cooks them gently."
            ],
            storage: "Best eaten right away. It does not reheat well because the egg sauce can turn grainy."
        },
        {
            name: "Fettuccine Alfredo",
            image: ph("🍝", "italian", "Fettuccine Alfredo"),
            description: "Ribbons of fettuccine tossed in a rich, creamy sauce of butter, cream and Parmesan. Simple, indulgent and ready in minutes.",
            servings: "3 servings",
            time: "20 mins",
            difficulty: "Easy",
            prep: "5 mins",
            cook: "15 mins",
            ingredients: [
                ["🍝", "Fettuccine (300 g)"],
                ["🧈", "Butter (4 tbsp)"],
                ["🥛", "Heavy cream (1 cup)"],
                ["🧀", "Parmesan, freshly grated (1 cup)"],
                ["🧄", "Garlic, minced (2 cloves)"],
                ["🌿", "Parsley, chopped (2 tbsp)"],
                ["🧂", "Salt and black pepper (to taste)"]
            ],
            steps: [
                "Grate the cheese: Grate the Parmesan freshly. Pre-grated cheese contains additives that prevent smooth melting.",
                "Boil the pasta: Cook the fettuccine in well-salted boiling water until al dente. Reserve 1/2 cup of the pasta water, then drain.",
                "Melt the butter: Melt the butter in a large, wide pan over medium heat.",
                "Add the garlic: Cook the garlic for 30 seconds until fragrant, without browning.",
                "Add the cream: Pour in the cream and bring to a gentle simmer. Cook for 3–4 minutes, stirring, until slightly thickened.",
                "Add the cheese: Turn the heat to low and whisk in half of the Parmesan until smooth.",
                "Toss the pasta: Add the pasta and toss with tongs for 1–2 minutes, adding pasta water a splash at a time until the sauce coats the noodles.",
                "Season: Add the remaining Parmesan, salt and plenty of black pepper.",
                "Serve: Serve immediately, sprinkled with parsley."
            ],
            tips: [
                "Keep the heat low once the cheese goes in; high heat makes it grainy or oily.",
                "Add grilled chicken or sautéed mushrooms to make it a full meal.",
                "Serve at once, as the sauce thickens quickly as it cools."
            ],
            storage: "Keeps 2 days in the refrigerator. Reheat with a splash of milk or cream over low heat."
        },
        {
            name: "Chicken Parmigiana",
            image: ph("🍗", "italian", "Chicken Parmigiana"),
            description: "Crisp breaded chicken cutlets topped with marinara and melted mozzarella, baked until bubbly. An Italian-American favorite.",
            servings: "4 servings",
            time: "50 mins",
            difficulty: "Medium",
            prep: "25 mins",
            cook: "30 mins",
            ingredients: [
                ["🍗", "Chicken breasts, halved horizontally (2 large)"],
                ["🌾", "Flour (1/2 cup)"],
                ["🥚", "Eggs, beaten (2 pcs)"],
                ["🍞", "Breadcrumbs (1 cup)"],
                ["🧀", "Parmesan, grated (1/2 cup)"],
                ["🍅", "Marinara sauce (1 1/2 cups)"],
                ["🧀", "Mozzarella, shredded (1 cup)"],
                ["🫒", "Olive oil (1/4 cup)"],
                ["🌿", "Fresh basil (to garnish)"]
            ],
            steps: [
                "Preheat: Heat the oven to 200°C (400°F).",
                "Prep the chicken: Slice each chicken breast in half horizontally to make 4 cutlets. Place between plastic wrap and pound to an even 1.5 cm (1/2 in) thickness. Season with salt and pepper.",
                "Set up the breading station: Put the flour in one dish, the eggs in a second, and the breadcrumbs mixed with half of the Parmesan in a third.",
                "Bread: Dredge each cutlet in flour, shake off the excess, dip in egg, then press into the crumbs until fully coated.",
                "Fry: Heat the olive oil in a large pan over medium-high heat. Fry the cutlets for 3 minutes per side until golden. The chicken does not need to cook through yet.",
                "Transfer: Place the cutlets in a baking dish in a single layer.",
                "Top: Spoon 2–3 tablespoons of marinara over each cutlet, then top with the mozzarella and remaining Parmesan.",
                "Bake: Bake for 15–20 minutes until the cheese is bubbling and golden and the chicken reaches 74°C (165°F).",
                "Rest and serve: Rest for 5 minutes and garnish with torn basil. Serve with spaghetti or a salad."
            ],
            tips: [
                "Pound the chicken to an even thickness so it cooks uniformly and stays juicy.",
                "Only put sauce on the center of each cutlet so the edges stay crispy.",
                "Use a rack in the baking dish to keep the bottom crisp."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat in a 180°C (350°F) oven for 15 minutes."
        },
        {
            name: "Minestrone",
            image: ph("🥣", "italian", "Minestrone"),
            description: "A hearty Italian vegetable soup with beans and small pasta. It is flexible, filling and full of flavor.",
            servings: "6 servings",
            time: "50 mins",
            difficulty: "Easy",
            prep: "20 mins",
            cook: "35 mins",
            ingredients: [
                ["🫒", "Olive oil (3 tbsp)"],
                ["🧅", "Onion, diced (1 pc)"],
                ["🥕", "Carrots, diced (2 pcs)"],
                ["🥬", "Celery, diced (2 stalks)"],
                ["🧄", "Garlic, minced (3 cloves)"],
                ["🥒", "Zucchini, diced (1 pc)"],
                ["🍅", "Crushed tomatoes (1 can, 400 g)"],
                ["🫘", "Cannellini beans, drained (1 can, 400 g)"],
                ["🥣", "Vegetable broth (6 cups)"],
                ["🍝", "Small pasta such as ditalini (1 cup)"],
                ["🧀", "Parmesan, grated (to serve)"]
            ],
            steps: [
                "Prep the vegetables: Dice the onion, carrots, celery and zucchini into 1 cm pieces so they cook evenly.",
                "Build the base (soffritto): Heat the olive oil in a large pot over medium heat. Cook the onion, carrots and celery for 8 minutes, stirring, until soft and starting to sweeten.",
                "Add the garlic: Add the garlic and cook for 1 minute.",
                "Add the liquids: Stir in the zucchini, tomatoes and broth. Season lightly with salt and pepper.",
                "Simmer: Bring to a boil, then reduce the heat and simmer for 20 minutes until the vegetables are tender.",
                "Add the beans: Stir in the drained cannellini beans.",
                "Add the pasta: Add the small pasta and simmer for 8–10 minutes, stirring occasionally, until al dente.",
                "Adjust: Taste and adjust the salt and pepper. Add a splash of water if the soup is too thick.",
                "Serve: Ladle into bowls and top with grated Parmesan and a drizzle of olive oil."
            ],
            tips: [
                "Add a Parmesan rind to the pot while simmering for a deeper flavor.",
                "Use any seasonal vegetables you have, such as green beans, potatoes or kale.",
                "The pasta absorbs liquid on standing, so add extra broth when reheating."
            ],
            storage: "Keeps 5 days in the refrigerator or 3 months in the freezer (freeze without the pasta for best texture)."
        },
        {
            name: "Tiramisu",
            image: ph("🍰", "italian", "Tiramisu"),
            description: "Layers of coffee-soaked ladyfingers and light mascarpone cream, dusted with cocoa. This classic no-bake Italian dessert gets better overnight.",
            servings: "8 servings",
            time: "30 mins (+ 6 hrs chilling)",
            difficulty: "Medium",
            prep: "30 mins (+ 6 hrs chilling)",
            cook: "",
            ingredients: [
                ["🧀", "Mascarpone (500 g)"],
                ["🥚", "Egg yolks, very fresh (4 pcs)"],
                ["🍬", "Sugar (1/2 cup)"],
                ["🥛", "Heavy cream (1 cup)"],
                ["🍪", "Ladyfingers (24 pcs)"],
                ["☕", "Strong espresso, cooled (1 1/2 cups)"],
                ["🍶", "Marsala or coffee liqueur (2 tbsp, optional)"],
                ["🍫", "Cocoa powder (2 tbsp)"]
            ],
            steps: [
                "Make the coffee: Brew the espresso and let it cool completely. Stir in the Marsala, if using.",
                "Whisk the yolks: In a large bowl, whisk the egg yolks and sugar for 3–4 minutes until pale, thick and creamy.",
                "Add the mascarpone: Add the mascarpone and beat gently until smooth and combined.",
                "Whip the cream: In a separate bowl, whip the heavy cream until stiff peaks form.",
                "Fold: Fold the whipped cream gently into the mascarpone mixture in 2 additions, keeping it light and airy.",
                "Dip the ladyfingers: Dip each ladyfinger into the coffee for about 1 second per side. They should be moistened, not soaked.",
                "Layer: Line the bottom of a 20×30 cm dish with half of the ladyfingers, then spread half of the cream over them.",
                "Second layer: Repeat with the remaining ladyfingers and cream, smoothing the top.",
                "Chill: Cover and refrigerate for at least 6 hours, preferably overnight, so it sets.",
                "Finish: Dust generously with cocoa powder through a sieve just before serving."
            ],
            tips: [
                "Use very fresh eggs since the yolks are not cooked. Use pasteurized eggs for extra safety.",
                "Do not soak the ladyfingers or the dessert will be soggy.",
                "Overnight chilling gives the best flavor and neat slices."
            ],
            storage: "Keeps 3 days in the refrigerator, covered. Do not freeze with the cocoa dusting; add it fresh."
        },
        {
            name: "Caprese Salad",
            image: ph("🍅", "italian", "Caprese Salad"),
            description: "A fresh Italian salad of ripe tomatoes, creamy mozzarella and basil, dressed simply with olive oil. It is only as good as its ingredients.",
            servings: "2 servings",
            time: "10 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "",
            ingredients: [
                ["🍅", "Ripe tomatoes (3 pcs)"],
                ["🧀", "Fresh mozzarella (200 g)"],
                ["🌿", "Fresh basil leaves (1/4 cup)"],
                ["🫒", "Extra-virgin olive oil (2 tbsp)"],
                ["🍯", "Balsamic glaze (1 tbsp)"],
                ["🧂", "Salt and black pepper (to taste)"]
            ],
            steps: [
                "Pick the ingredients: Use the ripest tomatoes you can find, at room temperature, and the freshest mozzarella.",
                "Drain the cheese: Remove the mozzarella from its liquid and pat it dry with paper towel.",
                "Slice the tomatoes: Slice the tomatoes into 1 cm rounds, discarding the stem ends.",
                "Slice the cheese: Slice the mozzarella into rounds of the same thickness.",
                "Season the tomatoes: Sprinkle the tomato slices lightly with salt and let them sit for 5 minutes to draw out flavor.",
                "Arrange: Alternate slices of tomato and mozzarella, overlapping them on a platter, tucking basil leaves in between.",
                "Dress: Drizzle with the extra-virgin olive oil and balsamic glaze.",
                "Season: Finish with freshly ground black pepper and a pinch of flaky salt.",
                "Serve: Serve immediately, at room temperature."
            ],
            tips: [
                "Never refrigerate the tomatoes. Cold dulls their flavor.",
                "Tear the basil rather than cutting it to prevent it from blackening.",
                "Add the dressing just before serving so the salad stays fresh."
            ],
            storage: "Best eaten right away. Do not store, as the tomatoes release water and the basil wilts."
        }
    ],
    chinese: [
        {
            name: "Fried Rice",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85",
            description: "A versatile Chinese-style rice dish tossed with vegetables, egg, and savory seasonings.",
            servings: "3 servings",
            time: "20 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "10 mins",
            ingredients: [
                ["🍚", "Cooked rice (3 cups, day-old)"],
                ["🥚", "Egg (2 pcs)"],
                ["🥕", "Carrots (1 small, diced)"],
                ["🟢", "Peas (1/2 cup)"],
                ["🧅", "Green onion (3 stalks, sliced)"],
                ["🥣", "Soy sauce (2 tbsp)"],
                ["🫒", "Cooking oil (2 tbsp)"]
            ],
            steps: [
                "Use the right rice: Use day-old cooked rice, chilled in the refrigerator. Fresh, wet rice turns mushy. Break up any clumps with your fingers.",
                "Prep: Dice the carrots into 5 mm cubes, slice the green onion (separate the white and green parts), and beat the eggs with a pinch of salt.",
                "Heat the wok: Heat the wok over high heat until it just begins to smoke. Add 1 tablespoon of the oil and swirl to coat.",
                "Scramble the eggs: Pour in the eggs and stir for 20–30 seconds until just set but still soft. Remove to a plate.",
                "Cook the vegetables: Add the remaining oil, then the carrots and the white parts of the green onion. Stir-fry for 2 minutes. Add the peas and cook for 1 minute.",
                "Fry the rice: Add the rice and spread it across the wok. Let it sit for 20 seconds, then toss. Repeat for 3–4 minutes until the grains are hot, separate and starting to toast.",
                "Season: Drizzle the soy sauce around the edge of the wok (not over the rice) so it caramelizes, then toss.",
                "Combine: Return the eggs, breaking them into pieces, and toss for 30 seconds.",
                "Finish: Stir in the green parts of the green onion, taste, and adjust with salt or soy sauce.",
                "Serve: Serve immediately while hot."
            ],
            tips: [
                "High heat and a dry rice are the secrets to restaurant-style fried rice.",
                "Do not overload the wok. Cook in two batches if needed.",
                "Add cooked shrimp, chicken or Chinese sausage for a heartier meal."
            ],
            storage: "Cool within 1 hour and refrigerate for up to 3 days. Reheat thoroughly until piping hot."
        },
        {
            name: "Dumplings",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=85",
            description: "Delicate dough wrappers filled with a savory mixture of meat and vegetables, enjoyed steamed or pan-fried.",
            servings: "3 servings",
            time: "50 mins",
            difficulty: "Medium",
            prep: "35 mins",
            cook: "15 mins",
            ingredients: [
                ["🥟", "Dumpling wrappers (30 pieces)"],
                ["🥩", "Ground pork (250 g)"],
                ["🥬", "Cabbage (1 cup, finely chopped)"],
                ["🧄", "Garlic (2 cloves, minced)"],
                ["🫚", "Ginger (1 tsp, grated)"],
                ["🥣", "Soy sauce (1 tbsp)"],
                ["🫒", "Cooking oil (2 tbsp)"]
            ],
            steps: [
                "Prep the cabbage: Finely chop the cabbage, toss with 1/2 teaspoon of salt, and leave for 10 minutes. Squeeze out as much water as possible with a clean towel.",
                "Make the filling: In a bowl, combine the pork, cabbage, garlic, ginger and soy sauce. Stir in one direction for 2 minutes until the mixture is sticky and cohesive.",
                "Test the filling: Microwave or pan-fry a small spoonful to taste and adjust the seasoning.",
                "Set up: Put a small bowl of water next to your work area. Keep the wrappers covered with a damp cloth.",
                "Fill: Place about 1 tablespoon of filling in the center of a wrapper.",
                "Seal: Dampen the edge with water, fold in half, and make 4–5 pleats along one edge, pressing out air and sealing firmly.",
                "Pan-fry: Heat the oil in a non-stick pan with a lid over medium-high heat. Arrange the dumplings flat-side down and cook for 2 minutes until the bottoms are golden.",
                "Steam: Add 1/3 cup of water, cover immediately, and cook for 5–6 minutes until the wrappers are translucent and the filling is cooked (71°C / 160°F).",
                "Crisp: Uncover and cook for 1 minute until the water has evaporated.",
                "Serve: Serve hot with soy sauce, rice vinegar and chili oil."
            ],
            tips: [
                "Do not overfill. Too much filling makes sealing difficult and causes splitting.",
                "Freeze uncooked dumplings on a tray and then bag them. Cook from frozen, adding 2 minutes of steaming.",
                "Add a spoonful of cold chicken stock to the filling for extra juiciness."
            ],
            storage: "Cooked dumplings keep 3 days in the refrigerator. Uncooked ones keep 2 months in the freezer."
        },
        {
            name: "Chow Mein",
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=85",
            description: "A popular noodle dish tossed with crunchy vegetables and a savory sauce.",
            servings: "3 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "10 mins",
            ingredients: [
                ["🍜", "Noodles (250 g)"],
                ["🥕", "Carrots (1 medium, julienned)"],
                ["🥬", "Cabbage (2 cups, shredded)"],
                ["🧄", "Garlic (3 cloves, minced)"],
                ["🧅", "Onion (1 medium, sliced)"],
                ["🥣", "Soy sauce (3 tbsp)"],
                ["🫒", "Cooking oil (2 tbsp)"]
            ],
            steps: [
                "Cook the noodles: Boil the noodles for 1 minute less than the package time. Drain, rinse under cold water, and toss with a little oil to prevent sticking.",
                "Prep the vegetables: Julienne the carrots, shred the cabbage, slice the onion, and mince the garlic.",
                "Mix the sauce: Combine the soy sauce with 1 tablespoon of water.",
                "Heat the wok: Heat the wok until very hot, then add 1 tablespoon of oil.",
                "Aromatics: Stir-fry the onion and garlic for 30 seconds until fragrant.",
                "Vegetables: Add the carrots and cabbage and stir-fry for 3 minutes until crisp-tender.",
                "Add the noodles: Add the noodles and the sauce. Toss with tongs, lifting from the bottom, for 2–3 minutes until the noodles take on color and slightly crisp.",
                "Season: Taste and add more soy sauce if needed.",
                "Serve: Serve immediately."
            ],
            tips: [
                "Dry noodles stir-fry better. Drain thoroughly.",
                "For crispy edges, let the noodles sit untouched for 30 seconds in the wok.",
                "Add shrimp, chicken or tofu to turn it into a full meal."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat in a hot pan with a splash of water."
        },
        {
            name: "Sweet and Sour Chicken",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85",
            description: "Crispy chicken pieces coated in a tangy sweet-and-sour sauce with colorful vegetables.",
            servings: "4 servings",
            time: "45 mins",
            difficulty: "Medium",
            prep: "20 mins",
            cook: "20 mins",
            ingredients: [
                ["🍗", "Chicken (500 g, cubed)"],
                ["🍍", "Pineapple (1 cup, chunks)"],
                ["🫑", "Bell pepper (1 pc, cut in squares)"],
                ["🍅", "Ketchup (1/4 cup)"],
                ["🍚", "Vinegar (1/4 cup)"],
                ["🍬", "Sugar (1/4 cup)"],
                ["🌽", "Cornstarch (1/2 cup)"],
                ["🥚", "Egg (1 pc, beaten)"],
                ["🫒", "Oil for frying (2 cups)"]
            ],
            steps: [
                "Prep the chicken: Cut the chicken into 2.5 cm cubes and pat dry. Season with salt and pepper.",
                "Set up the coating: Beat the egg in one bowl and put the cornstarch in another.",
                "Coat: Dip each piece in egg, then toss in the cornstarch, pressing so it sticks.",
                "Make the sauce: Mix the ketchup, vinegar and sugar in a small saucepan with 2 tablespoons of water. Simmer for 3 minutes until slightly thickened and the sugar dissolves.",
                "Heat the oil: Heat the frying oil to 175°C (350°F) in a deep pan or wok.",
                "Fry the chicken: Fry in batches for 5–6 minutes until golden brown and cooked through. Drain on a wire rack.",
                "Stir-fry the vegetables: In a clean pan, stir-fry the bell pepper for 2 minutes. Add the pineapple and cook for 1 minute.",
                "Combine: Pour the sauce into the pan, bring to a simmer, then toss in the chicken for 30 seconds until just coated.",
                "Serve: Serve immediately with steamed rice, so the coating stays crisp."
            ],
            tips: [
                "Add the chicken to the sauce at the last moment so it stays crunchy.",
                "Double-frying (a second 1-minute fry) makes it even crispier.",
                "Use pineapple canned in juice rather than syrup so the sauce is not too sweet."
            ],
            storage: "Keeps 3 days in the refrigerator, though the coating will soften. Reheat in a 200°C (400°F) oven for 10 minutes."
        },
        {
            name: "Kung Pao Chicken",
            image: ph("🍗", "chinese", "Kung Pao Chicken"),
            description: "A Sichuan stir-fry of diced chicken, roasted peanuts and dried chilies in a sweet, tangy and mildly spicy sauce.",
            servings: "3 servings",
            time: "30 mins",
            difficulty: "Medium",
            prep: "20 mins",
            cook: "10 mins",
            ingredients: [
                ["🍗", "Chicken breast or thigh, diced (500 g)"],
                ["🥜", "Roasted peanuts (1/2 cup)"],
                ["🌶️", "Dried red chilies (8 pcs)"],
                ["🧄", "Garlic, minced (3 cloves)"],
                ["🫚", "Ginger, minced (1 tbsp)"],
                ["🧅", "Green onion, cut in 2 cm pieces (3 stalks)"],
                ["🥣", "Soy sauce (2 tbsp)"],
                ["🍶", "Rice vinegar (1 tbsp)"],
                ["🍬", "Sugar (1 tbsp)"],
                ["🌽", "Cornstarch (2 tsp)"],
                ["🫒", "Cooking oil (2 tbsp)"]
            ],
            steps: [
                "Prep the chicken: Cut the chicken into 2 cm cubes. Toss with 1 tablespoon of soy sauce and the cornstarch and let it sit for 10 minutes.",
                "Make the sauce: In a small bowl, stir together the remaining soy sauce, the vinegar and the sugar.",
                "Prep the aromatics: Snip the dried chilies in half and shake out the seeds for less heat. Mince the garlic and ginger and cut the green onion into 2 cm pieces.",
                "Heat the wok: Heat the wok over high heat until it begins to smoke. Add the oil and swirl.",
                "Bloom the chilies: Add the dried chilies (and Sichuan peppercorns if using) and stir for 15–20 seconds until fragrant and slightly darker. Do not burn them.",
                "Sear the chicken: Add the chicken in a single layer and let it sear for 1 minute, then stir-fry for 3–4 minutes until browned and cooked through.",
                "Add the aromatics: Add the garlic, ginger and green onion and stir-fry for 1 minute.",
                "Sauce: Pour in the sauce and toss for 30 seconds until the sauce thickens and coats the chicken.",
                "Finish: Stir in the peanuts last so they stay crunchy.",
                "Serve: Serve at once with steamed rice."
            ],
            tips: [
                "Use high heat and keep everything moving for the smoky wok flavor.",
                "Chinkiang black vinegar gives the most authentic tang.",
                "Add the peanuts at the very end to keep them crisp."
            ],
            storage: "Best fresh. Keeps 2 days in the refrigerator; the peanuts will soften."
        },
        {
            name: "Mapo Tofu",
            image: ph("🌶️", "chinese", "Mapo Tofu"),
            description: "Silky tofu in a bold, spicy and numbing sauce with minced pork and fermented chili bean paste. A Sichuan classic.",
            servings: "3 servings",
            time: "25 mins",
            difficulty: "Medium",
            prep: "15 mins",
            cook: "15 mins",
            ingredients: [
                ["🧈", "Soft or firm tofu, cubed (400 g)"],
                ["🥩", "Ground pork (150 g)"],
                ["🌶️", "Doubanjiang (chili bean paste) (2 tbsp)"],
                ["🧄", "Garlic, minced (3 cloves)"],
                ["🫚", "Ginger, minced (1 tsp)"],
                ["💧", "Chicken stock (1 cup)"],
                ["🥣", "Soy sauce (1 tbsp)"],
                ["🌽", "Cornstarch mixed with 2 tbsp water (1 tbsp)"],
                ["🧅", "Green onion, sliced (2 stalks)"],
                ["🫒", "Cooking oil (2 tbsp)"]
            ],
            steps: [
                "Prep the tofu: Cut the tofu into 2 cm cubes. Bring a pot of lightly salted water to a gentle simmer and add the tofu for 3 minutes to firm it and remove any beany taste. Drain gently.",
                "Prep the aromatics: Mince the garlic and ginger, slice the green onion, and mix the cornstarch with the 2 tablespoons of water.",
                "Brown the pork: Heat the oil in a wok over medium-high heat. Cook the pork for 3–4 minutes, breaking it up, until browned and crisp at the edges.",
                "Fry the paste: Add the doubanjiang and fry for 1 minute until the oil turns red and fragrant.",
                "Add aromatics: Add the garlic and ginger and stir for 30 seconds.",
                "Add the liquid: Pour in the stock and soy sauce and bring to a simmer.",
                "Add the tofu: Slide in the tofu and gently push it around with the back of a spoon. Simmer for 5 minutes so it absorbs the flavor.",
                "Thicken: Stir the cornstarch mixture again, pour it in gradually, and simmer for 1 minute until the sauce is glossy.",
                "Finish: Sprinkle with the ground Sichuan peppercorn (if using) and green onion.",
                "Serve: Serve at once over steamed rice."
            ],
            tips: [
                "Blanching the tofu in salted water keeps it intact and well-seasoned.",
                "Push the tofu gently instead of stirring so the cubes do not break.",
                "Ground toasted Sichuan peppercorns give the signature numbing \"ma la\" sensation."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat gently on low heat."
        },
        {
            name: "Beef and Broccoli",
            image: ph("🥦", "chinese", "Beef and Broccoli"),
            description: "Tender sliced beef and crisp broccoli in a savory garlic-oyster sauce. A takeout favorite that is quick to make at home.",
            servings: "3 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "20 mins",
            cook: "10 mins",
            ingredients: [
                ["🥩", "Flank steak, thinly sliced (400 g)"],
                ["🥦", "Broccoli florets (3 cups)"],
                ["🧄", "Garlic, minced (3 cloves)"],
                ["🫚", "Ginger, minced (1 tsp)"],
                ["🥣", "Soy sauce (3 tbsp)"],
                ["🥣", "Oyster sauce (2 tbsp)"],
                ["🌽", "Cornstarch (2 tsp)"],
                ["🍬", "Sugar (1 tsp)"],
                ["💧", "Water (1/4 cup)"],
                ["🫒", "Cooking oil (2 tbsp)"]
            ],
            steps: [
                "Slice the beef: Slice the flank steak thinly, about 3 mm, against the grain. Partially freezing it for 20 minutes makes this easier.",
                "Marinate: Toss the beef with 1 tablespoon of the soy sauce and the cornstarch and let it sit for 15 minutes.",
                "Make the sauce: Whisk the remaining soy sauce, the oyster sauce, sugar and water together.",
                "Blanch the broccoli: Boil the broccoli florets for 1 minute, then drain and plunge into cold water to keep the color bright.",
                "Sear the beef: Heat 1 tablespoon of oil in a wok over high heat. Sear the beef in a single layer for 1–2 minutes per side until browned, then remove to a plate.",
                "Aromatics: Add the remaining oil, garlic and ginger and stir-fry for 20 seconds.",
                "Add the broccoli and sauce: Add the broccoli and sauce and stir-fry for 2 minutes until the sauce bubbles and thickens.",
                "Return the beef: Add the beef back to the wok and toss for 1 minute to coat in the sauce.",
                "Serve: Serve immediately over steamed rice."
            ],
            tips: [
                "Slicing against the grain is the key to tender beef.",
                "Do not crowd the wok or the beef will steam instead of sear.",
                "Blanching ahead keeps the broccoli bright and crisp-tender."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat quickly in a hot pan so the broccoli stays crisp."
        },
        {
            name: "Egg Drop Soup",
            image: ph("🥣", "chinese", "Egg Drop Soup"),
            description: "A quick, silky Chinese soup with delicate ribbons of egg in a savory ginger broth.",
            servings: "3 servings",
            time: "15 mins",
            difficulty: "Easy",
            prep: "5 mins",
            cook: "10 mins",
            ingredients: [
                ["🥣", "Chicken broth (4 cups)"],
                ["🥚", "Eggs, beaten (2 pcs)"],
                ["🌽", "Cornstarch mixed with 2 tbsp water (1 tbsp)"],
                ["🫚", "Ginger, grated (1 tsp)"],
                ["🧅", "Green onion, sliced (2 stalks)"],
                ["🥣", "Soy sauce (1 tsp)"],
                ["⚪", "White pepper (1/4 tsp)"],
                ["🫒", "Sesame oil (1/2 tsp)"]
            ],
            steps: [
                "Prep: Grate the ginger, slice the green onion, and beat the eggs in a small bowl or measuring jug with a spout.",
                "Make the slurry: Mix the cornstarch with the 2 tablespoons of water until smooth.",
                "Heat the broth: Bring the chicken broth to a simmer in a pot with the ginger and soy sauce. Simmer for 3 minutes to infuse.",
                "Thicken: Stir the slurry again and pour it in, stirring. Simmer for 1 minute until the broth is slightly thick and glossy.",
                "Lower the heat: Reduce the heat so the soup barely bubbles. A rolling boil makes the egg cloudy.",
                "Add the eggs: Slowly pour the egg in a thin stream while stirring the soup in one direction with a fork or chopsticks.",
                "Set: Stop stirring and let the egg set for 10 seconds into silky ribbons.",
                "Season: Turn off the heat, then add the white pepper and sesame oil.",
                "Serve: Top with green onion and serve immediately."
            ],
            tips: [
                "Pour the egg slowly from a height for the thinnest ribbons.",
                "Stir in one direction only to keep the ribbons long.",
                "Add corn kernels or tofu for a heartier soup."
            ],
            storage: "Keeps 2 days in the refrigerator. Reheat gently without boiling."
        },
        {
            name: "Char Siu",
            image: ph("🍖", "chinese", "Char Siu"),
            description: "Cantonese-style barbecued pork with a sticky, sweet-savory glaze and caramelized edges. Delicious sliced over rice or in buns.",
            servings: "4 servings",
            time: "1 hr (+ 4 hrs marinating)",
            difficulty: "Medium",
            prep: "20 mins (+ 4 hrs marinating)",
            cook: "45 mins",
            ingredients: [
                ["🥩", "Pork shoulder, cut into long strips (700 g)"],
                ["🥣", "Hoisin sauce (3 tbsp)"],
                ["🥣", "Soy sauce (2 tbsp)"],
                ["🍯", "Honey (3 tbsp, plus extra for glazing)"],
                ["🍶", "Shaoxing wine or dry sherry (1 tbsp)"],
                ["🧄", "Garlic, minced (3 cloves)"],
                ["🌿", "Five-spice powder (1/2 tsp)"]
            ],
            steps: [
                "Cut the pork: Cut the pork shoulder lengthwise into strips about 4–5 cm thick. Pat dry.",
                "Make the marinade: Mix the hoisin sauce, soy sauce, 2 tablespoons of the honey, the wine, garlic and five-spice powder until smooth.",
                "Marinate: Coat the pork well, reserving 3 tablespoons of marinade in the fridge for basting. Cover and marinate for at least 4 hours or overnight.",
                "Preheat: Heat the oven to 220°C (425°F). Line a baking tray with foil, set a wire rack on top, and add 1/2 cup of water to the tray to prevent smoking.",
                "Arrange: Place the pork on the rack with space between pieces.",
                "First roast: Roast for 20 minutes.",
                "Baste: Brush with the reserved marinade, flip, and roast for another 10 minutes.",
                "Glaze: Brush with the remaining honey and roast 10–15 minutes more, until sticky and caramelized with charred edges and the internal temperature is 71°C (160°F).",
                "Rest: Rest for 10 minutes so the juices redistribute.",
                "Serve: Slice against the grain and serve over rice with the pan juices, or in buns."
            ],
            tips: [
                "Pork shoulder (or neck) has the fat needed for juicy char siu.",
                "Water in the tray prevents the drippings from burning.",
                "A final blast under the broiler for 2 minutes gives extra char."
            ],
            storage: "Keeps 4 days in the refrigerator, or 2 months in the freezer. Reheat covered in the oven."
        },
        {
            name: "Congee",
            image: ph("🍚", "chinese", "Congee"),
            description: "A soothing Chinese rice porridge simmered until creamy, topped with chicken, ginger and green onion. Comfort food at its simplest.",
            servings: "4 servings",
            time: "1 hr 15 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "1 hr 5 mins",
            ingredients: [
                ["🍚", "Jasmine rice, rinsed (1 cup)"],
                ["💧", "Water or chicken broth (8 cups)"],
                ["🍗", "Boneless chicken thigh, sliced (200 g)"],
                ["🫚", "Ginger, sliced into thin strips (2-inch piece)"],
                ["🥣", "Soy sauce (1 tbsp)"],
                ["🧅", "Green onion, sliced (3 stalks)"],
                ["⚪", "White pepper (1/4 tsp)"],
                ["🫒", "Sesame oil (1 tsp)"]
            ],
            steps: [
                "Rinse the rice: Rinse the rice in a sieve under cold water until the water runs mostly clear. Drain.",
                "Prep the aromatics: Peel the ginger and slice half of it into thin rounds and the other half into thin matchsticks. Slice the green onion.",
                "Start the congee: In a large heavy pot, combine the rice, water or broth and the ginger rounds. Bring to a boil over high heat.",
                "Simmer: Reduce the heat to low, partly cover, and simmer for 50–60 minutes, stirring every 10 minutes (more often near the end) to prevent sticking.",
                "Check the texture: The rice should break down and the porridge should be thick and creamy. Add hot water if it gets too thick.",
                "Prep the chicken: Slice the chicken into thin pieces and toss with the soy sauce.",
                "Cook the chicken: Add the chicken to the congee for the last 8–10 minutes and stir until cooked through.",
                "Season: Season with salt and the white pepper.",
                "Serve: Ladle into bowls and top with ginger matchsticks, green onion and a drizzle of sesame oil."
            ],
            tips: [
                "Freeze the rinsed rice for an hour before cooking. It breaks down faster and makes creamier congee.",
                "Use more water for a thin porridge or less for a thick one.",
                "Top with a soft egg, fried shallots or crullers for a fuller meal."
            ],
            storage: "Keeps 4 days in the refrigerator. It thickens as it cools, so add water when reheating."
        }
    ],
    mexican: [
        {
            name: "Tacos",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=700&q=85",
            description: "Flavorful tortillas filled with seasoned meat, fresh vegetables, and tasty toppings.",
            servings: "3 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "15 mins",
            ingredients: [
                ["🌮", "Tortillas (8 small)"],
                ["🥩", "Ground beef (400 g)"],
                ["🥬", "Lettuce (1 cup, shredded)"],
                ["🍅", "Tomatoes (2 pcs, diced)"],
                ["🧀", "Cheese (1 cup, shredded)"],
                ["🍋", "Lime (2 pcs, cut in wedges)"],
                ["🌶️", "Chili powder (1 tbsp)"],
                ["🧂", "Ground cumin (1 tsp)"]
            ],
            steps: [
                "Prep the toppings: Shred the lettuce, dice the tomatoes, shred the cheese, and cut the limes into wedges. Set each in a separate bowl for easy assembly.",
                "Brown the beef: Heat a large skillet over medium-high heat. Add the beef and cook for 6–8 minutes, breaking it into small crumbles, until browned with no pink left. Drain excess fat.",
                "Season: Stir in the chili powder, cumin and 1/2 teaspoon of salt, then add 1/4 cup of water.",
                "Simmer: Cook for 3–4 minutes until the liquid has been absorbed and the beef is coated in a thick, glossy sauce.",
                "Warm the tortillas: Heat a dry pan over medium heat and warm each tortilla for 20 seconds per side until soft and pliable with a few light brown spots.",
                "Keep warm: Stack the tortillas in a clean towel so they stay soft.",
                "Assemble: Spoon the beef into each tortilla and top with lettuce, tomatoes and cheese.",
                "Serve: Serve right away with lime wedges squeezed over the top."
            ],
            tips: [
                "Warming the tortillas makes a big difference. Cold tortillas crack.",
                "Double up the corn tortillas if they are thin, to stop them from tearing.",
                "Add salsa, sour cream or guacamole at the table."
            ],
            storage: "Store the beef 4 days in the refrigerator, separately from the tortillas and toppings. Reheat in a skillet."
        },
        {
            name: "Burrito",
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=85",
            description: "A filling flour tortilla wrapped around rice, beans, meat, and a selection of toppings.",
            servings: "2 servings",
            time: "30 mins",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "15 mins",
            ingredients: [
                ["🌯", "Tortillas (2 large)"],
                ["🍚", "Rice (1 cup, cooked)"],
                ["🫘", "Beans (1/2 cup, cooked)"],
                ["🥩", "Beef (200 g, cooked and seasoned)"],
                ["🧀", "Cheese (1/2 cup, shredded)"],
                ["🥑", "Avocado (1 pc, sliced)"]
            ],
            steps: [
                "Prep the avocado: Halve, pit and slice the avocado just before assembling to keep it green.",
                "Warm the beans: Heat the beans in a small pot with a splash of water for 3–4 minutes. Season with salt and mash lightly.",
                "Warm the filling: Reheat the cooked rice and the seasoned beef so everything is hot.",
                "Warm the tortillas: Warm each tortilla for 15–20 seconds per side in a dry pan or the microwave wrapped in a damp towel until soft and pliable.",
                "Layer: Place a tortilla flat. Add a line of rice, beans and beef across the lower third, leaving a 5 cm border on each side. Top with cheese and avocado.",
                "Fold the sides: Fold the left and right sides in over the filling.",
                "Roll: Fold the bottom edge up over the filling and roll away from you, tucking tightly.",
                "Toast: Place seam-side down in a dry skillet over medium heat for 1–2 minutes per side until golden and sealed.",
                "Serve: Slice in half and serve with salsa and sour cream."
            ],
            tips: [
                "Do not overfill. About 1 cup of filling per large tortilla is the max.",
                "Place the cheese on the hot filling so it melts.",
                "Wrap in foil for a portable lunch."
            ],
            storage: "Wrapped burritos keep 3 days in the refrigerator or 2 months in the freezer. Reheat in the oven or microwave."
        },
        {
            name: "Quesadilla",
            image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=700&q=85",
            description: "A toasted tortilla filled with melted cheese and other savory ingredients.",
            servings: "2 servings",
            time: "15 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "10 mins",
            ingredients: [
                ["🫓", "Tortillas (2 large)"],
                ["🧀", "Cheese (1 cup, shredded)"],
                ["🍗", "Chicken (1 cup, cooked and shredded)"],
                ["🫑", "Bell pepper (1/2 pc, diced)"],
                ["🧅", "Onion (1/4 cup, diced)"]
            ],
            steps: [
                "Prep the vegetables: Dice the bell pepper and onion into small pieces, about 5 mm.",
                "Cook the vegetables: Heat a little oil in a skillet over medium heat. Cook the bell pepper and onion for 3–4 minutes until soft. Remove to a plate.",
                "Prep the filling: Shred the chicken into small pieces and shred the cheese.",
                "Heat the pan: Wipe the skillet and heat over medium heat.",
                "Layer: Place a tortilla in the pan. Sprinkle half of the tortilla with half of the cheese, then the chicken, vegetables, and finish with a bit more cheese.",
                "Fold: Fold the empty half over the filling.",
                "Cook: Cook for 2–3 minutes per side, pressing gently with a spatula, until golden and crisp and the cheese melts.",
                "Rest: Let rest for 1 minute so the cheese sets slightly.",
                "Serve: Cut into wedges and serve with salsa, sour cream or guacamole. Repeat for the second quesadilla."
            ],
            tips: [
                "Medium heat melts the cheese before the outside burns.",
                "Use a cheese that melts well, like Monterey Jack, Oaxaca or cheddar.",
                "Do not overfill, or the filling will spill out."
            ],
            storage: "Best fresh. Keeps 2 days in the refrigerator; reheat in a dry skillet for crispness."
        },
        {
            name: "Guacamole",
            image: ph("🥑", "mexican", "Guacamole"),
            description: "Creamy, fresh Mexican avocado dip brightened with lime, onion, tomato and cilantro. Perfect with chips or alongside tacos.",
            servings: "4 servings",
            time: "10 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "",
            ingredients: [
                ["🥑", "Ripe avocados (3 pcs)"],
                ["🍋", "Lime, juiced (1 pc)"],
                ["🧅", "Red onion, finely chopped (1/4 cup)"],
                ["🍅", "Tomato, diced (1 small)"],
                ["🌿", "Cilantro, chopped (2 tbsp)"],
                ["🌶️", "Jalapeño, minced (1 small)"],
                ["🧂", "Salt (1/2 tsp)"]
            ],
            steps: [
                "Choose ripe avocados: Pick avocados that yield slightly to gentle pressure. Remove the small stem cap; if green underneath, it is ripe.",
                "Prep the mix-ins: Finely chop the red onion, dice the tomato, mince the jalapeño (remove the seeds for mild heat), and chop the cilantro.",
                "Open the avocados: Cut each avocado in half around the pit, twist apart, remove the pit with the knife, and scoop the flesh into a bowl.",
                "Mash: Mash with a fork to your preferred texture. Leave it chunky for the best texture.",
                "Add the acid and salt: Stir in the lime juice and salt right away. This brightens the flavor and slows browning.",
                "Add the mix-ins: Fold in the onion and jalapeño.",
                "Add the tomato and cilantro: Fold these in gently last so they do not turn the guacamole watery.",
                "Taste: Adjust the salt, lime and heat as you like.",
                "Serve: Serve immediately with tortilla chips."
            ],
            tips: [
                "To store, press plastic wrap directly onto the surface to stop browning.",
                "Add the tomato just before serving to keep it from getting watery.",
                "Soaking chopped onion in water for 5 minutes mellows its bite."
            ],
            storage: "Keeps 1 day in the refrigerator pressed tightly with plastic wrap. A thin layer of lime juice or water on top also helps."
        },
        {
            name: "Chicken Enchiladas",
            image: ph("🌯", "mexican", "Chicken Enchiladas"),
            description: "Corn tortillas rolled around shredded chicken and cheese, smothered in red enchilada sauce and baked until bubbly.",
            servings: "4 servings",
            time: "50 mins",
            difficulty: "Medium",
            prep: "20 mins",
            cook: "30 mins",
            ingredients: [
                ["🍗", "Cooked shredded chicken (3 cups)"],
                ["🫓", "Corn tortillas (8 pcs)"],
                ["🍅", "Red enchilada sauce (2 cups)"],
                ["🧀", "Shredded cheese (2 cups)"],
                ["🧅", "Onion, diced (1/2 cup)"],
                ["🫒", "Cooking oil (1 tbsp)"],
                ["🥛", "Sour cream (for serving)"],
                ["🌿", "Cilantro (for serving)"]
            ],
            steps: [
                "Preheat: Heat the oven to 190°C (375°F). Lightly grease a 23×33 cm baking dish.",
                "Sauce the dish: Spread 1/2 cup of enchilada sauce on the bottom of the dish so the enchiladas do not stick.",
                "Make the filling: Heat the oil in a skillet and cook the onion for 3 minutes until soft. In a bowl, mix with the chicken, 1 cup of cheese and 1/4 cup of sauce.",
                "Warm the tortillas: Warm the tortillas for 20 seconds on each side in a dry pan, or wrap them in a damp towel and microwave for 30 seconds, so they roll without cracking.",
                "Fill: Spoon about 1/3 cup of filling down the center of each tortilla and roll up tightly.",
                "Arrange: Place seam-side down in the dish, packed snugly in one layer.",
                "Cover: Pour the remaining sauce over the enchiladas, spreading to cover the edges. Top with the rest of the cheese.",
                "Bake: Bake for 20–25 minutes until the sauce is bubbling and the cheese is melted and lightly golden.",
                "Rest: Rest for 5 minutes.",
                "Serve: Serve topped with sour cream and chopped cilantro."
            ],
            tips: [
                "Briefly fry the tortillas in oil for 5 seconds per side for a more traditional, sturdy texture.",
                "Rotisserie chicken is a great shortcut for the filling.",
                "Cover with foil if the top is browning too fast."
            ],
            storage: "Keeps 4 days in the refrigerator or 3 months in the freezer. Reheat covered at 175°C (350°F) until hot."
        },
        {
            name: "Chilaquiles",
            image: ph("🍽️", "mexican", "Chilaquiles"),
            description: "Crisp tortilla chips simmered briefly in salsa and topped with eggs, crumbled cheese and crema. A classic Mexican breakfast.",
            servings: "3 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "15 mins",
            ingredients: [
                ["🌮", "Tortilla chips (150 g)"],
                ["🍅", "Salsa roja or verde (1 1/2 cups)"],
                ["🥚", "Eggs, fried (3 pcs)"],
                ["🧀", "Queso fresco, crumbled (1/2 cup)"],
                ["🥛", "Mexican crema or sour cream (1/4 cup)"],
                ["🧅", "Red onion, thinly sliced (1/4 pc)"],
                ["🌿", "Cilantro (2 tbsp)"],
                ["🥑", "Avocado, sliced (1 pc)"]
            ],
            steps: [
                "Prep the toppings: Slice the red onion thinly, chop the cilantro, slice the avocado, and crumble the queso fresco.",
                "Warm the salsa: Pour the salsa into a large, wide skillet and heat over medium heat for 3–4 minutes until simmering and slightly thickened.",
                "Add the chips: Add the tortilla chips and gently fold them in for 1–2 minutes, until all the chips are coated but still have a little crunch. Do not let them go mushy.",
                "Fry the eggs: In a separate pan, fry the eggs in a little oil to your liking, with runny yolks if possible.",
                "Plate: Divide the chilaquiles between 3 plates right away.",
                "Top: Top each portion with a fried egg, crumbled queso fresco and a drizzle of crema.",
                "Garnish: Scatter the onion and cilantro over the top and add the avocado slices.",
                "Serve: Serve immediately, while the chips are still crisp."
            ],
            tips: [
                "Chilaquiles are best made with slightly stale, thick chips, which hold up better.",
                "For softer chilaquiles, simmer the chips in the salsa for 3–4 minutes.",
                "Add shredded chicken for more protein."
            ],
            storage: "Best eaten immediately. The chips go soft quickly, so do not store leftovers."
        },
        {
            name: "Chicken Fajitas",
            image: ph("🌶️", "mexican", "Chicken Fajitas"),
            description: "Sizzling strips of seasoned chicken with charred peppers and onions, served in warm tortillas with your favorite toppings.",
            servings: "4 servings",
            time: "30 mins",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "15 mins",
            ingredients: [
                ["🍗", "Chicken breast, sliced into strips (600 g)"],
                ["🫑", "Bell peppers, sliced (3 pcs, mixed colors)"],
                ["🧅", "Onion, sliced (1 large)"],
                ["🍋", "Limes (2 pcs)"],
                ["🫒", "Cooking oil (2 tbsp)"],
                ["🌶️", "Chili powder (1 tbsp)"],
                ["🧂", "Ground cumin (1 tsp)"],
                ["🧄", "Garlic powder (1 tsp)"],
                ["🌶️", "Paprika (1 tsp)"],
                ["🧂", "Salt (1 tsp)"],
                ["🫓", "Flour tortillas (8 pcs)"]
            ],
            steps: [
                "Slice: Slice the chicken into 1 cm strips. Slice the peppers and onion into long strips of the same thickness.",
                "Make the spice mix: Mix the chili powder, cumin, garlic powder, paprika and salt in a small bowl.",
                "Season the chicken: Toss the chicken with the spice mix, the juice of 1 lime and 1 tablespoon of the oil. Let it sit for 10 minutes, or up to 2 hours.",
                "Heat the pan: Heat a large cast-iron or heavy skillet over high heat until very hot.",
                "Cook the chicken: Add the chicken in a single layer and cook for 5–6 minutes, turning once, until browned and cooked through (74°C / 165°F). Remove to a plate.",
                "Cook the vegetables: Add the remaining oil, then the peppers and onion. Cook for 4–5 minutes, stirring occasionally, until charred at the edges but still slightly crisp.",
                "Combine: Return the chicken to the pan and toss for 1 minute.",
                "Warm the tortillas: Warm the tortillas in a dry pan or wrapped in foil in the oven.",
                "Serve: Bring the skillet to the table and serve with the tortillas, the remaining lime cut in wedges, and toppings like guacamole, sour cream and salsa."
            ],
            tips: [
                "Do not overcrowd the pan, or the vegetables steam instead of char.",
                "Cut everything to the same thickness for even cooking.",
                "A squeeze of lime at the end brightens the flavor."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat quickly in a hot skillet."
        },
        {
            name: "Elote",
            image: ph("🌽", "mexican", "Elote"),
            description: "Mexican street corn grilled until charred, then coated in a creamy, tangy mixture and finished with cotija cheese and chili.",
            servings: "4 servings",
            time: "20 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "15 mins",
            ingredients: [
                ["🌽", "Corn on the cob, husked (4 pcs)"],
                ["🥄", "Mayonnaise (1/4 cup)"],
                ["🥛", "Sour cream or crema (1/4 cup)"],
                ["🧀", "Cotija cheese, crumbled (1/2 cup)"],
                ["🌶️", "Chili powder (1 tsp)"],
                ["🍋", "Limes (2 pcs)"],
                ["🌿", "Cilantro, chopped (2 tbsp)"]
            ],
            steps: [
                "Prep the corn: Remove the husks and silk from the corn. If you like, leave a small portion of husk as a handle.",
                "Heat the grill: Heat a grill or grill pan to medium-high heat.",
                "Grill: Grill the corn for 10–12 minutes, turning every 2–3 minutes, until tender and charred in spots all over.",
                "Make the sauce: In a bowl, mix the mayonnaise and sour cream with the juice of 1 lime and a pinch of salt.",
                "Prep the toppings: Crumble the cotija onto a plate. Chop the cilantro. Cut the other lime into wedges.",
                "Brush: While the corn is hot, brush or spread the sauce over each cob.",
                "Coat: Roll the corn in the crumbled cotija so it sticks all over.",
                "Season: Sprinkle with the chili powder and cilantro.",
                "Serve: Serve immediately with the lime wedges."
            ],
            tips: [
                "Use feta or parmesan if you cannot find cotija.",
                "For corn in a cup (esquites), cut the kernels off the cob and mix them with the sauce and toppings.",
                "Tajín seasoning adds a lovely tangy, spicy kick."
            ],
            storage: "Best fresh. Grilled corn keeps 2 days in the refrigerator; add the sauce just before serving."
        },
        {
            name: "Huevos Rancheros",
            image: ph("🍳", "mexican", "Huevos Rancheros"),
            description: "Fried eggs on crisp tortillas, topped with a warm, smoky tomato-chili sauce and served with refried beans.",
            servings: "2 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "20 mins",
            ingredients: [
                ["🥚", "Eggs (4 pcs)"],
                ["🫓", "Corn tortillas (4 pcs)"],
                ["🫘", "Refried beans (1 cup)"],
                ["🍅", "Canned tomatoes (1 can, 400 g)"],
                ["🧅", "Onion, chopped (1/2 pc)"],
                ["🌶️", "Jalapeño, minced (1 pc)"],
                ["🧄", "Garlic, minced (2 cloves)"],
                ["🧀", "Shredded cheese (1/2 cup)"],
                ["🫒", "Cooking oil (2 tbsp)"]
            ],
            steps: [
                "Prep the sauce ingredients: Finely chop the onion and jalapeño (seed the jalapeño for less heat) and mince the garlic.",
                "Cook the base: Heat 1 tablespoon of the oil in a pan over medium heat. Cook the onion for 3 minutes, then add the jalapeño and garlic for 1 minute.",
                "Add the tomatoes: Add the canned tomatoes with their juice, season with salt, and simmer for 10 minutes.",
                "Blend: Mash with a potato masher, or blend until mostly smooth, and keep warm.",
                "Warm the beans: Heat the refried beans in a small pot with a splash of water until hot.",
                "Crisp the tortillas: Fry the tortillas in a dry or lightly oiled pan for 30 seconds per side until lightly crisp but still pliable.",
                "Fry the eggs: Heat the remaining oil in a non-stick pan and fry the eggs to your liking, over easy for a runny yolk.",
                "Assemble: Spread beans over each tortilla, top with an egg, and spoon over the warm sauce.",
                "Serve: Sprinkle with the cheese and serve immediately, with avocado if you like."
            ],
            tips: [
                "Salt the sauce gradually, since canned tomatoes vary in saltiness.",
                "Use a lid to quickly set the whites for sunny-side-up eggs.",
                "Serve with fresh cilantro and a squeeze of lime."
            ],
            storage: "The sauce keeps 4 days in the refrigerator. Cook the eggs and tortillas fresh."
        },
        {
            name: "Churros",
            image: ph("🍩", "mexican", "Churros"),
            description: "Crisp, golden fried dough sticks rolled in cinnamon sugar. Best served warm with chocolate sauce for dipping.",
            servings: "4 servings",
            time: "40 mins",
            difficulty: "Medium",
            prep: "15 mins",
            cook: "25 mins",
            ingredients: [
                ["💧", "Water (1 cup)"],
                ["🧈", "Butter (2 tbsp)"],
                ["🍬", "Sugar (1 tbsp)"],
                ["🧂", "Salt (1/4 tsp)"],
                ["🌾", "Flour (1 cup)"],
                ["🥚", "Egg (1 large)"],
                ["🧂", "Vanilla extract (1/2 tsp)"],
                ["🍬", "Sugar, for coating (1/2 cup)"],
                ["🌿", "Cinnamon (1 tsp)"],
                ["🫒", "Oil for frying (4 cups)"]
            ],
            steps: [
                "Make the dough base: In a saucepan, bring the water, butter, 1 tablespoon of sugar and the salt to a rolling boil.",
                "Add the flour: Remove from the heat and add the flour all at once. Stir vigorously with a wooden spoon until a smooth ball forms.",
                "Cook the dough: Return to low heat and stir for 1 minute to dry out the dough slightly.",
                "Cool: Transfer to a bowl and cool for 5 minutes so the egg does not scramble.",
                "Add the egg: Beat in the egg and vanilla until the dough is smooth and glossy.",
                "Prep the coating: Mix the coating sugar and cinnamon on a plate.",
                "Pipe: Spoon the dough into a piping bag fitted with a large star tip.",
                "Heat the oil: Heat the oil to 190°C (375°F) in a deep pan. Check with a thermometer, as hot oil is essential.",
                "Fry: Pipe 10 cm (4 in) lengths into the oil, cutting with scissors, and fry for 2–3 minutes per side until deep golden.",
                "Coat: Drain briefly on paper towels, then roll in the cinnamon sugar while still hot.",
                "Serve: Serve warm with chocolate sauce or dulce de leche."
            ],
            tips: [
                "The star tip makes ridges that let steam escape and keep churros from bursting.",
                "Fry just a few at a time to keep the oil hot.",
                "Churros are best within an hour of frying."
            ],
            storage: "Best the same day. Reheat in a 175°C (350°F) oven for 5 minutes."
        }
    ],
    indian: [
        {
            name: "Chicken Curry",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85",
            description: "A richly spiced chicken dish with a fragrant sauce, often served with rice or flatbread.",
            servings: "4 servings",
            time: "45 mins",
            difficulty: "Medium",
            prep: "15 mins",
            cook: "35 mins",
            ingredients: [
                ["🍗", "Chicken (600 g, cut into pieces)"],
                ["🧅", "Onion (2 medium, chopped)"],
                ["🍅", "Tomatoes (2 medium, chopped)"],
                ["🥥", "Coconut milk (1 cup)"],
                ["🌶️", "Curry spices (2 tbsp curry powder)"],
                ["🧄", "Garlic (4 cloves, minced)"],
                ["🫒", "Cooking oil (2 tbsp)"],
                ["🧂", "Salt (1 tsp)"]
            ],
            steps: [
                "Prep the chicken: Cut the chicken into 4 cm pieces and pat dry. Season lightly with salt.",
                "Prep the aromatics: Finely chop the onions, chop the tomatoes, and mince the garlic.",
                "Brown the onions: Heat the oil in a heavy pot over medium heat. Cook the onions for 8–10 minutes, stirring, until deep golden brown. This builds the flavor base.",
                "Bloom the spices: Add the garlic and curry powder and stir for 1 minute until fragrant. Do not let the spices burn.",
                "Add the tomatoes: Add the tomatoes and cook for 5 minutes, pressing them down, until they break down into a paste and the oil separates.",
                "Sear the chicken: Add the chicken and cook for 5 minutes, turning, until lightly browned on all sides and coated in the masala.",
                "Add the coconut milk: Pour in the coconut milk and stir, scraping the bottom of the pot.",
                "Simmer: Cover and simmer on low heat for 15–20 minutes until the chicken is tender and the sauce has thickened.",
                "Season: Taste and add salt. Add a splash of water if the sauce is too thick.",
                "Serve: Serve hot with basmati rice or naan."
            ],
            tips: [
                "Take your time browning the onions. It is the most important step for a rich curry.",
                "Add a pinch of sugar if the tomatoes are too acidic.",
                "Finish with chopped cilantro and a squeeze of lime for freshness."
            ],
            storage: "Keeps 4 days in the refrigerator, or 3 months in the freezer. The flavor improves overnight."
        },
        {
            name: "Biryani",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=85",
            description: "An aromatic rice dish layered with fragrant spices and meat or vegetables.",
            servings: "4 servings",
            time: "1 hr 30 mins",
            difficulty: "Hard",
            prep: "30 mins (+ 30 mins marinating)",
            cook: "1 hr",
            ingredients: [
                ["🍚", "Basmati rice (2 cups)"],
                ["🍗", "Chicken (700 g, cut into pieces)"],
                ["🧅", "Onion (2 large, thinly sliced)"],
                ["🧄", "Garlic (5 cloves, minced)"],
                ["🌿", "Fresh herbs (1 cup mint and coriander, chopped)"],
                ["🌶️", "Spices (2 tbsp biryani masala)"],
                ["🥛", "Plain yogurt (1 cup)"],
                ["🧂", "Salt (2 tsp)"],
                ["🫒", "Oil or ghee (3 tbsp)"]
            ],
            steps: [
                "Marinate the chicken: Mix the chicken with the yogurt, half of the herbs, half of the biryani masala, the garlic and half of the salt. Marinate for at least 30 minutes, or overnight.",
                "Soak the rice: Rinse the basmati rice until the water runs clear, then soak in cold water for 30 minutes. Drain.",
                "Fry the onions: Heat the oil in a heavy pot over medium heat. Fry the sliced onions for 15–20 minutes, stirring often, until deep golden brown. Remove half onto paper towels for the garnish.",
                "Cook the chicken: Add the marinated chicken to the remaining onions in the pot. Cook for 10 minutes until the chicken is half cooked and the masala thickens.",
                "Par-boil the rice: Bring a large pot of water to a boil with the remaining salt. Add the rice and boil for 5 minutes until 70% cooked (it should break easily but still have a firm core). Drain.",
                "Layer: Spread the rice over the chicken. Sprinkle with the remaining herbs, masala and the reserved fried onions.",
                "Seal the pot: Cover with a tight-fitting lid (seal with foil or a dough strip if the lid is loose) so the steam stays in.",
                "Dum cook: Cook on the lowest heat for 25 minutes, undisturbed.",
                "Rest: Turn off the heat and rest for 10 minutes, still covered.",
                "Serve: Gently fluff with a fork from the edges, mixing the layers. Serve with raita and salad."
            ],
            tips: [
                "Under-cook the rice in the first stage; it finishes cooking in the steam.",
                "Add a pinch of saffron soaked in warm milk over the rice for aroma and color.",
                "A tight seal is the secret to fluffy, fragrant biryani."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat with a sprinkle of water, covered, in the microwave or oven."
        },
        {
            name: "Samosa",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85",
            description: "Crispy triangular pastries with a savory filling of potatoes, peas, and fragrant spices.",
            servings: "4 servings",
            time: "1 hr",
            difficulty: "Medium",
            prep: "40 mins",
            cook: "20 mins",
            ingredients: [
                ["🥔", "Potatoes (3 medium, boiled and mashed)"],
                ["🟢", "Peas (1/2 cup)"],
                ["🌾", "Flour (2 cups)"],
                ["🌶️", "Spices (1 tbsp (cumin, coriander, garam masala))"],
                ["🧅", "Onion (1 small, diced)"],
                ["🫒", "Oil (4 tbsp for the dough, plus 3 cups for frying)"],
                ["💧", "Water (1/2 cup)"],
                ["🧂", "Salt (1 tsp)"]
            ],
            steps: [
                "Make the dough: Mix the flour, salt and 4 tablespoons of oil until it resembles breadcrumbs. Add water gradually and knead for 5 minutes into a firm, smooth dough.",
                "Rest: Cover with a damp cloth and rest for 30 minutes.",
                "Prep the potatoes: Boil the potatoes until tender, cool, peel, and mash roughly, leaving small lumps for texture.",
                "Make the filling: Heat 1 tablespoon of oil and sauté the onion for 3 minutes. Add the spices and cook for 30 seconds. Stir in the potatoes, peas and salt. Cool completely.",
                "Roll: Divide the dough into 6 balls. Roll each into an oval 15 cm long, and cut in half crosswise.",
                "Shape the cone: Dampen the straight edge, fold into a cone, overlapping the edges, and press to seal.",
                "Fill: Fill the cone with 2 tablespoons of filling, dampen the open edge, and press to seal firmly.",
                "Heat the oil: Heat the frying oil to 170°C (340°F) over medium heat. Fry in small batches.",
                "Fry: Fry for 8–10 minutes, turning occasionally, until golden brown and crisp.",
                "Serve: Drain on paper towels and serve hot with tamarind or mint chutney."
            ],
            tips: [
                "Cool the filling completely or steam will make the pastry bubble.",
                "Frying on lower heat gives crisp, flaky blistered pastry.",
                "Bake at 200°C (400°F) for 25 minutes for a lighter version."
            ],
            storage: "Keeps 3 days at room temperature in an airtight container. Re-crisp in a 180°C (350°F) oven for 8 minutes."
        },
        {
            name: "Butter Chicken",
            image: ph("🍗", "indian", "Butter Chicken"),
            description: "Tender chicken in a rich, creamy tomato sauce spiced with garam masala and finished with butter. A North Indian favorite.",
            servings: "4 servings",
            time: "55 mins (+ marinating)",
            difficulty: "Medium",
            prep: "20 mins (+ 30 mins marinating)",
            cook: "40 mins",
            ingredients: [
                ["🍗", "Boneless chicken thighs, cubed (700 g)"],
                ["🥛", "Plain yogurt (1/2 cup)"],
                ["🌿", "Garam masala (2 tsp)"],
                ["🧈", "Butter (3 tbsp)"],
                ["🧅", "Onion, finely chopped (1 large)"],
                ["🧄", "Garlic, minced (4 cloves)"],
                ["🫚", "Ginger, grated (1 tbsp)"],
                ["🍅", "Tomato puree (1 1/2 cups)"],
                ["🥛", "Heavy cream (1/2 cup)"],
                ["🌶️", "Kashmiri chili powder (1 tsp)"],
                ["🧂", "Salt (1 tsp)"]
            ],
            steps: [
                "Marinate: Mix the chicken with the yogurt, 1 teaspoon of the garam masala, the chili powder and 1/2 teaspoon of salt. Cover and refrigerate for at least 30 minutes, up to 8 hours.",
                "Sear the chicken: Heat 1 tablespoon of butter in a large pan over medium-high heat. Cook the chicken in batches for 6–8 minutes until browned. It does not need to cook through. Set aside.",
                "Cook the onion: In the same pan, melt the remaining butter and cook the onion for 8 minutes until soft and golden.",
                "Add the aromatics: Stir in the garlic and ginger and cook for 1 minute until fragrant.",
                "Add the tomato: Pour in the tomato puree, the remaining garam masala and 1/2 teaspoon of salt. Simmer for 10–12 minutes until the sauce darkens and the oil separates.",
                "Smooth the sauce: For a silky texture, blend the sauce with an immersion blender and return it to the pan.",
                "Add the chicken: Return the chicken and its juices to the sauce and simmer on low for 10 minutes until fully cooked and tender.",
                "Add the cream: Stir in the cream and simmer for 2–3 minutes. Do not let it boil hard.",
                "Season: Taste and adjust the salt, adding a pinch of sugar if the tomatoes are sharp.",
                "Serve: Serve hot with naan or basmati rice and a swirl of cream."
            ],
            tips: [
                "Searing before simmering gives deeper flavor than simmering raw chicken.",
                "Crushed dried fenugreek leaves (kasuri methi) rubbed in at the end give the authentic aroma.",
                "Use thighs rather than breasts for juicier results."
            ],
            storage: "Keeps 4 days in the refrigerator or 3 months in the freezer. Reheat gently and add a splash of cream."
        },
        {
            name: "Palak Paneer",
            image: ph("🥬", "indian", "Palak Paneer"),
            description: "Soft cubes of paneer in a smooth, spiced spinach gravy. A vegetarian favorite that pairs well with roti or rice.",
            servings: "4 servings",
            time: "40 mins",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "25 mins",
            ingredients: [
                ["🧀", "Paneer, cubed (250 g)"],
                ["🥬", "Fresh spinach (500 g)"],
                ["🧅", "Onion, chopped (1 pc)"],
                ["🍅", "Tomato, chopped (1 large)"],
                ["🧄", "Garlic, minced (4 cloves)"],
                ["🫚", "Ginger, grated (1 tbsp)"],
                ["🌶️", "Green chili (1 pc)"],
                ["🌿", "Cumin seeds (1 tsp)"],
                ["🌿", "Garam masala (1 tsp)"],
                ["🥛", "Cream (2 tbsp)"],
                ["🫒", "Oil or ghee (2 tbsp)"],
                ["🧂", "Salt (1 tsp)"]
            ],
            steps: [
                "Blanch the spinach: Wash the spinach well. Boil it in a large pot for 2 minutes until wilted, then drain and plunge into ice water to keep it bright green.",
                "Blend: Squeeze out the water and blend the spinach with the green chili into a smooth puree. Add a splash of water if needed.",
                "Prep the paneer: Cut the paneer into 2 cm cubes. For extra softness, soak in warm water for 10 minutes.",
                "Temper: Heat the oil or ghee in a pan over medium heat. Add the cumin seeds and sizzle for 20 seconds until they crackle.",
                "Cook the onion: Add the onion and cook for 6 minutes until golden.",
                "Add the aromatics: Add the garlic and ginger and cook for 1 minute.",
                "Add the tomato: Add the chopped tomato and cook for 5 minutes until it breaks down.",
                "Add the spinach: Stir in the spinach puree, garam masala and salt. Simmer for 5 minutes.",
                "Add the paneer: Add the paneer and cream, and simmer very gently for 3 minutes.",
                "Serve: Serve hot with roti, naan or rice."
            ],
            tips: [
                "Do not overcook the spinach or it turns dull and bitter.",
                "Lightly pan-fry the paneer cubes until golden for extra flavor.",
                "A squeeze of lemon at the end brightens the dish."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat gently; do not boil, as the spinach loses its color."
        },
        {
            name: "Chana Masala",
            image: ph("🫘", "indian", "Chana Masala"),
            description: "Chickpeas simmered in a tangy, spiced tomato and onion gravy. A hearty, plant-based Punjabi classic.",
            servings: "4 servings",
            time: "40 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "30 mins",
            ingredients: [
                ["🫘", "Chickpeas, drained (2 cans, 400 g each)"],
                ["🧅", "Onion, finely chopped (1 large)"],
                ["🍅", "Tomatoes, diced (2 pcs)"],
                ["🧄", "Garlic, minced (4 cloves)"],
                ["🫚", "Ginger, grated (1 tbsp)"],
                ["🌿", "Cumin seeds (1 tsp)"],
                ["🌿", "Ground coriander (2 tsp)"],
                ["🌿", "Turmeric (1/2 tsp)"],
                ["🌶️", "Chili powder (1 tsp)"],
                ["🌿", "Garam masala (1 tsp)"],
                ["🫒", "Cooking oil (2 tbsp)"],
                ["🍋", "Lemon juice (1/2 pc)"],
                ["🌿", "Cilantro (2 tbsp)"]
            ],
            steps: [
                "Prep: Finely chop the onion, dice the tomatoes, and mince the garlic. Drain and rinse the chickpeas.",
                "Temper the spices: Heat the oil in a heavy pot over medium heat. Add the cumin seeds and sizzle for 30 seconds.",
                "Brown the onion: Add the onion and cook for 8 minutes until golden.",
                "Add the aromatics: Add the garlic and ginger and cook for 1 minute.",
                "Add the tomatoes: Stir in the tomatoes and cook for 6 minutes until they break down into a thick paste.",
                "Add the ground spices: Add the coriander, turmeric, chili powder and 1 teaspoon of salt. Stir for 1 minute.",
                "Add the chickpeas: Add the chickpeas and 1 cup of water. Bring to a boil, then lower the heat.",
                "Simmer: Simmer for 15 minutes, mashing a few chickpeas against the side of the pot to thicken the gravy.",
                "Finish: Stir in the garam masala, lemon juice and cilantro.",
                "Serve: Serve with basmati rice, bhature or naan."
            ],
            tips: [
                "Dried chickpeas soaked overnight and cooked until tender give the best texture, but canned is convenient.",
                "A tea bag simmered with the chickpeas gives a darker traditional color.",
                "Add amchur (dried mango powder) at the end for authentic tang."
            ],
            storage: "Keeps 5 days in the refrigerator and tastes better the next day. It also freezes well for 3 months."
        },
        {
            name: "Dal Tadka",
            image: ph("🥣", "indian", "Dal Tadka"),
            description: "Creamy yellow lentils finished with a sizzling tempering of ghee, cumin, garlic and chilies. Simple, nourishing everyday comfort food.",
            servings: "4 servings",
            time: "45 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "40 mins",
            ingredients: [
                ["🫘", "Toor dal or red lentils, rinsed (1 cup)"],
                ["💧", "Water (4 cups)"],
                ["🌿", "Turmeric (1/2 tsp)"],
                ["🧂", "Salt (1 tsp)"],
                ["🍅", "Tomato, chopped (1 pc)"],
                ["🧈", "Ghee (2 tbsp)"],
                ["🌿", "Cumin seeds (1 tsp)"],
                ["🧄", "Garlic, sliced (4 cloves)"],
                ["🌶️", "Dried red chilies (2 pcs)"],
                ["🧅", "Onion, finely chopped (1 small)"],
                ["🌿", "Cilantro (2 tbsp)"]
            ],
            steps: [
                "Rinse the lentils: Rinse the lentils in several changes of water until the water runs mostly clear.",
                "Cook the dal: In a pot, combine the lentils, water, turmeric, salt and chopped tomato. Bring to a boil, skimming any foam.",
                "Simmer: Reduce the heat, partly cover, and simmer for 25–30 minutes until the lentils are completely soft and falling apart.",
                "Mash: Whisk or mash lightly so the dal is creamy. Add hot water if it is too thick.",
                "Prep the tadka: Mince the garlic into thin slices and finely chop the onion. Break the dried chilies in half.",
                "Heat the ghee: In a small pan, heat the ghee over medium heat until shimmering.",
                "Temper: Add the cumin seeds and let them sizzle for 20 seconds. Add the onion and cook for 4 minutes until golden.",
                "Add garlic and chilies: Add the garlic and chilies and cook for about 1 minute until the garlic is just golden. Be careful it does not burn.",
                "Combine: Pour the sizzling tadka over the dal and stir, or leave on top for presentation.",
                "Serve: Garnish with cilantro and serve with rice or roti."
            ],
            tips: [
                "Add the tadka at the end, just before serving, for the strongest aroma.",
                "Soak the lentils for 30 minutes to shorten cooking time.",
                "Add a squeeze of lemon to brighten the flavor."
            ],
            storage: "Keeps 4 days in the refrigerator or 3 months in the freezer. It thickens as it cools; add water when reheating."
        },
        {
            name: "Aloo Gobi",
            image: ph("🥔", "indian", "Aloo Gobi"),
            description: "A dry-style North Indian curry of potatoes and cauliflower cooked with onion, tomato and warming spices.",
            servings: "4 servings",
            time: "35 mins",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "25 mins",
            ingredients: [
                ["🥔", "Potatoes, cubed (3 medium)"],
                ["🥦", "Cauliflower florets (1 small head)"],
                ["🧅", "Onion, chopped (1 pc)"],
                ["🍅", "Tomato, chopped (1 pc)"],
                ["🫚", "Ginger, grated (1 tbsp)"],
                ["🧄", "Garlic, minced (3 cloves)"],
                ["🌿", "Cumin seeds (1 tsp)"],
                ["🌿", "Turmeric (1/2 tsp)"],
                ["🌿", "Ground coriander (2 tsp)"],
                ["🌿", "Garam masala (1 tsp)"],
                ["🫒", "Cooking oil (3 tbsp)"],
                ["🌿", "Cilantro (2 tbsp)"]
            ],
            steps: [
                "Prep the vegetables: Cut the potatoes into 2 cm cubes and the cauliflower into small florets. Chop the onion and tomato and mince the garlic.",
                "Temper: Heat the oil in a wide, heavy pan over medium heat. Add the cumin seeds and sizzle for 20 seconds.",
                "Cook the onion: Add the onion and cook for 6 minutes until golden.",
                "Add the aromatics: Add the ginger and garlic and cook for 1 minute.",
                "Add the tomato: Stir in the tomato and cook for 4 minutes until soft.",
                "Add the spices and potatoes: Stir in the turmeric, coriander and 1 teaspoon of salt, then add the potatoes and 1/4 cup of water. Cover and cook for 8 minutes.",
                "Add the cauliflower: Add the cauliflower, mix gently, cover, and cook for 10–12 minutes, stirring now and then.",
                "Finish dry: Uncover and cook for 2–3 minutes to dry off excess moisture.",
                "Season: Sprinkle with the garam masala and cilantro.",
                "Serve: Serve hot with roti or rice and yogurt."
            ],
            tips: [
                "Use very little water so the vegetables steam in their own juices and the dish stays dry.",
                "Do not stir too often, or the cauliflower will turn mushy.",
                "Letting the vegetables brown slightly at the end adds flavor."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat in a pan to keep the texture."
        },
        {
            name: "Garlic Naan",
            image: ph("🫓", "indian", "Garlic Naan"),
            description: "Soft, pillowy Indian flatbread brushed with garlic butter. Cooked in a hot pan at home, it is perfect for scooping up curry.",
            servings: "6 pieces",
            time: "1 hr (including rising)",
            difficulty: "Medium",
            prep: "20 mins (+ 45 mins rising)",
            cook: "15 mins",
            ingredients: [
                ["🌾", "All-purpose flour (2 1/2 cups)"],
                ["🧂", "Instant yeast (1 tsp)"],
                ["🍬", "Sugar (1 tsp)"],
                ["🧂", "Salt (1 tsp)"],
                ["🥛", "Plain yogurt (1/2 cup)"],
                ["💧", "Warm water (1/2 cup, as needed)"],
                ["🫒", "Cooking oil (2 tbsp)"],
                ["🧄", "Garlic, minced (4 cloves)"],
                ["🧈", "Melted butter (3 tbsp)"],
                ["🌿", "Cilantro (2 tbsp)"]
            ],
            steps: [
                "Activate the dough: Mix the flour, yeast, sugar and salt in a large bowl.",
                "Mix: Add the yogurt, oil and enough warm water to form a soft, slightly sticky dough.",
                "Knead: Knead on a lightly floured surface for 8 minutes until smooth and elastic.",
                "Rise: Place in an oiled bowl, cover with a damp cloth, and rest in a warm place for 45 minutes until doubled in size.",
                "Prep the garlic butter: Mix the minced garlic, melted butter and chopped cilantro in a small bowl.",
                "Divide: Punch down the dough and divide into 6 equal balls. Cover and rest for 5 minutes.",
                "Roll: Roll each ball into an oval or teardrop shape, about 5 mm thick.",
                "Heat the pan: Heat a cast-iron skillet over high heat until very hot.",
                "Cook: Place the naan in the dry pan. When bubbles form (about 1 minute), flip and cook for 1 minute more until puffed and charred in spots.",
                "Brush and serve: Brush the hot naan with the garlic butter and serve immediately, wrapped in a towel to stay soft."
            ],
            tips: [
                "A very hot pan gives the characteristic puffs and charred spots.",
                "Keep the dough soft and slightly sticky for tender naan.",
                "Cover cooked naan with a towel to trap steam and keep them soft."
            ],
            storage: "Keeps 2 days in an airtight bag at room temperature. Reheat in a dry pan or foil in the oven. Freezes well for 2 months."
        },
        {
            name: "Chicken Tikka",
            image: ph("🍢", "indian", "Chicken Tikka"),
            description: "Chunks of chicken marinated in yogurt and spices, then grilled until charred and juicy. Serve as a starter or with rice and salad.",
            servings: "4 servings",
            time: "40 mins (+ 2 hrs marinating)",
            difficulty: "Medium",
            prep: "20 mins (+ 2 hrs marinating)",
            cook: "20 mins",
            ingredients: [
                ["🍗", "Boneless chicken, cubed (700 g)"],
                ["🥛", "Plain yogurt (1/2 cup)"],
                ["🍋", "Lemon juice (2 tbsp)"],
                ["🧄", "Ginger-garlic paste (1 tbsp)"],
                ["🌶️", "Kashmiri chili powder (1 tbsp)"],
                ["🌿", "Garam masala (1 tsp)"],
                ["🌿", "Ground cumin (1 tsp)"],
                ["🌿", "Turmeric (1/2 tsp)"],
                ["🫒", "Cooking oil (2 tbsp)"],
                ["🧂", "Salt (1 tsp)"],
                ["🧅", "Red onion, sliced (for serving)"]
            ],
            steps: [
                "Prep the chicken: Cut the chicken into 3–4 cm cubes. Pat dry and make shallow cuts on the surface so the marinade penetrates.",
                "Make the marinade: In a large bowl, combine the yogurt, lemon juice, ginger-garlic paste, chili powder, garam masala, cumin, turmeric, salt and oil.",
                "Marinate: Add the chicken and coat well. Cover and refrigerate for at least 2 hours, preferably overnight.",
                "Prep the skewers: If using wooden skewers, soak them in water for 30 minutes to prevent burning.",
                "Thread: Thread the chicken onto skewers, leaving small gaps between the pieces so they cook evenly.",
                "Heat: Preheat the grill, broiler or oven to 230°C (450°F). Line a tray with foil and place a rack on top.",
                "Cook: Cook for 15–18 minutes, turning every 5 minutes, until the chicken is cooked through (74°C / 165°F) with charred spots.",
                "Rest: Rest for 5 minutes.",
                "Serve: Serve with sliced red onion, lemon wedges and mint chutney."
            ],
            tips: [
                "Thick, strained yogurt tenderizes the chicken and creates the characteristic crust.",
                "For extra char, finish under the broiler for 2 minutes.",
                "Brush the skewers with a little melted butter halfway through for extra juiciness."
            ],
            storage: "Keeps 3 days in the refrigerator. Reheat in the oven or a hot pan so it does not dry out."
        }
    ],
    american: [
        {
            name: "Burger",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
            description: "A classic burger featuring a juicy patty, fresh vegetables, cheese, and sauces in a soft bun.",
            servings: "2 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "15 mins",
            ingredients: [
                ["🍞", "Burger buns (2)"],
                ["🥩", "Beef patties (2 (150 g each))"],
                ["🧀", "Cheese (2 slices)"],
                ["🍅", "Tomatoes (1 pc, sliced)"],
                ["🥬", "Lettuce (2 leaves)"],
                ["🧅", "Onion (1/2 pc, sliced)"],
                ["🧂", "Salt and pepper (to taste)"]
            ],
            steps: [
                "Prep the toppings: Slice the tomato and onion, wash and dry the lettuce, and set out the cheese and buns.",
                "Shape the patties: Divide the beef into two 150 g portions. Gently shape each into a patty about 1.5 cm thick and slightly wider than the bun, since patties shrink as they cook. Handle the meat as little as possible.",
                "Dimple: Press a shallow dimple in the center of each patty with your thumb so they cook flat instead of puffing.",
                "Season: Season both sides generously with salt and pepper just before cooking.",
                "Heat: Heat a grill or cast-iron skillet over medium-high heat until very hot.",
                "Cook: Cook the patties for 4 minutes without pressing, then flip and cook for 3–4 minutes more for medium (71°C / 160°F for ground beef).",
                "Melt the cheese: Add the cheese in the last minute and cover the pan or grill to melt it.",
                "Toast the buns: Place the buns cut-side down on the grill or in a pan for 1–2 minutes until golden.",
                "Rest: Let the patties rest for 2 minutes.",
                "Assemble: Stack the bottom bun, lettuce, patty with cheese, tomato, onion, then the top bun. Serve immediately."
            ],
            tips: [
                "Never press down on the patty while cooking. It squeezes out the juices.",
                "Use 80/20 ground beef for the juiciest burger.",
                "Keep the meat cold until cooking for a better texture."
            ],
            storage: "Cooked patties keep 3 days in the refrigerator. Reheat gently; assemble fresh."
        },
        {
            name: "Pancakes",
            image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=85",
            description: "Fluffy breakfast pancakes served with butter and syrup for a sweet and satisfying start to the day.",
            servings: "3 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "15 mins",
            ingredients: [
                ["🌾", "Flour (1 1/2 cups)"],
                ["🥚", "Eggs (1 large)"],
                ["🥛", "Milk (1 1/4 cups)"],
                ["🧈", "Butter (3 tbsp, melted)"],
                ["🍬", "Sugar (1 tbsp)"],
                ["🍯", "Syrup (for serving)"],
                ["🧂", "Baking powder (3 1/2 tsp)"],
                ["🧂", "Salt (1/4 tsp)"]
            ],
            steps: [
                "Mix the dry ingredients: In a large bowl, whisk the flour, baking powder, sugar and salt.",
                "Mix the wet ingredients: In another bowl, whisk the milk, egg and melted butter together.",
                "Combine: Pour the wet ingredients into the dry. Stir with a spatula just until combined, about 10 strokes. The batter should be slightly lumpy.",
                "Rest: Let the batter rest for 5 minutes so the flour hydrates and the baking powder activates.",
                "Heat the pan: Heat a non-stick pan or griddle over medium heat. Lightly grease with butter. A drop of water should sizzle.",
                "Pour: Pour about 1/4 cup of batter per pancake, leaving space between each.",
                "Cook the first side: Cook for about 2 minutes until bubbles appear on the surface and the edges look set.",
                "Flip: Flip once and cook for 1–2 minutes more until golden brown.",
                "Keep warm: Keep finished pancakes in a 90°C (200°F) oven while you cook the rest.",
                "Serve: Stack and serve with syrup and butter."
            ],
            tips: [
                "Overmixing makes pancakes tough. A few lumps are fine.",
                "The first pancake is often a test. Adjust the heat if needed.",
                "Add blueberries or chocolate chips to the batter once poured in the pan."
            ],
            storage: "Keeps 3 days in the refrigerator or 2 months in the freezer. Reheat in a toaster or microwave."
        },
        {
            name: "Fried Chicken",
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=85",
            description: "Crispy golden chicken with a flavorful coating and a juicy interior, a popular comfort food.",
            servings: "4 servings",
            time: "1 hr 15 mins",
            difficulty: "Medium",
            prep: "20 mins (+ 1 hr soaking)",
            cook: "25 mins",
            ingredients: [
                ["🍗", "Chicken (1 kg, assorted pieces)"],
                ["🌾", "Flour (2 cups)"],
                ["🥚", "Eggs (1 large)"],
                ["🥛", "Milk (1 cup)"],
                ["🧂", "Salt (2 tsp)"],
                ["🌶️", "Seasonings (2 tbsp (paprika, garlic powder, black pepper))"],
                ["🫒", "Oil for frying (4 cups)"]
            ],
            steps: [
                "Soak: Combine the milk, egg and half of the salt in a large bowl. Add the chicken and refrigerate for at least 1 hour, or up to 8 hours.",
                "Make the coating: In a shallow dish, mix the flour with the remaining salt and the seasonings (paprika, garlic powder, pepper).",
                "Dredge: Lift each piece out of the soak, letting the excess drip off, then press firmly into the flour. Turn to coat all sides.",
                "Rest: Place on a wire rack and rest for 10–15 minutes. This helps the coating adhere.",
                "Heat the oil: Heat the oil to 170°C (340°F) in a heavy pot or deep skillet, with at least 3 cm of oil. Use a thermometer and keep it at 160–170°C.",
                "Fry: Carefully lower in a few pieces at a time, skin-side down. Do not crowd the pan.",
                "Turn: Fry for 12–15 minutes, turning once, until deep golden brown and the internal temperature reaches 74°C (165°F).",
                "Drain: Drain on a wire rack, not paper towels, so it stays crisp.",
                "Rest and serve: Rest for 5 minutes and serve hot."
            ],
            tips: [
                "Keep the oil temperature steady for crisp, non-greasy chicken.",
                "Dark meat (thighs, drumsticks) is more forgiving than breasts.",
                "Dip the coated chicken back into the soak, then the flour again, for an extra-craggy crust."
            ],
            storage: "Keeps 4 days in the refrigerator. Reheat on a rack in a 200°C (400°F) oven for 15 minutes to restore crispness."
        },
        {
            name: "Mac and Cheese",
            image: ph("🧀", "american", "Mac and Cheese"),
            description: "Tender macaroni in a velvety, sharp cheddar sauce. This stovetop version is creamy, comforting and ready in minutes.",
            servings: "4 servings",
            time: "35 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "25 mins",
            ingredients: [
                ["🍝", "Elbow macaroni (300 g)"],
                ["🧈", "Butter (3 tbsp)"],
                ["🌾", "Flour (3 tbsp)"],
                ["🥛", "Milk (2 1/2 cups)"],
                ["🧀", "Sharp cheddar, shredded (2 cups)"],
                ["🌿", "Mustard powder (1/2 tsp)"],
                ["🧂", "Salt and black pepper (to taste)"],
                ["🍞", "Breadcrumbs (1/2 cup, optional topping)"]
            ],
            steps: [
                "Grate the cheese: Shred the cheddar yourself. Pre-shredded cheese contains anti-caking starch that makes the sauce grainy.",
                "Boil the pasta: Cook the macaroni in well-salted boiling water for 1 minute less than package time. Drain, and do not rinse.",
                "Start the roux: Melt the butter in a large saucepan over medium heat. Whisk in the flour and cook for 1 minute, stirring constantly, without letting it brown.",
                "Add the milk: Slowly pour in the milk while whisking continuously to prevent lumps.",
                "Thicken: Simmer for 5 minutes, stirring often, until the sauce coats the back of a spoon.",
                "Add the cheese: Remove from the heat. Add the cheese a handful at a time, stirring until each addition melts. Stir in the mustard powder.",
                "Season: Season with salt and black pepper. Taste carefully, as cheese is salty.",
                "Combine: Fold in the macaroni until evenly coated.",
                "Optional bake: Transfer to a baking dish, top with the breadcrumbs and bake at 200°C (400°F) for 15 minutes until golden.",
                "Serve: Serve immediately."
            ],
            tips: [
                "Remove the pan from the heat before adding the cheese to prevent the sauce from splitting.",
                "Sharp cheddar mixed with Gruyère or Monterey Jack gives great flavor and melt.",
                "A pinch of mustard powder sharpens the cheese flavor without tasting of mustard."
            ],
            storage: "Keeps 4 days in the refrigerator. Reheat with a splash of milk over low heat."
        },
        {
            name: "Buffalo Wings",
            image: ph("🍗", "american", "Buffalo Wings"),
            description: "Crispy oven-baked chicken wings tossed in a tangy, buttery hot sauce. Serve with celery sticks and blue cheese dressing.",
            servings: "4 servings",
            time: "55 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "50 mins",
            ingredients: [
                ["🍗", "Chicken wings (1 kg)"],
                ["🧂", "Baking powder (1 tbsp)"],
                ["🧂", "Salt (1 tsp)"],
                ["🌶️", "Hot sauce (1/2 cup)"],
                ["🧈", "Melted butter (4 tbsp)"],
                ["🧄", "Garlic powder (1/2 tsp)"],
                ["🥬", "Celery sticks (for serving)"],
                ["🥛", "Blue cheese or ranch dressing (for dipping)"]
            ],
            steps: [
                "Dry the wings: Pat the wings very dry with paper towels. Moisture prevents crisping.",
                "Season: In a large bowl, toss the wings with the baking powder and salt until evenly coated. Do not use baking soda.",
                "Arrange: Place a wire rack on a foil-lined baking tray and arrange the wings in a single layer with space between them.",
                "Preheat: Heat the oven to 220°C (425°F).",
                "Bake: Bake for 45–50 minutes, flipping after 25 minutes, until the skin is deeply golden and crisp.",
                "Make the sauce: While the wings bake, whisk the hot sauce, melted butter and garlic powder in a large bowl.",
                "Toss: Add the hot wings to the sauce right out of the oven and toss until evenly coated.",
                "Serve: Serve at once with celery sticks and blue cheese or ranch dressing."
            ],
            tips: [
                "The baking powder raises the skin's pH so it browns and crisps like fried wings.",
                "Use a rack so hot air circulates around the whole wing.",
                "Toss in the sauce at the last second to keep them crisp."
            ],
            storage: "Keeps 3 days in the refrigerator. Re-crisp in a 200°C (400°F) oven for 10 minutes."
        },
        {
            name: "Meatloaf",
            image: ph("🍖", "american", "Meatloaf"),
            description: "A classic homestyle meatloaf with a sweet and tangy ketchup glaze. Tender, juicy and great with mashed potatoes.",
            servings: "6 servings",
            time: "1 hr 10 mins",
            difficulty: "Easy",
            prep: "15 mins",
            cook: "1 hr",
            ingredients: [
                ["🥩", "Ground beef (700 g)"],
                ["🍞", "Breadcrumbs (3/4 cup)"],
                ["🥛", "Milk (1/2 cup)"],
                ["🥚", "Eggs (2 pcs)"],
                ["🧅", "Onion, finely diced (1 small)"],
                ["🧄", "Garlic, minced (2 cloves)"],
                ["🍅", "Ketchup (1/2 cup, divided)"],
                ["🥣", "Worcestershire sauce (1 tbsp)"],
                ["🍬", "Brown sugar (1 tbsp)"],
                ["🧂", "Salt and black pepper (1 tsp salt, 1/2 tsp pepper)"]
            ],
            steps: [
                "Preheat: Heat the oven to 180°C (350°F).",
                "Make the panade: Mix the breadcrumbs and milk in a large bowl and let sit for 5 minutes until the breadcrumbs absorb the milk. This keeps the loaf moist.",
                "Prep the aromatics: Finely dice the onion and mince the garlic.",
                "Mix: Add the beef, eggs, onion, garlic, 1/4 cup of the ketchup, the Worcestershire sauce, salt and pepper. Mix gently with your hands until just combined. Overmixing makes meatloaf dense.",
                "Shape: Form into a loaf about 20×10 cm on a foil-lined baking tray or in a loaf pan.",
                "Make the glaze: Stir the remaining ketchup with the brown sugar and spread half over the top.",
                "Bake: Bake for 40 minutes, then spread with the remaining glaze.",
                "Finish baking: Bake 15–20 minutes more until the internal temperature reaches 71°C (160°F).",
                "Rest: Rest for 10 minutes so the juices settle.",
                "Serve: Slice into 2 cm slices and serve with mashed potatoes and green beans."
            ],
            tips: [
                "Do not overmix or the meatloaf turns tough.",
                "A meat thermometer ensures it is cooked through without drying out.",
                "Leftovers make great sandwiches the next day."
            ],
            storage: "Keeps 4 days in the refrigerator or 3 months in the freezer. Reheat slices covered in a low oven or microwave."
        },
        {
            name: "Grilled Cheese Sandwich",
            image: ph("🥪", "american", "Grilled Cheese Sandwich"),
            description: "Golden, buttery toasted bread with gooey melted cheddar inside. A simple American comfort classic.",
            servings: "2 servings",
            time: "10 mins",
            difficulty: "Easy",
            prep: "5 mins",
            cook: "8 mins",
            ingredients: [
                ["🍞", "Bread slices (4 pcs)"],
                ["🧀", "Cheddar slices (4 pcs)"],
                ["🧈", "Softened butter (2 tbsp)"],
                ["🍅", "Tomato slices (optional)"]
            ],
            steps: [
                "Prep: Set out the bread and let the butter soften at room temperature so it spreads easily.",
                "Slice the cheese: Slice the cheddar thinly or use ready-sliced cheese so it melts quickly and evenly.",
                "Butter the bread: Spread the soft butter evenly from edge to edge on one side of each slice of bread.",
                "Assemble: Place 2 slices butter-side down. Top with 2 slices of cheddar each (and tomato slices, if using).",
                "Top: Cover with the remaining bread, butter-side up.",
                "Heat the pan: Heat a skillet over medium-low heat. Low heat is key.",
                "Cook the first side: Place the sandwiches in the pan and cook for 3–4 minutes until golden brown. Press gently with a spatula.",
                "Flip: Flip and cook for 3–4 minutes more until the second side is golden and the cheese has fully melted.",
                "Rest: Let rest for 1 minute.",
                "Serve: Slice diagonally and serve hot."
            ],
            tips: [
                "Cover the pan for the last minute to help melt the cheese.",
                "Mayonnaise spread on the outside instead of butter gives an extra-crisp, evenly golden crust.",
                "Pair with tomato soup for dipping."
            ],
            storage: "Best eaten right away. Reheat in a skillet over low heat; do not microwave."
        },
        {
            name: "Cornbread",
            image: ph("🌽", "american", "Cornbread"),
            description: "A tender, slightly sweet Southern-style cornbread with a golden crust. Great with chili, fried chicken or just butter.",
            servings: "8 servings",
            time: "35 mins",
            difficulty: "Easy",
            prep: "10 mins",
            cook: "25 mins",
            ingredients: [
                ["🌽", "Cornmeal (1 cup)"],
                ["🌾", "All-purpose flour (1 cup)"],
                ["🍬", "Sugar (1/4 cup)"],
                ["🧂", "Baking powder (1 tbsp)"],
                ["🧂", "Salt (1/2 tsp)"],
                ["🥛", "Milk (1 cup)"],
                ["🥚", "Eggs (2 pcs)"],
                ["🧈", "Melted butter (1/3 cup)"]
            ],
            steps: [
                "Preheat: Heat the oven to 200°C (400°F). Grease a 20 cm (8 in) square pan or a 25 cm cast-iron skillet. For a crisper crust, heat the skillet in the oven for 5 minutes.",
                "Mix the dry ingredients: In a large bowl, whisk the cornmeal, flour, sugar, baking powder and salt.",
                "Mix the wet ingredients: In another bowl, whisk the milk, eggs and melted butter until smooth.",
                "Combine: Pour the wet ingredients into the dry and stir until just combined. A few small lumps are fine.",
                "Rest: Let the batter rest for 5 minutes so the cornmeal softens.",
                "Pour: Pour the batter into the prepared pan and smooth the top.",
                "Bake: Bake for 20–25 minutes until golden on top and a toothpick inserted into the center comes out clean.",
                "Cool: Cool in the pan for 5 minutes.",
                "Serve: Cut into squares and serve warm with butter and honey."
            ],
            tips: [
                "Preheating a greased skillet gives a crisp, golden bottom crust.",
                "Do not overmix or the cornbread will be dense.",
                "Add jalapeños or shredded cheddar for a savory variation."
            ],
            storage: "Keeps 3 days at room temperature in an airtight container, or 3 months in the freezer. Warm before serving."
        },
        {
            name: "Apple Pie",
            image: ph("🥧", "american", "Apple Pie"),
            description: "A double-crust pie packed with tender cinnamon-spiced apples and baked until golden. A true American dessert.",
            servings: "8 servings",
            time: "1 hr 30 mins",
            difficulty: "Medium",
            prep: "40 mins",
            cook: "55 mins (+ 2 hrs cooling)",
            ingredients: [
                ["🥧", "Pie crust dough, double crust (2 rounds, 9-inch)"],
                ["🍎", "Tart apples, peeled and thinly sliced (6 large)"],
                ["🍬", "Sugar (3/4 cup)"],
                ["🍬", "Brown sugar (1/4 cup)"],
                ["🌾", "Flour (2 tbsp)"],
                ["🌿", "Cinnamon (1 1/2 tsp)"],
                ["🌿", "Nutmeg (1/4 tsp)"],
                ["🍋", "Lemon juice (1 tbsp)"],
                ["🧈", "Butter, cut into small pieces (2 tbsp)"],
                ["🥚", "Egg, beaten, for brushing (1 pc)"]
            ],
            steps: [
                "Prep the apples: Peel, core and slice the apples about 5 mm thick. Toss with the lemon juice to prevent browning.",
                "Make the filling: Add the sugar, brown sugar, flour, cinnamon and nutmeg and toss. Let the apples sit for 15 minutes, then drain off excess liquid, reserving it.",
                "Reduce the juices (optional): Simmer the reserved juice for 3–5 minutes until syrupy, then toss it back with the apples for a firmer filling.",
                "Preheat: Heat the oven to 220°C (425°F) with a baking tray on the lower rack to catch drips.",
                "Line the pie dish: Roll out one round of dough and fit it into a 9-inch pie dish, leaving the overhang.",
                "Fill: Pile the apples in, mounding in the center, and dot with the butter.",
                "Cover: Roll out the second round and place over the filling. Trim, fold the edges under, and crimp with a fork or fingers.",
                "Vent and glaze: Cut 4–5 slits in the top for steam. Brush with the beaten egg for a golden shine.",
                "Bake: Bake for 20 minutes, then reduce the temperature to 180°C (350°F) and bake for 35–40 minutes more until golden and bubbling through the slits. Cover the edges with foil if browning too quickly.",
                "Cool: Cool for at least 2 hours so the filling sets before slicing."
            ],
            tips: [
                "Use a mix of tart apples, such as Granny Smith, and sweeter ones, such as Honeycrisp, for the best flavor and texture.",
                "Keep the dough cold for a flaky crust; chill it for 20 minutes before baking if it softens.",
                "Letting the pie cool is essential. Cutting early gives a runny filling."
            ],
            storage: "Keeps 2 days at room temperature and 5 days in the refrigerator. Reheat slices in a 175°C (350°F) oven for 10 minutes."
        },
        {
            name: "Cobb Salad",
            image: ph("🥗", "american", "Cobb Salad"),
            description: "A hearty main-dish salad with chicken, bacon, egg, avocado and blue cheese, arranged in neat rows over crisp greens.",
            servings: "2 servings",
            time: "25 mins",
            difficulty: "Easy",
            prep: "20 mins",
            cook: "10 mins",
            ingredients: [
                ["🥬", "Romaine lettuce, chopped (1 head)"],
                ["🍗", "Cooked chicken breast, diced (1 pc)"],
                ["🥓", "Bacon, cooked and crumbled (4 slices)"],
                ["🥚", "Hard-boiled eggs, sliced (2 pcs)"],
                ["🥑", "Avocado, diced (1 pc)"],
                ["🍅", "Tomatoes, diced (2 pcs)"],
                ["🧀", "Blue cheese, crumbled (1/4 cup)"],
                ["🫒", "Olive oil (3 tbsp)"],
                ["🍶", "Red wine vinegar (1 tbsp)"],
                ["🥄", "Dijon mustard (1 tsp)"]
            ],
            steps: [
                "Boil the eggs: Place the eggs in boiling water and cook for 10 minutes. Cool in ice water for 5 minutes, then peel and slice.",
                "Cook the bacon: Cook the bacon in a pan over medium heat for 8–10 minutes until crisp. Drain on paper towels and crumble.",
                "Prep the chicken: Dice the cooked chicken breast into 1.5 cm pieces. If using raw chicken, cook it first until it reaches 74°C (165°F), then cool and dice.",
                "Prep the vegetables: Chop the romaine into bite-sized pieces, dice the tomatoes and avocado, and crumble the blue cheese.",
                "Make the dressing: In a small bowl or jar, whisk the olive oil, red wine vinegar and Dijon mustard with a pinch of salt and pepper until emulsified.",
                "Build the salad: Spread the romaine across a large platter or two shallow bowls.",
                "Arrange: Arrange the chicken, bacon, eggs, avocado, tomatoes and blue cheese in neat rows over the lettuce.",
                "Dress: Drizzle the dressing over the top just before serving.",
                "Serve: Toss at the table, or let everyone mix their own."
            ],
            tips: [
                "Dice everything to a similar size so every forkful has a bit of everything.",
                "Squeeze a little lemon over the avocado to keep it green.",
                "Add the dressing at the last minute so the lettuce stays crisp."
            ],
            storage: "Best fresh. Store the components separately for up to 2 days and assemble just before eating."
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