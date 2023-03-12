//initializing mongoose connection
const mongoose = require('mongoose');

//creating schema for drafts
const PostSchema = new mongoose.Schema({

  //col:1 for topic and it is a required feild
  topic: {
    type: String,
  },
  //col:2 for description and it is a required feild 
    desc: {
      type: String,
      required: true,
    },
  },
  //adding the schema into the collection named : Post 
   { 
    collection: 'Post' 
  }
);

//exporting the drafts schema
module.exports = Post =  mongoose.model('Post', PostSchema);
