import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const route = express.Router();

route.post("/login", login);
route.post("/logout", logout);
route.post("/signup", signup);
route.post("/google", login);

export default route;
