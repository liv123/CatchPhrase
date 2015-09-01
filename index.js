// requirements //
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    _= require('underscore'),
    //var db below plugs databse in the express app//
    db = require("./models"),
    views = path.join(process.cwd(), "views");

// // data for testing only, to be disabled//
// var phrases =[
//   {_id: 0, word: "sql", definition: "A special-purpose programming language designed for managing data held in a RDBMS."},
//   {_id: 1, word: "schema", definition: "Similar to an object constructor, this thingie is a diagram or blueprint for what every object in the noSQL database will contain."},
//   {_id: 2, word: "model", definition: "This thingie is a Schema that has been 'activated' with real data and is performing actions such as reading, saving, updating, etc."},
// 	  {_id: 3, word: "node.js", definition: "a tool to run JavaScript outside the browser, directly on your OS."},
//   {_id: 4, word: "rest", definition: "this acronym is a software architectural style for building scalable and performant web services."}
// ];

//configure//
//serve js & css files
app.use('/static', express.static('public'));
app.use('/vendor', express.static('bower_components'));
//body parser config to accept all data types
app.use(bodyParser.urlencoded({ extended: true}));

//routes//

// a "GET" request to "/" will run the function below//
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.sendFile(path.join(views + '/index.html'));

});

app.get('/phrases', function (req, res){
//	res.send(phrases);
	db.Phrase.find({}, function(err, phrasesList){
        if (err) {
            console.log("BAD THING!");
            return res.sendStatus(400);
        }
        res.send(phrasesList);
    })

});
//posting new phrases to db
app.post('/phrases', function create(req, res){
	//console.log(req.body);
	var newPhrase = {word:req.body.word, definition:req.body.definition};
//	phrases.push(newPhrase);
//	res.redirect('/phrases');
	db.Phrase.create(newPhrase, function(err, success){
		if (err) {
			console.log("newPhrase failed");
			return res.sendStatus(400);
		}
		else {
			res.send(success);
		}
	})
});
//deleting phrase
app.delete("/phrases/:id", function destroy(req, res){
	//setting value of id

// 	var targetId = parseInt(req.params._id);
// 	//find item in db with matching id 
// 	var targetItem = _.findWhere(db.Phrase, {id: targetId});
// 	//get index of found item
// 	var index = phrases.indexOf(targetItem);
// 	//remove the item at that index, only remove 1 item
// 	phrases.splice(index, 1);
// 	//render deleted object
// 	res.send(JSON.stringify(targetItem));
// });
 var id = req.params.id;
 console.log(id);
  db.Phrase.findByIdAndRemove(id, function (err){
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  });
});

// start the server
app.listen(3333, function () {
    console.log("Go to localhost:3333/");
})