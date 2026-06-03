import express from "express";
import path from "path";

const router = express.Router();

router.get("/", (req, res, next) => {
  const filePath = path.resolve(
    import.meta.dirname,
    "../",
    "views",
    "shop.html",
  );
  res.sendFile(filePath);
});

export default router;
