const path = require('node:path')

//path.sep.sep es la barra separadora segun SO. no es misma en windows y MAc
console.log(path.sep)


//.join unir rutas
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

//.basemane no importa el largo de la ruta tomara el nombre del fichero
const base = path.basename('/hola/subhola/inthola/archivo.txt')
console.log(base)

//.basemane al separar con coma y agregando la extension, solo traera el nombre
const filename = path.basename('/hola/subhola/inthola/archivo2.txt', '.txt')
console.log(filename)

//.extname para saber la extension del archivo
const extension = path.extname('inthola/imagen.png', )
console.log(extension)