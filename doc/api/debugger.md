# Debugger

<!--introduced_in=v0.9.12-->

> Stability: 2 - Stable

<!-- type=misc -->

* == built-in command-line debugging utility
* Node.js debugger client
  * ⚠️!= FULL-featured debugger ⚠️
  * enables
    * stepping
      * == set a breakpoint
    * inspection

* `node inspect pathToScriptToDebug`
  * 💡ALTHOUGH there are NOT breakpoints -> OPEN the debugger client | FIRST line 💡
  * _Example:_ [here](examples/debuger)

* ways to specify a breakpoint
  * [`debugger`][] statement
  * `NODE_INSPECT_RESUME_ON_START=1`

* `repl`
  * allows
    * evaluating the code remotely

* `next`
  * allows
    * stepping -- to the -- NEXT line

* `help`
  * display OTHER available commands

* `enter`
  * ⚠️repeat the PREVIOUS debugger command ⚠️

## Watchers

* allows
  * | debugging, watching expression & variable

* `watch('my_expression')`
  * watch an expression

* `watchers`
  * print the ACTIVE watchers

* `unwatch('my_expression')`
  * remove a watcher

## Command reference

### Stepping

* `cont`, `c`
  * Continue execution
* `next`, `n`
  * Step next
* `step`, `s`
  * Step in
* `out`, `o`
  * Step out
* `pause`
  * Pause running code (❓)

### Breakpoints

* `setBreakpoint()`, `sb()`
  * Set breakpoint | CURRENT line
* `setBreakpoint(line)`, `sb(line)`
  * Set breakpoint | SPECIFIC line
* `setBreakpoint('fn()')`, `sb(...)`
  * TODO: Set breakpoint on a first statement in
    function's body
* `setBreakpoint('script.js', 1)`, `sb(...)`: Set breakpoint on first line of
  `script.js`
* `setBreakpoint('script.js', 1, 'num < 4')`, `sb(...)`: Set conditional
  breakpoint on first line of `script.js` that only breaks when `num < 4`
  evaluates to `true`
* `clearBreakpoint('script.js', 1)`, `cb(...)`: Clear breakpoint in `script.js`
  on line 1

It is also possible to set a breakpoint in a file (module) that
is not loaded yet:

```console
$ node inspect main.js
< Debugger listening on ws://127.0.0.1:9229/48a5b28a-550c-471b-b5e1-d13dd7165df9
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
Break on start in main.js:1
> 1 const mod = require('./mod.js');
  2 mod.hello();
  3 mod.hello();
debug> setBreakpoint('mod.js', 22)
Warning: script 'mod.js' was not loaded yet.
debug> c
break in mod.js:22
 20 // USE OR OTHER DEALINGS IN THE SOFTWARE.
 21
>22 exports.hello = function() {
 23   return 'hello from module';
 24 };
debug>
```

It is also possible to set a conditional breakpoint that only breaks when a
given expression evaluates to `true`:

```console
$ node inspect main.js
< Debugger listening on ws://127.0.0.1:9229/ce24daa8-3816-44d4-b8ab-8273c8a66d35
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
Break on start in main.js:7
  5 }
  6
> 7 addOne(10);
  8 addOne(-1);
  9
debug> setBreakpoint('main.js', 4, 'num < 0')
  1 'use strict';
  2
  3 function addOne(num) {
> 4   return num + 1;
  5 }
  6
  7 addOne(10);
  8 addOne(-1);
  9
debug> cont
break in main.js:4
  2
  3 function addOne(num) {
> 4   return num + 1;
  5 }
  6
debug> exec('num')
-1
debug>
```

### Information

* `backtrace`, `bt`: Print backtrace of current execution frame
* `list(5)`: List scripts source code with 5 line context (5 lines before and
  after)
* `watch(expr)`: Add expression to watch list
* `unwatch(expr)`: Remove expression from watch list
* `unwatch(index)`: Remove expression at specific index from watch list
* `watchers`: List all watchers and their values (automatically listed on each
  breakpoint)
* `repl`: Open debugger's repl for evaluation in debugging script's context
* `exec expr`, `p expr`: Execute an expression in debugging script's context and
  print its value
* `profile`: Start CPU profiling session
* `profileEnd`: Stop current CPU profiling session
* `profiles`: List all completed CPU profiling sessions
* `profiles[n].save(filepath = 'node.cpuprofile')`: Save CPU profiling session
  to disk as JSON
* `takeHeapSnapshot(filepath = 'node.heapsnapshot')`: Take a heap snapshot
  and save to disk as JSON

### Execution control

* `run`
  * Run script
* `restart`
  * Restart script
* `kill`
  * Kill script

### Various

* `scripts`
  * List ALL loaded scripts
* `version`
  * Display V8's version

## Advanced usage

### V8 inspector integration for Node.js

V8 Inspector integration allows attaching Chrome DevTools to Node.js
instances for debugging and profiling. It uses the
[Chrome DevTools Protocol][].

V8 Inspector can be enabled by passing the `--inspect` flag when starting a
Node.js application. It is also possible to supply a custom port with that flag,
e.g. `--inspect=9222` will accept DevTools connections on port 9222.

Using the `--inspect` flag will execute the code immediately before debugger is connected.
This means that the code will start running before you can start debugging, which might
not be ideal if you want to debug from the very beginning.

In such cases, you have two alternatives:

1. `--inspect-wait` flag: This flag will wait for debugger to be attached before executing the code.
   This allows you to start debugging right from the beginning of the execution.
2. `--inspect-brk` flag: Unlike `--inspect`, this flag will break on the first line of the code
   as soon as debugger is attached. This is useful when you want to debug the code step by step
   from the very beginning, without any code execution prior to debugging.

So, when deciding between `--inspect`, `--inspect-wait`, and `--inspect-brk`, consider whether you want
the code to start executing immediately, wait for debugger to be attached before execution,
or break on the first line for step-by-step debugging.

```console
$ node --inspect index.js
Debugger listening on ws://127.0.0.1:9229/dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
For help, see: https://nodejs.org/en/docs/inspector
```

(In the example above, the UUID dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
at the end of the URL is generated on the fly, it varies in different
debugging sessions.)

If the Chrome browser is older than 66.0.3345.0,
use `inspector.html` instead of `js_app.html` in the above URL.

Chrome DevTools doesn't support debugging [worker threads][] yet.
[ndb][] can be used to debug them.

[Chrome DevTools Protocol]: https://chromedevtools.github.io/devtools-protocol/
[`debugger`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger
[ndb]: https://github.com/GoogleChromeLabs/ndb/
[worker threads]: worker_threads.md
