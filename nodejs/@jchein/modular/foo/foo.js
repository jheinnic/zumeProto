var process = require('process');

console.log(process);
// console.log(JSON.stringify(process));

console.log(process.mainModule);
console.log(JSON.stringify(process.mainModule));

console.log(process.mainModule.paths);
console.log(JSON.stringify(process.mainModule.paths));
