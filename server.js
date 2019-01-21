var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var axios = require("axios");
var cheerio = require("cheerio");
var PORT = 3000;

// Initialize Express
var app = express();

// Make public a static folder
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname, "views"));
app.set("view engine", "jsx");
app.engine("jsx",require("express-react-views").createEngine());

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/NYcomments", { useNewUrlParser: true });
// A GET route for scraping the echoJS website
//app.set(require('./routes/databases')(app))
app.set(require('./routes')(app))
//app.set(require('./stacks')(app))

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });