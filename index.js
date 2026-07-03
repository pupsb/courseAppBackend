import "dotenv/config";
import { userRouter } from "./routes/user.js";
import express from "express";
import { courseRouter } from "./routes/course.js";
import { adminRouter } from "./routes/admin.js";
import mongoose from "mongoose";
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    }); 
}

main();
