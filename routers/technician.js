const controllers = require('../controllers')
const express = require("express");
const router = express.Router();

router.route('/technician')
    .post(controllers.technician.addTechnician)
router.route('/technician/:mobileNumber')
    .get(controllers.technician.getTechnician)

module.exports = router