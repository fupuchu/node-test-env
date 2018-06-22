const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'))

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.post('/test', (req, res) => {
  console.log(req.body);
  res.send(req.body.firstInput + " " + req.body.secondInput)
})

//waiting for someone to click
app.listen(3000);
