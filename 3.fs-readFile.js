const fs = require("node:fs");

console.log("Leyendo primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("primer texto:", text);
});

console.log(".....CARGANDO......");

console.log("Leyendo segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("segundo texto:", text);
});
