//import http from "http";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<h1>Enter Product Details</h1><form action='/products' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>",
  );
});

app.use("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello Hello World!  (from Express)</h1>");
});

/* const server = http.createServer(app); */

//server.listen(3000);

app.listen(3000);
