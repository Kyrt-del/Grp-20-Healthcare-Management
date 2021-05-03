const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
	patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    date: {
        type : Date,
        default : Date.now()
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;