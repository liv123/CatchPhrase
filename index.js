// requirements //
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    _=require('underscore'),
    //var db below plugs databse in the express app//
    //db = require("./models"),
    views = path.join(process.cwd(), "views/");

// DATA //
var phrases =[
  {word: "sql", definition: "A special-purpose programming language designed for managing data held in a RDBMS."},
  {word: "schema", definition: "Similar to an object constructor, this thingie is a diagram or blueprint for what every object in the noSQL database will contain."},
  {word: "model", definition: "This thingie is a Schema that has been 'activated' with real data and is performing actions such as reading, saving, updating, etc."},
  {word: "node.js", definition: "a tool to run JavaScript outside the browser, directly on your OS."},
  {word: "rest", definition: "this acronym is a software architectural style for building scalable and performant web services."}
]

//configure//
//serve js & css files
app.use('/static', express.static('public'));
app.use('/vendor', express.static('bower_components'));
//body parser config to accept all data types
//app.use(bodyParser.urlencoded({ extend: true}));

//routes//



// a "GET" request to "/" will run the function below//
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send("Hello World");
    res.sendFile(path.join(views + 'index.html'));
});

app.get('/phrases', function (req, res){
	res.send(phrases);	
}),

// start the server
app.listen(3333, function () {
    console.log("Go to localhost:3333/");
});