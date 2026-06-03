//import http from "http";
import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
});

/* const server = http.createServer(app); */

//server.listen(3000);

app.listen(3000);
