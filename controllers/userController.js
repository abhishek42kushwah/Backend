const User = require("../models/user")


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateUser = async(req,res)=>{
try {
    const {id} = req.params;
    const {name,email,role,phoneNumber} = req.body

    await User.findByIdAndUpdate(id,{name,role,email,phoneNumber});
    return res.json({message:"user updated"})
} catch (error) {
    console.error(err.message);
    res.status(500).send('Server error');
}
}

exports.deleteUser = async(req,res)=>{
    const {id} = req.params;
    try {
        await User.findByIdAndDelete(id)
        return res.json({message:"user deleted"})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:'server error'});
    }
}
