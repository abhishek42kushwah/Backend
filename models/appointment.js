const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    TeacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    status:{
        type:String, 
        enum: ['Pending','Confirmed'],
        default:'Pending'
    }
});

module.exports = mongoose.model("Appointment", appointmentSchema)