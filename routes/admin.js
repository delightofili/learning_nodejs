import express from "express";
import path from "path";
import rootDir from "../util/path.js";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  const filePath = path.resolve(rootDir, "views", "add-product.html");

  res.sendFile(filePath);
});

router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
