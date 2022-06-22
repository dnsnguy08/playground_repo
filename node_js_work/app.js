const math = require('./math');

console.log(math);
console.log(math.adder(1, 1));

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
console.log(math.adder(num1, num2));
console.log(math.subtractor(num1, num2));
console.log(math.multiplier(num1, num2));
console.log(math.divider(num1, num2));


