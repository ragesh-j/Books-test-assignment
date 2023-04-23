const mongoose=require("mongoose")
const BooksAddSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ISBN:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    publishedDate:{
        type:String,
        required:true
    }
    
})
const BooksAdding=mongoose.model("BooksAdd",BooksAddSchema)
module.exports=BooksAdding