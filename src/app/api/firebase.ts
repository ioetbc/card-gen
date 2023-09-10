import * as admin from "firebase-admin";
const serviceAccount = require("./service-account.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "cardappthing.appspot.com",
  });
}

export const db = admin.firestore();
export const storage = admin.storage().bucket();
