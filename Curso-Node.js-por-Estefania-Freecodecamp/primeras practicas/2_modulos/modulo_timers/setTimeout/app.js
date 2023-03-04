function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

function sumar(a, b) {
  console.log(a + b);
}

setTimeout(mostrarTema, 4000, "Node.js"); // son 4000 milisegundos, que son 4 segundos
setTimeout(sumar, 4000, 10, 30); // si lleva mas de un argumento al final se separan con ,

