import dotenv from "dotenv";
import connectDb from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: './env',
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
// (async() => {
//  try {
//     await mongoose.connect('mongodb+srv://abhishekpanwarcseiot2022:5625abhishek@major.h36bcjq.mongodb.net')
//     console.log('mongodb connected')

//  } catch (err) {
//     console.log("error", err)
//     throw err
//  }})()
