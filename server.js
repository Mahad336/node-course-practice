const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/404":
      fs.readFile("./views/404.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        }
        res.write(data);
        res.end();
      });
      break;
    case "/about":
      fs.readFile("./views/about.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        }
        res.write(data);
        res.end();
      });
      break;
    case "/":
      fs.readFile("./views/home.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        }
        res.write(data);
        res.end();
      });
      break;
    default:
      res.statusCode = 301;
      res.setHeader("Location", "/");
      res.end();
  }
});
server.listen(3000, "localhost", () => {
  console.log("server is running on 3000");
});
