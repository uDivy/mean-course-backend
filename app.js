
const express = require('../mean-course-ui/node_modules/express');
const bodyParser = require('../mean-course-ui/node_modules/body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

app.use(
    (req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS"
        );
        next();
    }
);

app.post("/api/posts",
    (req, res, next)=>{
        const post = req.body;
        console.log(post);
        res.status(201).json(
            {
                message: "Post Created Successfully!",
            }
        );
    }
);

app.get("/api/posts",
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