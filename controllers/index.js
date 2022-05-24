const complains = require('./complain')
const user = require('./user')
const technician = require('./technician')
const controllers = {
    complains: complains,
    user: user,
    technician: technician
}
module.exports = controllers;