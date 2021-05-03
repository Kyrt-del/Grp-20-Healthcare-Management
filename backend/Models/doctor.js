const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema({
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
    contact_number: {
        type: Number,
        required: true,
        trim: true
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;