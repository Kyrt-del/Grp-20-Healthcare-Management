const mongoose = require('mongoose');
const { Schema } = mongoose;

const reportSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    bloodPressure: {
        type: {
            systolic: { type: Number },
            diastolic: { type: Number }
        }
    },
    bloodSugar: {
        type: Number
    },
    temperature: {
        type: Number
    },
    pulseRate: {
        type: Number
    },
    date: {
        type : Date, 
        default : Date.now()
    }
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;