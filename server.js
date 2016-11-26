var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var app  = express();

// var PORT = process.env.PORT || 3000;
var PORT = 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// -------------------------------------------------
// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost/elevate');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


// -------------------------------------------------
// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile("/app/index.html", {"root": __dirname});
})




app.listen(PORT, function(){
	console.log('App listening on PORT: ' + PORT);
});