// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	
	// index route loads view.html
	app.get('/title', function(req, res){
		res.sendFile(path.join(__dirname + '/../index.html'));
	});

	app.get('/grade-levels', function(req, res){
		res.sendFile(path.join(__dirname + '/../menu-board.html'));
	});

	app.get('/grade-1', function(req, res){
		res.sendFile(path.join(__dirname + '/../app/home/home-index.html'));
	});

	app.get('/grade-2', function(req, res){
		res.sendFile(path.join(__dirname + '/../school-grade/grade2.html'));
	});

	app.get('/grade-3', function(req, res){
		res.sendFile(path.join(__dirname + '/../school-grade/grade3.html'));
	});

	app.get('/grade-4', function(req, res){
		res.sendFile(path.join(__dirname + '/../school-grade/grade4.html'));
	});

	app.get('/grade-5', function(req, res){
		res.sendFile(path.join(__dirname + '/../school-grade/grade5.html'));
	});

	app.get('/grade-6', function(req, res){
		res.sendFile(path.join(__dirname + '/../school-grade/grade6.html'));
	});


}
