const estatusPedido = () => {
  // resulta en true o false dependiendo de si es mayor o no a 0.8
  return Math.random() < 0.8; // para simular 20 % de probabilidad de error en toma del pedido de pizza
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("pedido exitoso");
    } else {
      reject("pedido rechazado");
    }
  }, 3000);
});

// const manejarPedido = (mensajeConfirmacion) => {
//   console.log(mensajeConfirmacion);
// };
// const rechazoPedido = (mensajeError) => {
//   console.log(mensajeError);
// };
// miPedidoDePizza.then(manejarPedido, rechazoPedido);

miPedidoDePizza
  .then((mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
  })
  .catch((mensajeError) => {
    console.log(mensajeError);
  });
