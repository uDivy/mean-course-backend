const jwt = require('../../mean-course-ui/node_modules/jsonwebtoken')

// to verfy the valid token is sent with the request or not
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        // console.log(decodedToken)
        req.userData = {
            email: decodedToken.email,
            userId: decodedToken.userId 
        }
        next();
    } catch (error) {
        res.status(401).json({
            message: "You are not authenticated!"
        });
    }
};

