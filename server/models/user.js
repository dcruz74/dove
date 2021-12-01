var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    firstName: String,
    lastName: String,
    bio: String,
    age: '',
    dob: '',
    email: '',
    interests: [String],
    matches: [],
    likes: [],
    dislikes: [],
    profile_pic: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);

