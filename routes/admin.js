import express from "express";
import path from "path";
import rootDir from "../util/path.js";

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  /*  const filePath = path.resolve(rootDir, "views", "add-product.html");
  res.sendFile(filePath); */
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/products", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export { router as routes, products };
