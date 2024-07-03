import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sanyamhariprem:SAM487@cluster0.sklrvoq.mongodb.net/food-del').then(()=>console.log("DB connected"));
}