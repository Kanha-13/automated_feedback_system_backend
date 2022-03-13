const { google } = require('googleapis')
const path = require('path')
const Readable = require('stream').Readable;
require('dotenv').config()
const oauth2client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECREAT,
    process.env.REDIRECT_URI
)
oauth2client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })
const drive = google.drive({
    version: 'v3',
    auth: oauth2client
})
const filepath = path.join(__dirname, 'testImage.jpg')
function bufferToStream(buffer) { //SPENT MORE THAN 10 HOURS TO FIND THIS SOLUTION
    var stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    return stream;
}
module.exports = {

    uploadImage: async (file, fileName, mimeType) => {
        try {
            const res = await drive.files.create({
                requestBody: {
                    name: fileName, //name of the file store in google drive
                    mimeType: mimeType
                },
                media: {
                    mimeType: mimeType,
                    body: bufferToStream(file.data)
                }
            })
            return res.data
        } catch (error) {
            console.log(error.message)
        }

    },
    generateUrl: async (img_id) => {
        try {
            const fileId = img_id;
            if (fileId) {
                await drive.permissions.create({
                    fileId: fileId,
                    requestBody: {
                        role: 'reader',
                        type: 'anyone'
                    }
                })

                const res = await drive.files.get({
                    fileId: fileId,
                    fields: 'webViewLink, webContentLink' //webviewlink is for viewing the image and the content link for downloading the image
                })
                return res.data.webViewLink
            } else {
                throw { message: "Invalid image id" }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    deleteFile: async (img_id) => {
        try {
            if (img_id) {
                const res = await drive.files.delete({
                    fileId: img_id
                })
                return res.status
            } else {
                throw { message: "Invalid image id" }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
}