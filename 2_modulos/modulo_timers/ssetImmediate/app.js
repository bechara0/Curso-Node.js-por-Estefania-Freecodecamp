function saludameMan(name) {
  console.log(`Hola hermano ${name}, saluteeeee!!!`);
}

console.log("Antes de setImmediate");
setImmediate(saludameMan, "Javier"); // se va a ejecutar cuando terminen todos los sícronos
console.log("Después de setImmediate");
