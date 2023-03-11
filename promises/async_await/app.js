function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de FreeCodeCamp`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de FreeCodeCamp");
      } else {
        reject("Producto no disponible actualmente");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por su compra, disfrute su pedido");
    }, 4000);
  });
}

// ordenarProducto("taza")
//     .then((respuesta) => {
//         console.log("Respuesta Recibida");
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then((respuestaProcesada) => {
//         console.log(respuestaProcesada);
//     })
//     .catch(error => {
//         console.log(error);
//     });

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido("taza");
