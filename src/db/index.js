 import mongoose from "mongoose";
 import express from "express";
 const app = express(); 
 const connectDb = async()=>{
     try{
         const connectionInstance =  await mongoose.connect('mongodb+srv://abhishekpanwarcseiot2022:5625abhishek@major.h36bcjq.mongodb.net')
         console.log(`MongoDB connected !! host ${connectionInstance.connection.host}`)
         app.listen(process.env.PORT || 8000, ()=>{
             console.log(`Server is running on port ${process.env.PORT || 8000}`)
         })
      
     }catch(error){
         console.log(error)
         throw error
         process.exit(1)
     }
 }
 
 export default connectDb;