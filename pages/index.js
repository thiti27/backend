const express = require("express");
const app = express();
const port = 3000;
// Body parser
app.use(express.urlencoded({ extended: false }));
// Home route
app.get("/", (req, res) => {
res.send("Welcome to a basic express App");
});
// Users route
app.get("/users", (req, res) => {
res.json([
{ name: "Akash", location: "India" },
{ name: "Abhishek", location: "India" },
]);
});
// Listen on port 5000
app.listen(port, () => {
console.log(`Server is running on port 3000
Visit http://localhost:3000`);
});