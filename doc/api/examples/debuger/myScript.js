global.x = 5;
setTimeout(() => {
  debugger;     // set a breakpoint
  console.log('world');
}, 1000);
console.log('hello');
