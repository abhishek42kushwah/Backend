const express = require("express")
const router = express.Router()

const { getUsers, deleteUser, updateUser } = require("../controllers/userController");
const {authMiddleware,roleMiddleware} = require("../middleware/authMiddleware")

// ============ getUsers,update,delete routes ===========

router.get("/getAllUsers",authMiddleware,roleMiddleware(['Institute']), getUsers);
router.put("/updateUser:id",authMiddleware,roleMiddleware(["Institute"]), updateUser);
router.delete("/deleteUser:id",authMiddleware,roleMiddleware("Institute"), deleteUser);


module.exports = router;