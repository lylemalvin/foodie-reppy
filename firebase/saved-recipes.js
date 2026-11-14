import { auth, db } from "./firebase-config.js";
import { collection, deleteDoc, doc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

function recipeDocumentId(category, name) {
    return `${category}_${name}`.toLowerCase().replace(/[^a-z0-9_-]/g, "_");
}

export async function getSavedRecipes() {
    const user = auth.currentUser;
    if (!user) return { loggedIn: false, favorites: [], bookmarks: [] };

    const snapshot = await getDocs(collection(db, "users", user.uid, "savedRecipes"));
    const saved = { loggedIn: true, favorites: [], bookmarks: [] };

    snapshot.forEach(item => {
        const data = item.data();
        if (data.type === "favorites" || data.type === "bookmarks") {
            saved[data.type].push({ category: data.category, name: data.name });
        }
    });

    return saved;
}

export async function toggleSavedRecipe(type, category, name) {
    const user = auth.currentUser;
    if (!user) throw new Error("Please log in to save your recipes.");
    if (!['favorites', 'bookmarks'].includes(type) || !category || !name) {
        throw new Error("Invalid recipe information.");
    }

    const id = `${type}_${recipeDocumentId(category, name)}`;
    const reference = doc(db, "users", user.uid, "savedRecipes", id);
    const existing = await getDocs(collection(db, "users", user.uid, "savedRecipes"));
    const found = existing.docs.some(item => item.id === id);

    if (found) {
        await deleteDoc(reference);
        return false;
    }

    await setDoc(reference, {
        type,
        category,
        name,
        createdAt: new Date().toISOString()
    });
    return true;
}
