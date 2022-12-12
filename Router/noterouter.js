
let express=require("express")
const { Notemodel } = require("../Model/Notemodel")

let Userrouter=express.Router()

Userrouter.get("/",async(req,res)=>{
   let data=await Notemodel.find({})

   res.send(data)
})


Userrouter.post("/create",async(req,res)=>{
    let payload=req.body
    try{
        let user=new Notemodel(payload)
        await user.save()
        res.send(payload)
    }
    catch(err){
        console.log(err)
        console.log("error occur in the post")
    }
   
})

Userrouter.patch("/patch/:noteID",async(req,res)=>{
    let payload=req.body
    let noteID=req.params.noteID;
    let UserID=req.body.UserID
    let note=await Notemodel.findOne({_id:noteID})
    
    if(UserID!==note.UserID){
        res.send("Not authorised")
    }
    else{
        await Notemodel.findByIdAndUpdate({_id:noteID},payload)
        res.send({"msg":"note updated successfull"})
    }

})

Userrouter.delete("/delete/:noteID",async(req,res)=>{
    let noteID=req.params.noteID;
    let UserID=req.body.UserID
    let note=await Notemodel.findOne({_id:noteID})
    if(UserID!==note.UserID){
        res.send("Not authorised")
    }
    else{
        await Notemodel.findByIdAndDelete({_id:noteID})
        res.send({"msg":"note deleted successfull"})
    }
})




module.exports={
    Userrouter
}
