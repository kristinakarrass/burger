//require express
var express = require("express");
var router = express.Router();

// import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

//create all my routes and set up logic within those routes where required
router.get("/", function (req, res) {
	res.redirect('/burgers');
});

router.get("/burgers", function (req, res) {
    burger.all(function(data) {
        var burgObject = {
          burgers: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});

router.post("/burgers/create", function (req, res) {
    var newBurger = req.body;
    burger.create([
        "burger_name", "devoured"
    ], [
        newBurger.name, newBurger.devoured
    ], function() {
        res.redirect("/burgers");
    });
});

router.put("burgers/update/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
      devoured: req.body.devoured
    }, condition, function() {
      res.redirect("/burgers");
    });
});

router.delete("/:id", function (req, res) {
	var condition = "id= " + req.params.id;

	burger.delete(condition, function() {
		res.redirect("/");
	});
});

//export routes for server.js to use.
module.exports = router;

