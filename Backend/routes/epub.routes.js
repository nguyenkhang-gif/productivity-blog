import express from "express";
import { genEpub, getHtml } from "../controllers/epub.controller.js";
const router = express.Router();

router.post("/fetch-html", getHtml);
router.post("/gen-epub", genEpub);
export default router;
