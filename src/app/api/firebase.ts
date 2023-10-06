import * as admin from "firebase-admin";
// const serviceAccount = require("./service-account.json");

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT as string
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "cardappthing.appspot.com",
  });
}

export const db = admin.firestore();
export const storage = admin.storage().bucket();
