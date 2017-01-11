//Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var jwt = require('jsonwebtoken');
var config = require('./config');
var Cookies = require('cookies');

var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var jsonParser = bodyParser.json();

var app  = express();

var PORT = process.env.PORT || 3000;

app.set('jwtSecret', config.secret);


// Run Morgan for Logging
app.use(logger('dev'));
//Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); //this was true before
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(__dirname));

app.disable('etag');

// -------------------------------------------------
// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://heroku_tpp73wl2:i1v4c993u0ktk3j3plfeo2tnuj@ds133348.mlab.com:33348/heroku_tpp73wl2');
// mongoose.connect('mongodb://localhost/elevate');
var db = mongoose.connection;
console.log(db);

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

var Result = require('./models/result.js');


var User = require('./userModel.js');
//--------------------------------------------------
// Main Route. 
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// })

//ROUTES
// require("./app/routers/api-routes.js")(app)
require("./routers/html-routes.js")(app)

//--------------------------------------------------




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
     answer: true
  }).exec(function(err, doc) {
     //log any errors
     if (err) {
         console.log(err);
     }
     // otherwise, send the doc to the browser as a json object
     else {
         res.json(doc);

         var numberCorrect = doc.length;
         console.log(numberCorrect)
         var percentageCorrect = (numberCorrect/3) * 100;
         console.log(percentageCorrect)
         console.log(percentageCorrect)
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



// =================================================================
// routes ==========================================================
// =================================================================

app.get('/', function(req, res){//Landing on '/' will show index.html
    res.send(index.html);
});

app.get('/logon', function(req, res){
    res.render('login.html');
});

app.post('/signup', function(req, res){
    var userInfo = new User(req.body);//We crate an instance of User. We pass req.body as an argument. Remember req.body is an object. 

    userInfo.save(function(err, doc){//save the req.body data to mongoDB.
        if (err){
            res.send(err);
        }
        else {
            console.log("SignUp successful")
            // res.send(doc);//send the data 'doc' to the browser   
        }   
    });
});



app.post('/login', function(req, res){
    User.findOne({
        username: req.body.username
    }, function(err, user){
            if(err) throw err;

            if (!user){
                console.log('user not found');
            } else if (user) {
                if (user.password != req.body.password) {
                console.log('wrong password');
                } else {
                var token = jwt.sign(user, app.get('jwtSecret'), {
                    expiresIn: 86400
                });


                // for debug purposes
                console.log("Cookie Sent")

                // The Cookie will be named 'access_token'.
                new Cookies(req, res).set('access_token', token, {
                    httpOnly: true,
                    secure: false
                    });

                

                console.log('token successfully created');


                
                // res.json({
                //  success: true,
                //  message: 'Enjoy your token',
                //  token: token
                // });  

                // window.location.replace('login.html');


                res.redirect('/logon');

            }
        }   
    });
});

app.listen(PORT, function(){
	console.log('App listening on PORT: ' + PORT);
});

