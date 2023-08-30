//imports
const http = require("http");
const fs = require("fs");
//http server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is About Page");
    res.end();
  } else if (req.url === "/contact") {
    res.write("This is Contact Page");
    res.end();
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        console.error(err);
        res.write("An error occurred while writing the file.");
      } else {
        res.write('File "demo.txt" has been written.');
      }
      res.end();
    });
  } else {
    res.write("Page not found");
    res.end();
  }
});
//port 3000
server.listen(3000, () => {
  console.log("Server is running and listening on port 3000");
});
