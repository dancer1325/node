global.x = 5;
setTimeout(() => {
  debugger;     // WAY to specify a breakpoint
  console.log('world');
}, 1000);
console.log('hello');
