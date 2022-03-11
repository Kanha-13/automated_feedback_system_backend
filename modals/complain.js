const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
    applicantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'technician',
        // required: true
    },
    defectiveLightUrl: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true
    }
});

mongoose.model('complain', complainSchema);