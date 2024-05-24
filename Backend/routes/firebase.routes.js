import express from "express";
import FBconfig from "../firebase/firebase.config.js";

// import { getStorage } from "firebase/storage";
import multer from "multer";

import { handleUploadImg } from "../controllers/firebase.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

// import firebaseConfig from "../firebase/firebase.config.js";

const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/upload",
  protectRoute,
  upload.single("filename"),

  handleUploadImg
);
// router.post("/test", protectRoute, (req, res) => {
//   console.log(req.user);
// });

export default router;
