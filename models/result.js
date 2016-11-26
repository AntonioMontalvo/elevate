 // require mongoose
var mongoose = require('mongoose');
// create Schema class
var Schema = mongoose.Schema;

// Create User schema
var ResultSchema = new Schema({
  addition: {
    type:Number,
    required:true
  },
  subtraction: {
    type:Number,
    required:true
  },
  patterns: {
    type:Number,
    required:true
  },
  grouping: {
    type:Number,
    required:true
  },
  shapes: {
    type:Number,
    required:true
  },
  measurements: {
    type:Number,
    require:true
  }
});

// Create the Article model with the ArticleSchema
var Result = mongoose.model('Result', ResultSchema);

// export the model
module.exports = Result;
