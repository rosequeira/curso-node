// .js -> por defecto utiliza CommonJs
// .cjs -> para utilizar CommonJs
// .mjs -> para utilizar ES ModuleJs

import {sum, sub, mult } from './sum.mjs';

console.log(sum(3,5));
console.log(sub(3,5));
console.log(mult(3,5));