
const Appointment = require("../models/appointment")


exports.bookAppointment = async(req,res)=>{
try {
     const {studentId,teacherId,date,time} = req.body

     const appointment = await new Appointment.save({studentId,teacherId,date,time})
           res.json({
            message:"Appointment Booked",appointment
           })

} catch (error) {
    res.status(500).json({
        success:false,
        message:"server error",error
    })
}
}






exports.confirmAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        await Appointment.findByIdAndUpdate(id, { status: 'Confirmed' });
        res.json(
            {
                success: true,
                message: "Appointment Confirmed"
            }
        )
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Server error', error
        });
    }
}