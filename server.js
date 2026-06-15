const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Digizura Backend Running");
});

app.get("/employees", (req, res) => {
  res.json([
    {
      id: 1,
      name: "John Smith",
      department: "Development"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      department: "HR"
    }
  ]);
});

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});