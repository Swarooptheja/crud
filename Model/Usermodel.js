
let mongoose=require("mongoose")


let Usermodel=mongoose.model("practicelogin",mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    course:String,
    password:String
}))


module.exports={
    Usermodel
}