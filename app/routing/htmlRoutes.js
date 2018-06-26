
//import express application object
//use express obhect to get a router object

var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");





// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add a GET route to Survey page
//a callback function that will be invoked if
//an HTTP GET request with the path is received

module.exports = function (app){

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

}
  // Home page route
  app.use('/',function (req, res) {
   // res.sendFile(path.join(__dirname, '/../public/home.html'));

    res.sendFile('/../public/home.html' , {root: __dirname});
   
  });








