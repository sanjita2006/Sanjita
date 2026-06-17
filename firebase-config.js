	// ==========================================
// FIREBASE CONFIGURATION (COMPAT SDK)
// ==========================================
// Connected to Firebase Project: portfolio-8b430

const firebaseConfig = {
    apiKey: "AIzaSyBFAAtCnpQMwz8nJbgvDXVJ91TOgXsJhjo	",
    authDomain: "sanjita-27bea.firebaseapp.com	",
    projectId: "sanjita-27bea",
    storageBucket: "sanjita-27bea.firebasestorage.app",
    messagingSenderId: "899773223893",
    appId: "1:899773223893:web:b5ab3bf0b32a012cc8a35c	",
    measurementId: "G-RDBCCQDG3D"
};

// Initialize Firebase (Only if config is set, otherwise fall back to mock data)
let firebaseApp = null;
let auth = null;
let db = null;

// Simple check to make sure the student replaced the placeholders
const isFirebaseConfigured = firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";

if (isFirebaseConfigured) {
    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        console.log("Firebase initialized successfully (Authentication & Firestore).");
    } catch (error) {
        console.error("Firebase initialization failed: ", error);
    }
} else {
    console.warn("Firebase is not configured yet. The portfolio will run in 'Offline Mock Data' mode.");
}

// ==========================================
// STUDENT IDENTIFIER SETTING
// ==========================================
// In a single-student portfolio, keep this consistent between index.html and admin.html.
const STUDENT_ID = "alex_morgan";
