import { Router } from "express";

export const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render('form', {})
});