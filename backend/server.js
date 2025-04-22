const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Login route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (err) {
        res.status(500).json({ error: "Database error" });
      } else if (!row) {
        res.status(401).json({ error: "Invalid credentials" });
      } else {
        res.status(200).json({ message: "Login successful", user: row });
      }
    }
  );
});

// Optional: Register route
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    function (err) {
      if (err) {
        res.status(400).json({ error: "Username already exists" });
      } else {
        res
          .status(201)
          .json({ message: "User registered", userId: this.lastID });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
