

let mongoose=require("mongoose")
require('dotenv').config()
// console.log(process.env.connect)

let connecting=mongoose.connect(process.env.connect)

module.exports={
    connecting
}

