var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/CatchPhrase");

module.exports.Food = require("./phrases.js");