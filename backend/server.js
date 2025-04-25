const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/reviews", async (req, res) => {
  try {
    const { review, orderDetails } = req.body;

    // Validation
    if (!review || typeof review !== "string" || review.length > 500) {
      return res.status(400).json({ error: "Invalid review content" });
    }

    if (!orderDetails || !orderDetails.total || !orderDetails.items) {
      return res.status(400).json({ error: "Invalid order details" });
    }

    // Insert review
    db.run(
      `INSERT INTO reviews 
       (content, order_id, total_amount, items_count) 
       VALUES (?, ?, ?, ?)`,
      [
        review,
        orderDetails.orderId || `order_${Date.now()}`,
        orderDetails.total,
        orderDetails.items.length,
      ],
      function (err) {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: "Failed to save review" });
        }
        res.status(201).json({
          success: true,
          reviewId: this.lastID,
        });
      }
    );
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// // Login route safe
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;

//   db.get(
//     "SELECT * FROM users WHERE username = ? AND password = ?",
//     [username, password],
//     (err, row) => {
//       if (err) {
//         res.status(500).json({ error: "Database error" });
//       } else if (!row) {
//         res.status(401).json({ error: "Invalid credentials" });
//       } else {
//         res.status(200).json({ message: "Login successful", user: row });
//       }
//     }
//   );
// });

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

//
app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // SUPER vulnerable query
  const query =
    "SELECT * FROM users WHERE username = '" +
    username +
    "' AND password = '" +
    password +
    "'";

  console.log("Running query:", query);

  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).send("Database error");
    } else if (rows && rows.length > 0) {
      res.status(200).json({ message: "Hacked!", users: rows });
    } else {
      res.status(401).json({ error: "Try harder" });
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// In your backend server file (e.g., server.js)
// Make sure body-parser or express.json() middleware is used

// In-memory store for demo purposes ONLY. Use a database in reality!
const finalizedOrders = new Set(); 

app.post('/api/finalize-order', (req, res) => {
    const { paymentId, orderDetails, review } = req.body;

    console.log(`Received finalize request for Payment ID: ${paymentId}`);

    // !!! VULNERABILITY !!! 
    // A real application MUST check if this paymentId/order was already processed.
    // Example check (DISABLED FOR DEMO):
    // if (finalizedOrders.has(paymentId)) {
    //   console.log(`Order for Payment ID: ${paymentId} already finalized. Ignoring replay.`);
    //   // Return success (idempotency) even if already processed
    //   return res.status(200).json({ message: 'Order already finalized' }); 
    // }

    // Simulate finalizing the order (e.g., save to DB, reduce stock)
    console.log(`!!! PROCESSING order for Payment ID: ${paymentId} !!!`);
    console.log('Order Details:', orderDetails);
    console.log('Review:', review);
    finalizedOrders.add(paymentId); // Mark as processed (for demo tracking)

    // Simulate saving to DB, etc.

    res.status(200).json({ message: `Order finalized successfully for Payment ID: ${paymentId}` });
});