const database = require('../modals')
const imageOperations = require('../middlewares/uploadImage');
const { userSchema, complainSchema } = require('../modals');

module.exports = {
    getComplain: async (req, res) => {
        console.log("hit")
        try {
            const resp = await database.complainSchema.find();
            res.json(resp).status(200)
        } catch (error) {
            // res.send(error)
            console.log(error)
        }
    },
    postComplain: async (req, res) => {
        console.log(req.body)
        try {
            const user = await userSchema.findOne({ mobileNumber: req.body.mobileNumber });
            if (!user) {
                res.status(400).send("Invalid user")
            }
            else {
                let sampleFile;
                if (!req.files || Object.keys(req.files).length === 0) {
                    return res.status(400).send('no files were uploaded');
                }
                sampleFile = req.files.media
                const uploaded_image = await imageOperations.uploadImage(sampleFile, sampleFile.name, sampleFile.mimetype);
                const url = await imageOperations.generateUrl(uploaded_image.id);
                const resp = new complainSchema({
                    applicantId: user._id,
                    defectiveLightUrl: url,
                    location: {
                        latitude: req.body.latitude,
                        longitude: req.body.longitude
                    },
                    address: { state: req.body.state, city: req.body.city, landmark: req.body.landmark, locality: req.body.locality },
                    problemDesc: req.body.desc,
                    problemTitle: req.body.title
                });
                const save_res = await resp.save();
                res.json(save_res).status(200)
            }
        } catch (error) {
            // res.send(error)
            console.log(error)
        }
    }
}