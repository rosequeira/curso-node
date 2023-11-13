// con el module js no hay necesidad de agregar async , ya que viene en el global

import { readFile } from 'node:fs/promises';

console.log( 'Leyendo primer archivo...' );
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log( '.....CARGANDO......' )

const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log('primer texto:', text2)