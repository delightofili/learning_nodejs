import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='message' type='text'/><button type='submit'>Send</button></form></body>",
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {});
    fs.writeFileSync("message.txt", "DUMMY");
    res.writeHead(302, { location: "/" }); //or same with res.statusCode = 302; res.setHeader("location", "/")
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Nodejs Server</title></body>");
  res.write("</html>");
  res.end();
});

server.listen(5000);
