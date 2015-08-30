// requirements //
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('bodyParser'),
    _=require('underscore'),
    //var db below plugs databse in the express app//
    db = require("./models"),
    views = path.join(process.cwd(), "views/");


//configure//
//serve js & css files
app.use('/static' express.static('public'));
app.use('/vendor', express.static('bower_components'));
//body parser config to accept all data types
app.use(bodyParser.urlencoded({ extend: true}));




// a "GET" request to "/" will run the function below//
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send("Hello World");
});

// start the server
app.listen(3333, function () {
    console.log("Go to localhost:3333/");
});