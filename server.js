//Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var app  = express();

var PORT = process.env.PORT || 3000;


// Run Morgan for Logging
app.use(logger('dev'));
//Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(__dirname));

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

//--------------------------------------------------
// Main Route. 
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})


app.listen(PORT, function(){
	console.log('App listening on PORT: ' + PORT);
});

