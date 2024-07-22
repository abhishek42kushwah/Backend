const jwt = require("jsonwebtoken")

exports.authMiddleware = (req,res,next)=>{
const token = req.header('Authorization').replace('Bearer','')
if(!token){
    return res.status(401).json({
        message:"No Token, authorization denied "
    });
}
    try{
          const decode = jwt.verify(token,'your_jwt_secret')
          req.user = decode;
          next()
    }catch(error){
        res.status(401).json({
            message:'Token is not valid'
        })
    }
}

exports.roleMiddleware = (roles) =>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                message:"Access denied"
            })
        }
        next()
    }
}