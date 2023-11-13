const { readFile } = require("node:fs/promises");

// IIFE -Inmediatly invoked functions expression
// es lo mismo que una funcion
// async function init(){

// }
// init()
(async () => {
  console.log("Leyendo primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("primer texto:", text);

  console.log(".....CARGANDO......");

  const text2 = await readFile("./archivo2.txt", "utf-8");
  console.log("primer texto:", text2);
})();
