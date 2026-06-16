const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

let employees = [
  {
    id: 1,
    name: "John Smith",
    department: "Development",
    status: "Active"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    department: "HR",
    status: "Active"
  },
  {
    id: 3,
    name: "Marcus Lee",
    department: "Sales",
    status: "Leave"
  }
];

// Home Route
app.get("/", (req, res) => {

  res.send(`
    <html>
      <head>
        <title>Digizura API</title>
      </head>

      <body style="
        background:#0f172a;
        color:white;
        font-family:Arial;
        text-align:center;
        padding-top:100px;
      ">

        <h1>
          DIGIZURA EMPLOYEE MANAGEMENT API
        </h1>

        <h2>
          Backend Server Running Successfully
        </h2>

        <p>
          Week 3 Day 1 + Day 2
        </p>

        <p>
          Node.js + Express.js + CRUD APIs
        </p>

      </body>
    </html>
  `);

});
// GET All Employees
app.get("/employees", (req, res) => {

  db.query(
    "SELECT * FROM employees",
    (err, results) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(results);

    }
  );

});

// GET Employee By ID
app.get("/employees/:id", (req, res) => {

  db.query(

    "SELECT * FROM employees WHERE id=?",

    [req.params.id],

    (err, results) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(results[0]);

    }

  );

});


// POST Employee
app.post("/employees", (req, res) => {

  const {
    name,
    department,
    status
  } = req.body;

  db.query(

    "INSERT INTO employees (name,department,status) VALUES (?,?,?)",

    [
      name,
      department,
      status
    ],

    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message:
          "Employee Added"
      });

    }

  );

});

// PUT Employee
app.put("/employees/:id", (req, res) => {

  const {
    name,
    department,
    status
  } = req.body;

  db.query(

    "UPDATE employees SET name=?, department=?, status=? WHERE id=?",

    [
      name,
      department,
      status,
      req.params.id
    ],

    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message:
          "Employee Updated"
      });

    }

  );

});
// DELETE Employee
app.delete("/employees/:id", (req, res) => {

  db.query(

    "DELETE FROM employees WHERE id=?",

    [req.params.id],

    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message:
          "Employee Deleted"
      });

    }

  );

});

// Employee Count
app.get("/stats", (req, res) => {

  res.json({
    totalEmployees: employees.length,
    activeEmployees:
      employees.filter(
        e => e.status === "Active"
      ).length,
    onLeave:
      employees.filter(
        e => e.status === "Leave"
      ).length
  });

});

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});