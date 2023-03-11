const EventEmitter = require("events"); // no se ponde el mismo nombre porque es una clase

const emisorProductor = new EventEmitter();

emisorProductor.on("compra", (total, numproductos) => {
  // asociamos el evento compra a esa funcion
    console.log(`se realizo una compra por $${total}.`);
    console.log(`Cantidad de productos: ${numproductos}`)
});

emisorProductor.emit("compra", 500, 3); //emitimos el evento cuando se realiza una compra, si no hago esto no imprime nada en pantalla

// estas funciones solo se ejecutan cuando el evento ocurre.