// Import the functions you need from the SDKs you need

import dotenv from "dotenv";
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.FBapiKey}`,
  authDomain: `${process.env.FBauthDomain}`,
  projectId: `${process.env.FBprojectId}`,
  storageBucket: `${process.env.FBstorageBucket}`,
  messagingSenderId: `${process.env.FBmessagingSenderId}`,
  appId: `${process.env.FBappId}`,
  measurementId: `${process.env.FBmeasurementId}`,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default firebaseConfig
// const analytics = getAnalytics(app);
