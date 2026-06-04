import express from "express";
import path from "path";
import { products } from "../routes/admin.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop");
  console.log(products);
});

export default router;
