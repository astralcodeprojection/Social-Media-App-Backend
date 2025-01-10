import mongoose from "mongoose";

export const dbConnect = ()=>{
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("The database has been successfully connected")
    } catch (error) {
        console.log(error);
    }
}