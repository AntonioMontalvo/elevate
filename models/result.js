 // require mongoose
console.log("My name is Bernie")
var mongoose = require('mongoose');
// create Schema class
var Schema = mongoose.Schema;

// Create User schema
var ResultSchema = new Schema({
  answer: {
    type:Boolean,
    required:true
  },
  subject: {
    type: String,
    required: true
  }
});

// Create the Article model with the ArticleSchema
var Result = mongoose.model('Result', ResultSchema);

// export the model
console.log("I know")
module.exports = Result;
