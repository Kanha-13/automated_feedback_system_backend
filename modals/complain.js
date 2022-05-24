const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
    applicantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    problemTitle: {
        type: String,
        required: true
    },
    problemDesc: {
        type: String,
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'technicians',
        // required: true
    },
    defectiveLightUrl: {
        type: String,
        required: true
    },
    location: { // this contains coordinates
        type: Object,
        // required: true
    },
    address: {// this contains address as string
        type: Object,
        required: true
    }
});

module.exports = mongoose.model('complain', complainSchema);