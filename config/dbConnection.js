const mongoose = require("mongoose")

require("dotenv").config()

const Connection = () => {
  
        mongoose.connect(process.env.MONGOOSE_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }).then(
          console.log("Db connection SuccessFull")
        ).catch((error)=>{
          console.log("Db connection error");
          process.exit(1)
        })
 

}

module.exports = Connection;