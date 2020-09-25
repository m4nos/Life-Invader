const admin = require("firebase-admin");

const serviceAccount = require("../life-invader-ccfd3-firebase-adminsdk-geo39-a76b899d29.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://life-invader-ccfd3.firebaseio.com",
  storageBucket: "life-invader-ccfd3.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };