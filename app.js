import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import path from "path";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  const filePath = path.resolve(import.meta.dirname, "views", "404.html");
  res.status(404).sendFile(filePath);
});

app.listen(3000);
