
let mongoose=require("mongoose")


let Notemodel=mongoose.model("practicelnote",mongoose.Schema({
    name:String,
    note:[],
    course:String,
    UserID:String
    
}))


module.exports={
    Notemodel
}