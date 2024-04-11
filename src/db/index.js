 import mongoose from "mongoose";
  
 const connectDb = async()=>{
     try{
         const connectionInstance =  await mongoose.connect('mongodb+srv://abhishekpanwarcseiot2022:5625abhishek@major.h36bcjq.mongodb.net')
         console.log(`MongoDB connected !! host ${connectionInstance.connection.host}`)
        
      
     }catch(error){
         console.log(error)
         throw error
         process.exit(1)
     }
 }
 
 export default connectDb;