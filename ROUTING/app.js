const http = require("http");
const cursos = require("./cursos");

const servidor = http.createServer((req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return manejarSolicitudGet(req, res);
    default:
      res.statusCode = 504;
      res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
    case "POST":
      return manejarSolicitudPost(req, res);
    case "PUT":
      return manejarSolucitudPut(req, res);
    case "DELETE":
      return manejarSolicitudDelete(req, res);
  }
});

function manejarSolicitudGet(req, res) {
  const path = req.url;
  if (path === "/") {
    return res.end("Bienvenidos a mi primer servidor y API creados con NodeJS");
  } else if (path === "/cursos") {
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === "/cursos/programacion") {
    return res.end(JSON.stringify(cursos.infoCursos.programación));
  }
  res.statusCode = 404;
  res.end("El recurso solicitado no existe");
}

function manejarSolicitudPost(req, res) {
  const path = req.url;
  if (path === "/cursos/programacion") {
    let cuerpo = "";
    req.on("data", (contenido) => {
      cuerpo += contenido.toString();
      req.on("end", () => {
        console.log(cuerpo);
        console.log(typeof cuerpo);

        // si quiero convertirlo a objeto de JS en vez de que sea string:
        cuerpo = JSON.parse(cuerpo);
        console.log(typeof cuerpo);
        console.log(cuerpo.titulo);
        res.end("el servidor recibio solicitud POST para /cursos/programacion");
      });
    });

    // return res.end("el servidor recibio solicitud POST para /cursos/programacion");
  }
}

function manejarSolucitudPut(req, res) {
  const path = req.url;
  if (path === "/cursos/programacion") {
    res.statusCode = 200;
    console.log(
      "El servidor ha recivido la solicitud PUT para /cursos/programacion"
    );
  }
}

function manejarSolicitudDelete(req, res) {
  const path = req.url;
  if (path === "/cursos/programacion") {
    res.statusCode = 200;
    console.log("El servidor ha recibido una solicitud de DELETE");
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
