const database = require('../modals')
module.exports = {
    getComplain: async (req, res) => {
        const complain = database.complainSchema;
        const res = await complain
    },
    postComplain: async () => {

    }
}