const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.write("Estpás en about");
    res.end();
    return;
  }

  res.write("Holiiiii");
  res.end();
});

server.listen(3000);

console.log("Servidor escuchado en el puerto 3000");
