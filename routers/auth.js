const express = require("express")
const router = express.Router()


const { register, login } = require("../controllers/authController");




// ==========register and login routes =========
router.post("/register", register)
router.post("login", login)





module.exports = router;