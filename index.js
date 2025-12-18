const express = require("express");
const app = express();
const cors = require("cors");

require("./db"); // MongoDB connection

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Message App Backend Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
