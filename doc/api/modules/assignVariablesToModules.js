module.exports.hello = true; // Exported from require of module
exports = { hello: false };  // Not exported, only available in the module

console.log(module.exports)
console.log(exports)
console.log(module.exports === exports)
