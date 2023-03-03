const fs = require("fs");
// Leer un archivo
// fs.readFile("index.html", "utf-8", (err, contenido) => {
//   if (err) {
//     throw err; // a diferencia de console.log, throw frena la ejecucion
//   }
//   console.log(contenido);
// });

// cambiar nombre
// fs.rename("index.html", "main.html", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Se a modificado el nombre del archivo correctamente");
// });

// voy a agregar info al final de un archivo
fs.appendFile("index.html", "<p>Hola Juan</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("Texto agregado exitosamente al final de index.html");
});

// reemplazar todo el contenido del archivo
fs.writeFile("index.html", "contenido nuevo", (err) => {
  if (err) {
    throw err;
  }
  console.log("Contenido reemplazado");
});

// eliminar archivo
fs.unlink("choto.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("archivo eliminado");
});

// te vas a dar cuenta que no se ejecutan en el orden que esta codificado, pero eso ocurre porque son metodos async, cada uno
//lleva un tiempo diferente de ejecucion, esto lo puedo solucionar agregando Sync al final de cada uno, appendFileSync, unlinkSync, etc
