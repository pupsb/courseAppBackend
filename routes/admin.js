import { Router } from "express";


import { adminModel, courseModel } from "../db.js";
import jwt from "jsonwebtoken";
import { adminMiddleware } from "../middleware/admin.js";
const JWT_ADMINSECRET = process.env.JWT_ADMINSECRET;


const adminRouter = Router();

adminRouter.post("/signup", async function (req, res) {
  const {email,password, firstName,lastName} = req.body; //TODO: adding ZOD validation
  //TODO: hash the password so plaintext password is not stored in DB
  try {
    await adminModel.create({
      email,
      password,
      firstName,
      lastName
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error in signup"
    })
    return;
  }
  res.json({
    message: "signup succeded",
  });
});

adminRouter.post("/login", async function(req,res) {
  const {email,password} = req.body;
  const admin = await adminModel.findOne({
    email,
    password
  })
  if(admin){
    const token = jwt.sign({id: admin._id}, JWT_ADMINSECRET, {expiresIn: "1d"});
    //do cookie logic here
    res.json({
    message: "login endpoint",
    token
  })
  }else{
    
    res.json({
        message: "user not found",
    })
  }
  
});
adminRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchases endpoint",
  });
});

adminRouter.post("/course",adminMiddleware, async function (req, res) {
  const adminId= req.userId;
  const {title,description,imageUrl,price}= req.body;
  const course = await courseModel.create({
    title,
    description,
    imageUrl,
    price,
    creatorId: adminId
  })
  res.json({
    message: "course creation endpoint",
    courseId: course._id
  });
});

adminRouter.put("/course",adminMiddleware, async function (req, res) {
  const {courseId,title,description,imageUrl,price} = req.body;
  const updatedCourse = await courseModel.findByIdAndUpdate(courseId,{
    title,
    description,
    imageUrl,
    price
  },{new:true});

  res.json({
    message: "course update endpoint",
    updatedCourse
  });
});

adminRouter.get("/course/bulk",adminMiddleware, async function (req, res) {
  const courses = await courseModel.find({});
  res.json({
    message: "course bulk retrieval endpoint",
    courses
  });
});

export {adminRouter};