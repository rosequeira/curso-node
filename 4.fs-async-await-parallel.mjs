// Promises parallel lee todas las promesas en el mismo instante y una vez ya leidas las muestra al mismo tiempo

import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("primer texto:", text);
  console.log("primer texto:", text2);
});
