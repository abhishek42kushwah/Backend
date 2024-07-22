const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

exports.register = async (req, res) => {
    try {
        const { name, email, password, phoneNumber, role, } = req.body
       
        if(!name  || !email || !password || !phoneNumber || !role){
            return res.status(403).json({
                success:false,
                message:"All Filed Is Req."})
        }

        let user = await User.findOne({email})
        if(!user)
        {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = bcrypt.hash(password, 10)

         user = await new User.save({ name, password: hashedPassword, email, role, phoneNumber })
        res.status(201).json({
            success: true,
            message: "User registered successfully", user,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "user not registered SuccessFully Please Try again", error
        })
    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }
        const payload = {user:{  id: user._id,role: user.role
        }
    }

        const token = jwt.sign(payload, SECRET_KEY,{expiresIn:'3h'},(err,res)=>{
            if (err) throw err;
            res.json({ token })
        }
        );
        


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server error", error
        })
    }
}