import express from "express";
import bodyParser from "body-parser";
import shopRoutes from "./routes/shop.js";
import path from "path";
import { routes } from "./routes/admin.js";

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(shopRoutes);
app.use("/admin", routes);

app.use((req, res, next) => {
  const filePath = path.resolve(import.meta.dirname, "views", "404.html");
  res.status(404).sendFile(filePath);
});

app.listen(3000);
