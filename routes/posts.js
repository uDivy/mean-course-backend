const express = require('../../mean-course-ui/node_modules/express');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();
const PostController = require('../controllers/posts')
const extractFile = require('../middleware/file');

router.post("", 
    checkAuth,
    extractFile ,
    PostController.createPost
);

router.put("/:id", 
    checkAuth,
    extractFile,
    PostController.updatePost
);

router.get("",
    PostController.getPost
);

router.get("/:id",
    PostController.getPostByID
);

router.delete("/:id",
    checkAuth,
    PostController.deletePost
);

module.exports=router;