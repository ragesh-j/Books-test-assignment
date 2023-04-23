const express=require("express")
const database=require("./db")
const jwt=require("jsonwebtoken")
const BooksModel=require("./model/UserModel.js")
const app=express()
const cors=require("cors")
app.use(cors())
const BooksAdd=require("./model/BooksAdding")

const bodyParser=require("body-parser")
app.use(bodyParser.json())
const userRouter=require("./routes/user.js")


app.use("/",userRouter)
const booksRouter=require("./routes/books.js")
app.use("/",booksRouter)
app.listen(8000,()=>{
    console.log("App is running at port 8000")
})
