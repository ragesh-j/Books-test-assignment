const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const router=require("express").Router()
const BooksModel=require("../model/UserModel.js")
const SecretKey="MyName"
const express=require("express")
const app=express()
app.use(express.json())
router.post("/registration",async(req,res)=>{
    console.log(req.body)
    const {username,Password,confirmpassword}=req.body
    console.log(username)
    try{
        const User=await BooksModel.findOne({username})
        if(User){
            
            return res.status(200).json({success:false,message:"user already exist"})

        }
            
            const hashedPass=await bcrypt.hash(Password,10)
            
            const Users=await BooksModel.create({
              username,
              password:hashedPass  
            })
            Users.save()

            return res.status(200).send({sucess:true,message:"Account created successfully"})
        }
    
    catch(err){
        console.log(err)
    }

})
router.post("/login",async (req,res)=>{
   console.log(req.body)
    try{
        const user=await BooksModel.findOne({username:req.body.username})
        if(user){
            const matchPassword=await bcrypt.compare(req.body.password,user.password)
        
        if(matchPassword){
            const dataSendtoFrontend={
                _id:user._id
            }
            const token= jwt.sign(dataSendtoFrontend,SecretKey)
            return res.status(200).json({success:true,data:token})
        }
    }
        else{
            console.log("hi")
            res.status(200).json({success:false,message:"user not registered"})
        }
    }
    catch(err){
        res.status(200).json(err.message)
    }
})
module.exports=router