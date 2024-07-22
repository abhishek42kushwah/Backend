const express = require("express")
const router = express.Router()


const { bookAppointment, confirmAppointment } = require("../controllers/appointmentController")
const {authMiddleware,roleMiddleware} = require("../middleware/authMiddleware")


// ============== booking and confirmAppointment routes
router.post("/bookAppointment",authMiddleware,roleMiddleware(['Student']), bookAppointment);
router.put("/:id/confirm",authMiddleware,roleMiddleware(['Teacher']), confirmAppointment);


module.exports = router