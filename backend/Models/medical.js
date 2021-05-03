const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicalSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },    
    medicine: {
        type: String,
        trim: true
    },
    disease: {
        type: String,
        trim: true
    },
    date: {
        type : Date, 
        default : Date.now()
    }
});

const Medical = mongoose.model('Medical', medicalSchema);
module.exports = Medical;