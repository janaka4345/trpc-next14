import { error } from "console";
import mongoose from "mongoose";

const dbConnect=async()=>{
if(!process.env.MONGODB_URI){
    throw new Error("db url wrong")
}
    await mongoose.connect(process.env.MONGODB_URI)
}
dbConnect().catch((error)=>console.log(error))
export default dbConnect
