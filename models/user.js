// require mongoose
var mongoose = require('mongoose');
// create Schema class
var Schema = mongoose.Schema;

// Create User schema
var UserSchema = new Schema({
  // firstName is required
  firstName: {
    type:String,
    required:true
  },
  // lastName is required
  lastName: {
    type:String,
    required:true
  },
  userName: {
    type:String,
    required:true
  },
  password: {
    type:String,
    required:true
  },
  teacherName: {
    type:String
  },
  userType: {
    type:String,
    require:true
  },
  // this only saves one note's ObjectId. ref refers to the Comment model.
  results: {
      type: Schema.Types.ObjectId,
      ref: 'Result'
  }
});

// Create the Article model with the ArticleSchema
var User = mongoose.model('User', UserSchema);

// export the model
module.exports = User;
