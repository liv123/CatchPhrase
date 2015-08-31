var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/CatchPhrase");

module.exports.Phrase = require("./phrases.js");