const controllers = require('../controllers')
const express = require("express");
const router = express.Router();
// const multer = require('multer');
// const upload = multer();

router.route('/complains')
    .get(controllers.complains.getComplain)
    .post(controllers.complains.postComplain)

module.exports = router