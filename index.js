var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  //send file when they go
  res.status(404);
  res.send("not found")
    // res.sendFile(path.join(__dirname + '/index.html'));
});

//waiting for someone to click
app.listen(8080);
