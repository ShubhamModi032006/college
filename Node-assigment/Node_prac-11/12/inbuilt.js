const fs = require('fs');
const { parseArgs } = require('util');

// const result = fs.readFileSync('./index.js',/*'utf8'*/ {encoding: 'utf8'});

// console.log(result);


const code = fs.readFileSync('./server.js');


fs.appendFileSync('./index.js','\n'+code);

// console.log(...process.argv);
const args = process.argv;

console.log(args);
const [a,b,...rest] = args;
console.log(rest);