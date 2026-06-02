import http from "http";

import routes from "./route.js";

const server = http.createServer(routes);

server.listen(5000);

const anotherServer = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      "<html><title>Greetings</title><body><h1>Welcome Chinonso</h1></body></html>",
    );
    res.write(
      "<body><p>you can change your name here</P><form action='/sub' method='POST'><input type='text' name='sub'/><button type='submit'>change</button></form></body>",
    );
    return res.end();
  }
  console.log("Another Server on Port 8000");

  if (url === "/sub" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      res.write("<html><body><h1>Welcome " + message + "</body></html>");
      console.log(message);
      return res.end();
    });
    return;
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body.><h1>Page Not Found</h1></body.</html>");
  res.end();
});

anotherServer.listen(8000);
