import { Router } from "express";


import { adminModel } from "../db.js";

const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
adminRouter.post("/login", function (req, res) {
  res.json({
    message: "login endpoint",
  });
});
adminRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchases endpoint",
  });
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "course creation endpoint",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "course update endpoint",
  });
});

adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: "course bulk retrieval endpoint",
  });
});

export {adminRouter};