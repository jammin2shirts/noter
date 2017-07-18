const express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
const app = express();

//Place the app can find the index page
app.use(express.static(__dirname));

//parses json
app.use(bodyParser.json());

//open the db connection
mongoose.connect('mongodb://localhost/game');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to db');
});

app.listen(3030);
console.log('Server is running on port 3030');
