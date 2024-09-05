import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config ({
    path: './env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}` )
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed!!", err)
})



















/*
import { Express } from "express";
const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONOGO_URI}/
        ${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT,() =>{
            console.log(`App is listening in port ${process.env.PORT}`)
        })
    } catch(error) {
        console.error("ERROR",error)
        throw err
    }
}) ()


*/