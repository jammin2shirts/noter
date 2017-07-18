var mongoose = require('mongoose');
var schema = mongoose.Schema,
    objectId = schema.ObjectId;

var notesSchema = new schema({
  _id: objectId,
  subject:String,
  comment:String
},{
  collection: 'userNotes'
});

module.exports = mongoose.model('userNotes', notesSchema);
