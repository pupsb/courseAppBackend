import { Router } from "express";
import { userModel } from "../db.js";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const {email,password, firstName,lastName} = req.body; //TODO: adding ZOD validation
  //TODO: hash the password so plaintext password is not stored in DB
  try {
    await userModel.create({
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

userRouter.post("/login", async function(req,res) {
  const {email,password} = req.body;
  const user = await userModel.findOne({
    email,
    password
  })
  if(user){
    const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: "1d"});
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
  
})
userRouter.get("/purchases", function(req,res) {
    res.json({
        message: "purchases endpoint"
    })
})

export const createUserRoutes = (app) => {
  // Add admin routes if needed
};

export { userRouter };