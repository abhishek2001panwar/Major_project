import dotenv from 'dotenv'
import connectDb from './db/index.js';
dotenv.config({
    path: './env'
})

connectDb()
// (async() => {
//  try {
//     await mongoose.connect('mongodb+srv://abhishekpanwarcseiot2022:5625abhishek@major.h36bcjq.mongodb.net')
//     console.log('mongodb connected')

//  } catch (err) {
//     console.log("error", err)
//     throw err
//  }})()