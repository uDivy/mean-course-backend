
const express = require('../mean-course-ui/node_modules/express');
const app = express();

app.use("/api/posts",
    (req, res, next) => {
        const posts = [
            {
                'id': "asd123",
                'title': "First Post",
                'Content': "My first content"
            },
            {
                'id': "zxc123",
                'title': "Second Post",
                'Content': "My second content"
            }
        ];
        res.status(200).json(
            {
                messages: "Post Sent Successfully!",
                posts: posts
            }
        );
    }
);

module.exports = app;