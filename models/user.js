var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
          default: ''
      },
    lastname: {
        type: String,
          default: ''
      },
    image: {
        type: String,
          default: ''
      },
    level: {
        type: String,
          default: ''
      },
    email:{
      type: String,
      required:true,
      unique:true
    },
    admin:   {
        type: Boolean,
        default: false
    },
    teacher:   {
        type: Boolean,
        default: false
    },
    isVerified: { 
        type: Boolean,
        default: false 
    },
});

User.plugin(passportLocalMongoose, { usernameField : 'email' });


module.exports = mongoose.model('User', User);