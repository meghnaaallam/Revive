//importing required modules
const Post = require("../models/post");
const ErrorResponse = require('../utils/errorResponse');

//exporting async function to add a draft
exports.addDraft = async (req,res,next) => {
   //if the post topic and description is found 
      //post the data to db and change status to 200 
    try {
        Post.find({})
        .then(result => {
        res.status(200).send(result);
      })
    }catch(error){
        next(error)
    }
  }

//exporting async function to delete a draft
exports.deleteDraft = async (req, res, next) => {
    //finding the draft by id 
    const draft = await Post.findOne({post_id});
    if(!draft){
      //deletes the draft associated by this id
          //if found delete and change status code to 200
          //else throws error
        Post.findByIdAndDelete(req.params.post_id)
        .then(result => {
            res.status(200).send({
                success: true,
                data: result,
                message: "Post deleted successfully",
                type: "success"
        });
    })
    .catch(err => console.log("Post delete err -> "));
}}

//exporting async function for updating existing drafts
exports.postDraft = async (req,res,next) => {
        //searching for an id if found 
          //check for the fields and update the modified feild
        let id = req.body.id ? req.body.id : null;
        Post.findById(id)
          .then(post => {
            if (post) {
              const postFields = {};
              if (req.body.topic) postFields.topic = req.body.topic;
              if (req.body.desc) postFields.desc = req.body.desc;
              Post.findOneAndUpdate({ _id: id }, { $set: postFields }, { new: true })
                .then(result => {
                  return res.status(201).send({
                    success: true,
                    data: result,
                    message: "Post updated successfully",
                    type: "success"
                  })
                })
                //if error occurs while fetching
                .catch(err => console.log("Post update err -> ", err));
            } 
            //if id is not there, creates new draft
            else {
              const newPost = new Post(req.body);
              newPost.save()
                .then(result => {
                  res.status(201).send({
                    success: true,
                    data: result,
                    message: "Post created successfully",
                    type: "success"
                  });
                })
                //if error occurs
                .catch(err => console.log("Create new post error -> ", err))
            }
          })
          .catch(err => console.log("Post add error -> ", err))
      }
      