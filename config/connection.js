//get dependencies
var mysql = require("mysql");

//connection to MySQL database
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "MySQL2016",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id " + connection.threadID);
});

module.exports = connection;