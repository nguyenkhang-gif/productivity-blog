import express from "express";
import dotenv from "dotenv";
import epubRoute from "./routes/epub.routes.js";
import userRoute from "./routes/user.routes.js";
import firebaseRoute from "./routes/firebase.routes.js";
import authRoute from "./routes/auth.routes.js";
import pomodoroRoute from "./routes/pomodoro.routes.js";

import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import path from "path";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

const __dirname = path.resolve();

// app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json({ limit: "150mb" }));

app.use(cookieParser());
// Middleware to parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/epub", epubRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/messages", epubRoute);
app.use("/api/firebase", firebaseRoute);
app.use("/api/pomodoro", pomodoroRoute);
app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectToMongoDB();
  console.log(__dirname);
});
