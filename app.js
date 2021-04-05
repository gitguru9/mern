const express = require("express");
const app = express();
const mongoose = require("./mongoose");

const middleware = (req, res, next) => {
  console.log("this is middleware here");
  next();
};
// middleware();

app.get("/", (req, res) => {
  res.send("hello world how r u");
});
app.get("/about", middleware, (req, res) => {
  res.send("about page here ");
});
app.get("/contact", (req, res) => {
  res.send("this page is contact");
});
app.get("/signup", (req, res) => {
  res.send("you can signup from google");
});
app.get("/signin", (req, res) => {
  res.send("login here thankyou");
});
app.listen(3000, () => {
  console.log(`server is running at port 3000`);
});
