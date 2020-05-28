const express = require('../../mean-course-ui/node_modules/express');
const router = express.Router();
const UserController = require('../controllers/user')

router.post("/signup",UserController.createUser);
router.post("/login",UserController.userLogin);

module.exports = router;