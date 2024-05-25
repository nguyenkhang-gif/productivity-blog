import admin from "firebase-admin";
// import FBconfig from "./firebase.config.js";
import servicekey from "./bucket.config.js";
import dotenv from 'dotenv'
dotenv.config()
// const serviceAccount = JSON.parse(JSON.stringify(servicekey)); 
admin.initializeApp({
  credential: admin.credential.cert(servicekey),
  storageBucket: `${process.env.FBstorageBucket}`, // Replace with your Firebase project ID
});

const bucket = admin.storage().bucket();
export default bucket;
