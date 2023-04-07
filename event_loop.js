const http = require("http");

const server = http.createServer((req, res) => {
  const writeResponse = async () => {
    if (req.url === "/") {
      return res.end("Welcome to the home page");
    }

    const showTandomNumber = async () => {
      for (let i = 0; i < 500000; i++) {
        console.log(Math.random() * i);
      }
      return res.end("About page");
    };

    if (req.url === "/about") {
      await showTandomNumber();
    }

    return res.end("Page not found");
  };

  writeResponse();
});

server.listen(3000);
