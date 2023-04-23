const mongoose=require("mongoose")
function connectToDB(){
mongoose.connect("mongodb+srv://ragesh_j:10xacademy@cluster0.ov2ibq8.mongodb.net/Books")
const connection=mongoose.connection
connection.on('connected',()=>{
    console.log("connected to db...")
})
connection.on("error",()=>{
    console.log("error occured")
})
}
connectToDB()
module.exports=mongoose

