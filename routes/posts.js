const express = require('../../mean-course-ui/node_modules/express');

const Post = require('../models/post');

const router = express.Router();

router.post("",
    (req, res, next)=>{
        const post = new Post({
            title: req.body.title,
            Content: req.body.Content
        });
        post.save().then(
            createdPost => {
                res.status(201).json(
                    {
                        message: "Post Created Successfully!",
                        postId: createdPost._id
                    }
                );
            }
        );
        
    }
);

router.put("/:id",
    (req, res, next)=> {
        const post = new Post({
            _id: req.body.id,
            title: req.body.title,
            Content: req.body.Content
        });
        Post.updateOne({_id: req.params.id}, post).then(
            result => {
                console.log(result)
                res.status(200).json(
                    {
                        message: "Post Updated Successfully!",
                    }
                );
            }
        );
    }
);

router.get("",
    (req, res, next) => {
        Post.find().then(
            (documents) => {
                res.status(200).json(
                    {
                        messages: "Post Sent Successfully!",
                        posts: documents
                    }
                );
            }
        );
    }
);

router.get("/:id",
    (req, res, next) => {
        Post.findById(req.params.id).then(
            (post) => {
                if(post){
                    res.status(200).json(post);
                }
                else{
                    res.status(404).json(
                        {
                            messages: "Page Not Found!",
                        }
                    );
                }
            }
        );
    }
);

router.delete("/:id",
    (req, res, next) => {
        Post.deleteOne({_id: req.params.id}).then(
            result => {
                console.log(result);
            }
        )
        res.status(200).json({
            message: "Post deleted"
        });
    }
);

module.exports=router;