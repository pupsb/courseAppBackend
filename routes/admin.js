import { Router } from "express";

const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
adminRouter.post("/login", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
adminRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchases endpoint",
  });
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

export {adminRouter};