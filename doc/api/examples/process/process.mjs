// 1. how to use it
import process from 'node:process';

console.log(process);

// 2. process.env
process.env.foo = 'bar';
console.log(process.env.foo);   // 2.1 you can modify it | Node.js process

// 2.2 's value -- admits -- DIFFERENT types
process.env.testFirst = null
console.log(process.env.testFirst);
process.env.testSecond = undefined
console.log(process.env.testSecond);
process.env.testThird = true
console.log(process.env.testThird);
process.env.testFourth = 2
console.log(process.env.testFourth);

// 2.3 delete an entry
delete process.env.testFourth
console.log(process.env.testFourth);

// 2.4 if you run it | Windows, case-insensitive
console.log(process.env.TESTTHIRD);
