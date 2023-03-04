function saludar(nombre) {
  return `Hola ${nombre}`;
}

function saludarDos() {
  return "Hola Mundo Hermoso!!!";
}

//module.exports.saludar = saludar;
//module.exports.saludarDos = saludarDos;

// otra forma de exportar lo mismo:
module.exports = {
  saludar: saludar,
  saludarDos: saludarDos,
};
