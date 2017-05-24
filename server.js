//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = 3000;
var app = express();

//Serve static conent for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + "/public"));

//Parse application
app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT);