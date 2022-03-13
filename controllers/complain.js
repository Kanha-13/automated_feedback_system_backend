const database = require('../modals')
const imageOperations = require('../middlewares/uploadImage');
const { userSchema } = require('../modals');

module.exports = {
    getComplain: async (req, res) => {
        try {
            const resp = await database.complainSchema.find();
            res.json(resp).status(200)
        } catch (error) {
            // res.send(error)
            console.log(error)
        }
    },
    postComplain: async (req, res) => {
        try {
            const user = await userSchema.find({ mobileNumber: req.body.mobileNumber });
            if (!user) {
                res.status(400).send("Invalid user")
            }
            else {
                res.status(400).send("hello user")
            }
            // let sampleFile;
            // let uploadPath;
            // if (!req.files || Object.keys(req.files).length === 0) {
            //     return res.status(400).send('no files were uploaded');
            // }
            // sampleFile = req.files.media
            // uploadPath = __dirname + '/upload/' + sampleFile.name;
            // const uploaded_image = await imageOperations.uploadImage(sampleFile, sampleFile.name, sampleFile.mimetype);
            // const url = await imageOperations.generateUrl(uploaded_image.id);
            // const resp = await database.complainSchema.create({

            // });
            // const save_res= await resp.save();
            // res.json(save_res).status(200)
        } catch (error) {
            // res.send(error)
            console.log(error)
        }
    }
}