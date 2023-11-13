const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request recibido");
  res.end("hola mundo");
});

server.listen(0, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  );
});
