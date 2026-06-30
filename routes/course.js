import { Router } from "express";

const courseRouter = Router();

courseRouter.get("/preview", function(req,res) {
    res.json({
        message: "courses endpoint"
    })
})

courseRouter.post("/purchase", function(req,res) {
    res.json({
        message: "signup endpoint"
    })
})

export const createCourseRoutes = (app) => {
  // Add admin routes if needed
};

export { courseRouter };