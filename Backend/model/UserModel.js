const mongoose=require("mongoose")
const BooksModelSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const BooksModel=mongoose.model("BooksModel",BooksModelSchema)
module.exports=BooksModel