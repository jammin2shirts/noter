const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
//var router = express.Router();
var router = require('./routes/routes.js');
const app = express();

//Place the app can find the index page
app.use(express.static(__dirname));

//parses json
app.use(bodyParser.json());

//open the db connection
mongoose.connect('mongodb://localhost/noter');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to db');
});

app.listen(3030);
console.log('Server is running on port 3030');

//Send requests to the router controller
app.use('/', router);
