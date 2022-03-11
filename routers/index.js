const complainController = require('../controllers/complain')
const express = require("express");
const router = express.Router();

router.route('/complains')
    .get(complainController.getComplain)
    .post(complainController.postComplain)
