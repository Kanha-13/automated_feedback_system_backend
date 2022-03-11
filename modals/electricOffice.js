const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
    officeName: {
        type: String,
        required: true
    },
    address: {
        locality: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    },
    contactNumber: {
        type: Number,
        required: true
    },
    inchargeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'technician'
    }
});

mongoose.model('electricOffice', complainSchema);