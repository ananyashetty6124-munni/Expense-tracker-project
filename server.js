const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static(".")); // serves index.html

// Get all expenses
app.get("/expenses", (req, res) => {
  const data = fs.readFileSync("expenses.json", "utf8") || "[]";
  res.json(JSON.parse(data));
});

// Add a new expense
app.post("/expenses", (req, res) => {
  const data = JSON.parse(fs.readFileSync("expenses.json", "utf8") || "[]");
  data.push(req.body);
  fs.writeFileSync("expenses.json", JSON.stringify(data, null, 2));
  res.json({ message: "Expense added!" });
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));

