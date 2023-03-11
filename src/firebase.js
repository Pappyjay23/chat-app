import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const ApiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const AuthDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const ProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const StorageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const MessagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const AppId = import.meta.env.VITE_FIREBASE_APP_ID;

const firebaseConfig = {
	apiKey: ApiKey,
	authDomain: AuthDomain,
	projectId: ProjectId,
	storageBucket: StorageBucket,
	messagingSenderId: MessagingSenderId,
	appId: AppId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore()
