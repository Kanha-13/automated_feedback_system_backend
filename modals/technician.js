const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    // electricOfficeId: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'electricOffices'
    // },
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
        }
    },
    fireBaseId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('technician', technicianSchema);