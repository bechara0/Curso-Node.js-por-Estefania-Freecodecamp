// const curso = require("./curso.json");
// console.log(curso.temas);

let infoCurso = {
  Titulo: "Aprende NodeJs",
  numVistas: 3234434,
  numLikes: 54545,
  temas: ["JavasCripts", "NodeJS"],
  esPublico: true,
};

//console.log(infoCurso);

// paso un objeto js a una cadena de caracteres json
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);

console.log(typeof infoCurso);
console.log(typeof infoCursoJSON);
console.log(infoCursoJSON.Titulo); // tira undefined, porque no es un objeto, por lo cual no se puede acceder a solo una parte de la cadena

//ahora voy a pasar json a objeto js
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.Titulo); // tira el titulo, porque ya es un objeto, y si tiene esa fuincionalidad.
