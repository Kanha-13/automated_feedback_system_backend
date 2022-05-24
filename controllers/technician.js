const { technicianSchema } = require("../modals")

module.exports = {
    getTechnician: async (req, res) => {

    },
    addTechnician: async (req, res) => {
        try {
            const tech_data = new technicianSchema({
                name: req.body.name,
                mobileNumber: req.body.mobileNumber,
                email: req.body.email,
                employeeId: req.body.employeeId,
                electricOfficeId: req.body.electricOfficeId,
                address: req.body.address,
                fireBaseId: req.body.fireBaseId
            })
            const response = await tech_data.save();
            res.json(response).status(2001)
        } catch (error) {
            console.log(error)
            res.json({ message: "Database error" }).status(500)
        }
    },
    updateTechnician: async (req, res) => {

    },
    deleteTechnician: async (req, res) => {

    },
    assignTask: async (req, res) => {

    },
    removeTask: async (req, res) => {

    }
}