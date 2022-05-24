const { userSchema } = require("../modals")

module.exports = {
    getUser: async (req, res) => {
        const res_data = await userSchema.findOne({ mobileNumber: req.params.mobileNumber })
        res.json(res_data).status(200);
    },
    addUser: async (req, res) => {
        console.log(req.body)
        const res_data = new userSchema({
            name: req.body.name,
            mobileNumber: req.body.mobileNumber,
            address: req.body.address,
            email: req.body.email,
            fireBaseId: req.body.fireBaseId
        })
        await res_data.save();
        res.json(res_data).status(201)
    },
    deleteUser: async (req, res) => {

    },
    updateUser: async (req, res) => {

    }
}