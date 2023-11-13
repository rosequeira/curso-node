import { platform, release, arch, cpus, uptime } from 'node:os';

console.log('nombre del sistema operativo', platform());
console.log('Version del sistema operativo', release());
console.log('arquitectura', arch() / 1024 / 1024);
console.log('CPUs', cpus() / 1024 / 1024);
console.log('uptimes', uptime() / 60 / 60);