const saludo = require("./saludos.js"); // importa todos los modulos que estan en saludos.js

// si solo quiero llamar a una sola funcion, o a modulos especificos de saludos puedo:
// const { saludarDos, saludar } = require("./saludos.js ")

console.log(saludo.saludar("Juan"));
console.log(saludo.saludarDos());
