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
console.log(db);

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

var Result = require('./models/result.js');

//--------------------------------------------------
// Main Route. 
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

// Handle form submission, save submission to mongo
app.post('/results', function(req, res) {
    //console.log("doobly-doo");
    var newResult = new Result(req.body);

    newResult.save(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});


app.get('/results/:subject', function(req, res){
  // // using the id passed in the id parameter, 
  // // prepare a query that finds the matching one in our db...
  Result.find({
     subject: req.params.subject,
     answer: false
  }).exec(function(err, doc) {
     //log any errors
     if (err) {
         console.log(err);
     }
     // otherwise, send the doc to the browser as a json object
     else {
         //res.json(doc);

         var numberCorrect = doc.length;
         var percentageCorrect = (numberCorrect/3) * 100;
         console.log(percentageCorrect)
         res.json(percentageCorrect)
     }
 });


//   //results.count($elemMatch : {'subject': {req.params.subject}, 'answer':true})
//   //results.count();
//   // // now, execute our query
//    .exec(function(err, doc){
//   //   // log any errors
//      if (err){
//        console.log(err);
//      } 
//   //   // otherwise, send the doc to the browser as a json object
//      else {
//        res.json(doc);

//   //     var numberCorrect = res.json;

//   //     //console.log(numberCorrect)

//   //     var percentageCorrect = (numberCorrect/3) * 100;

//   //     console.log(percentageCorrect);
//   //   }
//   // });
// }
});


// app.get('/results/:subject', function(req, res){
//   // using the id passed in the id parameter, 
//   // prepare a query that finds the matching one in our db...
//   results.count($elemMatch{'_subject': {req.params.subject}, 'answer':true})
//   // now, execute our query
//   .exec(function(err, doc){
//     // log any errors
//     if (err){
//       console.log(err);
//     } 
//     // otherwise, send the doc to the browser as a json object
//     else {
//       res.json(doc);

//       var numberCorrect = res.json.getInt()

//       console.log(numberCorrect)

//       var percentageCorrect = (numberCorrect/6) * 100;

//       console.log(percentageCorrect)
//     }
//   });
// });


app.listen(PORT, function(){
	console.log('App listening on PORT: ' + PORT);
});

