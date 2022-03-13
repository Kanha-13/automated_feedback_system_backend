const { userSchema } = require("../modals")

module.exports = {
    getUser: async (req, res) => {
        const res_data = await userSchema.find({ mobileNumber: req.params.mobileNumber })
        res.json(res_data).status(200);
    },
    addUser: async (req, res) => {
        const res_data = new userSchema({
            name: req.body.name,
            mobileNumber: req.body.mobileNumber,
            address: req.body.address,
            email: req.body.email
        })
        res_data.save();
        res.json(res_data).status(201)
    },
    deleteUser: async (req, res) => {

    },
    updateUser: async (req, res) => {

    }
}