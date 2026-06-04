import express from "express";
import path from "path";
import { products } from "../routes/admin.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const filePath = path.resolve(
    import.meta.dirname,
    "../",
    "views",
    "shop.html",
  );
  console.log(products);
  res.sendFile(filePath);
});

export default router;
