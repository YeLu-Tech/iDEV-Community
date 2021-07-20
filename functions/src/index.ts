/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp();
const db = admin.firestore();

export const createUserDocument = functions.auth.user().onCreate((user) => {
  db.collection("users")
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});

export const helloWorld = functions.https.onRequest(
  (request: functions.Request, response: functions.Response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
  }
);
