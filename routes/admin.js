import express from "express";
import path from "path";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  const filePath = path.resolve(
    import.meta.dirname,
    "../",
    "views",
    "add-product.html",
  );

  res.sendFile(filePath);
});

router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
