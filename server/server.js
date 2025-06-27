
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// Startseite
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// API: Spiel starten
app.post("/start-game", (req, res) => {
  res.json({ success: true, message: "Spiel gestartet!" });
});

// Fallback für alle anderen nicht existierenden Routen
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Server starten
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf Port ${PORT}`);
});
