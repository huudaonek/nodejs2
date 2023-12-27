const express = require("express");
const expressHandlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser");
const app = express();

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/thanks", (req, res) => res.render("thanks"));

app.get("/feedback", (req, res) => res.render("feedback"));

app.get("/sr", (req, res) => res.render("sr"));

app.get("/", (req, res) => res.render("register"));

app.post("/process-contact", (req, res) => {
  console.log(`received contact from ${req.body.email} <${req.body.password}>`);
  res.redirect(303, "feedback");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`));
