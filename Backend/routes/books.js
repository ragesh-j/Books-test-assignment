

const BooksAdding=require("../model/BooksAdding.js")

const express=require("express")
const app=express()
const router1=require("express").Router()
app.use(express.json())

router1.post("/addbooks",async(req,res)=>{
    console.log(req.body)
    const {title,ISBN,description,author,publisher,publishedDate}=req.body
    try{
    const books=await BooksAdding.create({
        title,
        ISBN,
        description,
        author,
        publisher,
        publishedDate
    })
    books.save()
    return res.status(200).json({success:true,message:"book added successfully"})
    }
    catch(e){
        res.status(200).json({message:e.message})
    }
})

module.exports=router1