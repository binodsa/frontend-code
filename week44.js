const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Route 1: Basic "Hello World" application
app.get("/", (req, res) => {
  res.send("Hello, it is my first express application");
});

// Route 2: About route
app.get("/about", (req, res) => {
  res.send("This is a basic express application");
});

// Route 3: Dynamic route for users and books
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

// Route 4: Fetch all students from Student.json
app.get("/GetStudents", (req, res) => {
  fs.readFile(__dirname + "/Student.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json({
      status: true,
      Status_Code: 200,
      requested_at: new Date(),
      requrl: req.url,
      requestMethod: req.method,
      studentdata: JSON.parse(data),
    });
  });
});
// Route 5: Fetch specific student by ID
app.get("/GetStudentid/:id", (req, res) => {
  fs.readFile(__dirname + "/Student.json", "utf8", (err, data) => {
    if (err) throw err;
    const students = JSON.parse(data);
    const student = students["Student" + req.params.id];
    if (student) {
      res.json(student);
    } else {
      res.json({
        status: false,
        message: "Student not found",
      });
    }
  });
});

// Route 6: Serve HTML form
app.get("/studentinfo", (req, res) => {
  res.sendFile("StudentInfo.html", { root: __dirname });
});

// Route 7: Handle form submission (POST)
app.post("/submit-data", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const age = req.body.myAge + " Gender: " + req.body.gender;
  const qualification = "Qualification: " + req.body.Qual;
  res.send({
    status: true,
    message: "Form Details",
    data: {
      name: name,
      age: age,
      qualification: qualification,
    },
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});