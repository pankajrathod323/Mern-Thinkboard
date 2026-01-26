import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://pankajrathod272004_db_user:pankaj%40323@cluster0.0xq7nx9.mongodb.net/?appName=Cluster0");
        console.log("Mongodb connected successfully");
    } catch (error) {
      console.error("Error Connecting to MongoDB", error);
    }
}