import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


// cors credentials
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
//middlewares
app.use(express.json({limit: 10000}))
app.use(express.urlencoded({extended: true , limit: 10000}))
app.use(express.static("public"))
app.use(cookieParser())




app.get('/', (req, res) => {
    res.send('Hello World!')
  })

 export default app
