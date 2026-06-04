import express from "express";
import bodyParser from "body-parser";
import shopRoutes from "./routes/shop.js";
import path from "path";
import { routes } from "./routes/admin.js";
import expressHbs from "express-handlebars";

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(shopRoutes);
app.use("/admin", routes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
