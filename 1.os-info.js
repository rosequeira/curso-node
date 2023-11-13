const os = require('node:os')

console.log('nombre del sistema operativo', os.platform());
console.log('Version del sistema operativo', os.release());
console.log('arquitectura', os.arch() / 1024 / 1024);
console.log('CPUs', os.cpus() / 1024 / 1024);
console.log('uptimes', os.uptime() / 60 / 60);