 import { asynchandler } from '../utils/asyncHandler.js';

 const userRegister = asynchandler(async(req,res)=>{
    try {
        const  { username , fullName , email , password } = req.body; 
        console.log(email)


        
    } catch (error) {
        console.log(error.message)
    }
 })
 const userLogin = asynchandler(async(req,res)=>{
    try {
         await res.status(200).json({
            message: "login"
        })
    } catch (error) {
        console.log(error.message)
    }
 })
 export {userRegister, userLogin} ;