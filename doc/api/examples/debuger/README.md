# Goal
* Node.js debugger client
  * comprehend
  * command references

# How to run?
* `node myScript.js`
  * ❌NOT stop | breakpoints ❌
* `node inspect myScript.js`
  * open the debugger client | FIRST line
* `node inspect myScriptWithoutDebugger.js`
  * ALTHOUGH NO `debugger` -> open the debugger client | FIRST line
* `NODE_INSPECT_RESUME_ON_START=1 node inspect myScript.js`
  * open the debugger client | FIRST breakpoint
