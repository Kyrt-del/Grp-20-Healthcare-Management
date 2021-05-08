const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    contact_number: {
        type: Number,
        required: true,
        trim: true
    },
    doctor_email: {
        type: String,
        trim: true
    },
    reports: [{
        type: Schema.Types.ObjectId,
        ref: 'Report'
    }]
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
