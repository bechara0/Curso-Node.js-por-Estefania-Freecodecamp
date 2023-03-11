const http = require("http");
const puerto = 3000;
const servidor = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(res.statusCode);
  res.end("hola mundo!");
});

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto: ${puerto}`);
});
