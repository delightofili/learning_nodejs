import express from "express";
import path from "path";
import { products } from "../routes/admin.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  });
});

export default router;
