// 1. how to access
import path from 'node:path';

console.log(path)

// 2. .resolve([...paths])
// return a path string / from right -- to -- left TILL find an ABSOLUTE path
// 2.1  "/static/test.txt"    because it MUST be an absolute path
const filePath = path.resolve('./Servus.jpg', '/static', 'test.txt');
console.log(filePath);
// 2.2  NOT absolute path generated -> current working directory is used
const anotherFilePath = path.resolve('test.txt');
console.log(anotherFilePath);
// 2.3 if SOME argument != string -> throws a [`TypeError`][]
try {
  const invalidFilePath = path.resolve(2);
} catch (e) {
  console.log(e);
}
// 2.4 if trailing "/" is the CURRENT working directory -> it's hold
console.log(path.resolve('/foo/', '/'));
// 2.5 normalization & removal of trailing "/"
console.log(path.resolve('foo////bar', 'baz//'));
// 2.6 Zero-length `path` segments -> ignored
console.log(path.resolve('/first', '', '/second', '', 'third'));
// 2.7 if you do NOT pass anything (== `path.resolve()`) -> returns the CURRENT working directory's absolute path
console.log(path.resolve());
