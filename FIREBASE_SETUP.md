# Foodie Reppy Firebase Setup

## 1. Create the Firebase project

1. Open https://console.firebase.google.com/ and create a project.
2. Add a Web App to the project.
3. Copy the Firebase configuration values into `firebase/firebase-config.js`.
4. In Authentication, enable the Email/Password sign-in provider.
5. Create a Cloud Firestore database.
6. Open Firestore Rules and publish the contents of `firestore.rules`.

## 2. Configure the website

Replace every placeholder in `firebase/firebase-config.js` with the values from Project settings > General > Your apps. Do not add quotes around numeric values; the configuration values are strings.

Add your deployed domain and any local testing domain to Authentication > Settings > Authorized domains.

## 3. Test locally

Firebase modules require the website to be served over HTTP. Do not open `index.html` directly from File Explorer.

You can use the VS Code Live Server extension for a local preview. Register a test account, log in, open Categories, and test favorites and bookmarks.

## 4. Deploy to Firebase Hosting

Install Node.js, then install Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
```

From the project folder, copy `.firebaserc.example` to `.firebaserc` and replace `YOUR_PROJECT_ID` with the Firebase project ID. The Hosting and Firestore rules configuration is already included in `firebase.json`.

Then deploy:

```bash
firebase deploy --only hosting,firestore:rules
```

## 5. Data structure

User profiles are stored at `users/{uid}`. Saved recipes are stored under `users/{uid}/savedRecipes/{recipeId}`. Firebase Authentication manages passwords; this project never stores password values in Firestore.

## Important notes

- Existing MySQL accounts and saved recipes are not automatically transferred. Users need to create Firebase accounts unless you perform a separate account migration.
- Existing MySQL password hashes cannot be copied into Firestore as usable Firebase passwords. A supported Firebase Authentication import or password reset/re-registration process is required.
- Keep `firebase/firebase-config.js` configured with your own project values before testing. The placeholder configuration will not connect.
- Firestore rules restrict each signed-in user to their own user document and saved-recipe subcollection.
- Firebase web configuration is visible in the browser by design. Security comes from Authentication and Firestore Security Rules, not hiding the config values.
