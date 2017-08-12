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

router.put('/updateNote', function(req,res){
  if(req.body.subject == null){
    console.log("just update the comment");
    Note.update({_id: req.body._id},{ $set: { comment: req.body.comment}},
      function(err, res){
        if (err) return console.error(err);
      });
  };

  if(req.body.comment == null){
    console.log("just update the subject");
    Note.update({_id: req.body._id},{ $set: {subject: req.body.subject}},
      function(err, res){
        if (err) return console.error(err);
      });
  };

  if(req.body.subject != null && req.body.comment != null){
    console.log("update both");
    Note.update({_id: req.body._id},{ $set: {subject: req.body.subject, comment: req.body.comment}},
      function(err, res){
        if (err) return console.error(err);
      });
  };
  //var updateNote = new Note({_id: req.body._id ,subject: req.body.subject, comment: req.body.comment
  //updateNote.update(function(err, req));

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
