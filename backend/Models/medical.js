const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicalSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctorName: {
        type: String,
        trim: true
    },   
    medicine: {
        type: String,
        trim: true
    },
    date: {
        type : Date, 
        default : Date.now()
    },
    time: {
        morning : {
            type : Boolean,
            default : false
        },
        afternoon : {
            type : Boolean,
            default : false
        },
        night : {
            type : Boolean,
            default : false
        }
    }
});

const Medical = mongoose.model('Medical', medicalSchema);
module.exports = Medical;