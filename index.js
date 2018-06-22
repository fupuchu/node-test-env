var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  //send file when they go
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname + '/test.html'))
})

//waiting for someone to click
app.listen(3000);
