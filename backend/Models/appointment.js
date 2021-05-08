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
    patientName: {
        type: String,
        trim: true
    },
    doctorName: {
        type: String,
        trim: true
    },
    date: {
        type : Date,
        default : Date.now()
    },
    isApproved: {
        type : Boolean,
        default : false
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
