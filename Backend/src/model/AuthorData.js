const mongoose = require('mongoose');
//DB Connection
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@cluster0.akfoz.mongodb.net/libraryapp?retryWrites=true&w=majority');
//Schema
const Schema = mongoose.Schema;

const AuthorSchema =  new Schema({
     name: String,
     genre: String,
     books: String,
     image:String
});

//Model
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;

