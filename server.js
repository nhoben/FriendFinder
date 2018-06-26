//Dependencies
var express = require('express');
var app = express();
var bodyParser = require("body-parser");



 
var PORT = process.env.PORT || 8080;

//create json parser


//create application 
app.use(bodyParser.urlencoded({extended: true}));

//set up Express app to handle data parsing
app.use(bodyParser.json({ type: 'application/++json'}))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({ type: 'text/html'}))

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

//app.use(express.static('public'))

//app.use(express.static(path.join(__dirname, ‘public’)));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


