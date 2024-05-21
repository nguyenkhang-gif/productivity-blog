import express from "express";
import dotenv from "dotenv";
import epubRoute from "./routes/epub.routes.js";
import bodyParser from "body-parser";
import path from "path";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

// app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json({ limit: "150mb" }));
// Middleware to parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/epub", epubRoute);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
