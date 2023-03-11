const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa cumplida");
    } else {
      reject("Promesa rechazada...");
    }
  }, 3000); //lo uso para simular tiempo de conexion al server
});

const manejaPromesaCumplida = (valor) => {
  console.log(valor);
};
const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejaPromesaCumplida, manejarPromesaRechazada);
