import { Router } from "express";

const userRouter = Router();

userRouter.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
userRouter.post("/user/login", function(req,res) {
    res.json({
        message: "signup endpoint"
    })
})
userRouter.get("/user/purchases", function(req,res) {
    res.json({
        message: "purchases endpoint"
    })
})

export const createUserRoutes = (app) => {
  // Add admin routes if needed
};

export { userRouter };