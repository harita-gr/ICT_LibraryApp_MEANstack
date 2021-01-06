const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.akfoz.mongodb.net/libraryapp?retryWrites=true&w=majority');
//Schema
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    name: String,
    email: String,
    dob: Date,
    password:String
});

//Model
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;

