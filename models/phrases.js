
//creating phrase model
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PhraseSchema = new Schema ({
	word: String,
	definition: String
});

//creating the model
var Phrase = mongoose.model('Phrase', PhraseSchema);
module.exports = Phrase;

