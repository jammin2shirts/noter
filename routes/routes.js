var app = require('express');
var router = app.Router();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var Note = require('../models/notes');


//Routes
router.get('/test', function (req, res){
  res.send('Hello From TEst!');
});

router.get('/findAll', function (req, res) {
  Note.find(function (err, Notes) {
    if (err) return console.error(err);
    console.log("FindAll request: returning data!");
    //console.log(Notes);
    res.send(Notes);
  });
});

router.post('/saveNote', function (req, res){
  console.log(req.body.subject + 'hi from router');
  var newNote = new Note({subject: req.body.subject , comment: req.body.comment});
  newNote.save(function(err, req){
    if (err) return console.error(err);
  });
});

module.exports = router;




//Testing db models
//var myFirstNote = new Note({subject:'Test Note',comment: 'This is my first note!'});

//console.log(myFirstNote.subject);
//console.log(myFirstNote.comment);

//myFirstNote.signature();
// myFirstNote.save(function(err, myFirstNote){
//   if (err) return console.error(err);
//   myFirstNote.signature();
// });

// Note.findOne({'subject':'Test Note'},function (err, myFirstNote) {
//   if (err) return console.error(err);
//   console.log(myFirstNote);
// });
