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

notesSchema.methods.signature= function (){
  var footer = 'bens signture';
  console.log(footer);
};

module.exports = mongoose.model('userNotes', notesSchema);
