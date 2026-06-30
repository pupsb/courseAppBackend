import { userRouter } from "./routes/user.js";
import express from "express";
import { courseRouter } from "./routes/course.js";
import { adminRouter } from "./routes/admin.js";
const app = express();

app.use("/user", userRouter)
app.use("/courses", courseRouter)
app.use("/admin",adminRouter)



app.listen(3000); 