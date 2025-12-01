import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from "cors"
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"



const app = express()
const port = process.env.port || 3001
const MongoDB = process.env.MONGODB
 

//  Database connect
try {
   await  mongoose.connect(MongoDB);
    console.log("MongoDB database connected")
} catch (error) {
    console.log(`error occurs ${error}`)
}



// define Routes
app.use(cors());

app.use(express.json())
app.use("/book",bookRoute)
app.use("/user",userRoute)



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`app listen on ${port}`)
})