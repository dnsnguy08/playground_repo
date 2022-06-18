console.log(process.argv);

const a = process.argv[2];
const b = process.argv[3];

console.log(a === b);

const args = process.argv.slice(2);
const x = args[0];
const y = args[1];

console.log(x === y);
