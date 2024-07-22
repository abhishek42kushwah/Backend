const express = require("express")
const app = express()
const authRoutes = require("./routers/auth")
const userRoutes = require("./routers/user")
const appointmentRoutes  = require("./routers/appointment")
require("dotenv").config()

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/appointments", appointmentRoutes)


const dbConnection = require("./config/dbConnection")
dbConnection()


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    `server running on ${PORT} number`
})

