const controllers = require('../controllers')
const express = require("express");
const router = express.Router();

router.route('/user')
    .post(controllers.user.addUser)
router.route('/user/:mobileNumber')
    .get(controllers.user.getUser)

module.exports = router