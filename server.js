
var express = require("express");
var bodyParser = require("body-parser");


var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Body-Parser NPM app
// Express app for handling data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Handlebars NPM app
// Express app template
var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Import routes 
var routes = require("./controller/burgers_controller.js");

app.use(routes);

//Start server listening for client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
