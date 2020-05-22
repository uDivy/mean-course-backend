const path = require("path");
const express = require('../mean-course-ui/node_modules/express');
const bodyParser = require('../mean-course-ui/node_modules/body-parser');
const mongoose = require('../mean-course-ui/node_modules/mongoose');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect("mongodb+srv://dba:9AJR7irL4JI4JCcy@cluster0-plu1x.mongodb.net/node-angular?retryWrites=true&w=majority").then(
    () => {
        console.log("Connected to database!");
    }
).catch(
    () => {
        console.log("Connection Failed!");
    }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use("/images", express.static(path.join("../mean-course-backend/images")));

app.use(
    (req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, , authorization");
        res.setHeader("Access-Control-Allow-Methods", 
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        );
        next();
    }
);

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);


module.exports = app;