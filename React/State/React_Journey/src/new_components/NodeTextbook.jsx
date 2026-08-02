import { useState, useCallback } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const BOOK = [
  {
    id: 1,
    title: "Chapter 1: Node.js का परिचय",
    sub: "Introduction, Architecture & Setup",
    sections: [
      {
        head: "📖 1.1 Node.js क्या है?",
        theory: (
          <>
            <p>
              <strong>Node.js</strong> एक{" "}
              <em
                style={{
                  color: "#16a34a",
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
              >
                open-source, cross-platform JavaScript runtime environment
              </em>{" "}
              है जो browser के बाहर JavaScript run करने देता है। इसे{" "}
              <strong>Ryan Dahl</strong> ने 2009 में बनाया।
            </p>
            <p>
              Node.js <strong>Google V8 Engine</strong> पर built है — वही engine
              जो Chrome में JS run करता है।
            </p>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Browser JS</th>
                  <th>Node.js</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Environment</td>
                  <td>Browser</td>
                  <td>Server/Terminal</td>
                </tr>
                <tr>
                  <td>DOM Access</td>
                  <td>✅ हाँ</td>
                  <td>❌ नहीं</td>
                </tr>
                <tr>
                  <td>File System</td>
                  <td>❌ नहीं</td>
                  <td>✅ हाँ</td>
                </tr>
                <tr>
                  <td>HTTP Server</td>
                  <td>❌ नहीं</td>
                  <td>✅ हाँ</td>
                </tr>
                <tr>
                  <td>Global Object</td>
                  <td>window</td>
                  <td>global</td>
                </tr>
              </tbody>
            </table>
            <div className="alert a-info">
              <strong>💡 Key Point:</strong> Node.js JavaScript की सभी features
              use करता है plus server-side capabilities जैसे file system,
              networking, databases।
            </div>
          </>
        ),
        code: `// Node.js version check (Terminal में):
// node --version   →  v20.11.0
// npm --version    →  10.2.4

// पहला Node.js Program
console.log("Hello from Node.js!");

// Browser JS vs Node.js:
console.log(typeof window);   // undefined — Node में नहीं होता
console.log(typeof global);   // object   — Node का global object
console.log(typeof process);  // object   — Node का process object

// Process information
console.log("Node Version :", process.version);
console.log("OS Platform  :", process.platform);
console.log("Current Dir  :", process.cwd());
console.log("Process ID   :", process.pid);

// Command line arguments
// node app.js hello world
console.log(process.argv);
// [ 'node', '/path/app.js', 'hello', 'world' ]`,
        exps: [
          {
            ln: "6",
            code: "console.log('Hello from Node.js!')",
            desc: "Node.js में console.log() browser जैसा ही काम करता है, लेकिन output terminal में दिखता है, browser में नहीं।",
            reason:
              "WHY: Node में कोई browser/DOM नहीं होता। सारा output terminal/console में आता है।",
          },
          {
            ln: "9",
            code: "typeof window // undefined",
            desc: "window object browser का global object है। Node.js में browser नहीं होता इसलिए window undefined है।",
            reason:
              "WHY: Node.js environment में DOM, window, document जैसे browser APIs exist नहीं करते।",
          },
          {
            ln: "10",
            code: "typeof global // object",
            desc: "global Node.js का global object है — browser के window की जगह। console, process सब यहाँ होते हैं।",
            reason:
              "WHY: Global variables और functions global object पर होते हैं।",
          },
          {
            ln: "11",
            code: "typeof process // object",
            desc: "process Node.js का special built-in object है जो current running process की information देता है।",
            reason:
              "WHY: Version check, environment variables, arguments, OS info सब process से मिलते हैं।",
          },
          {
            ln: "14",
            code: "process.version",
            desc: "Currently running Node.js का version string return करता है जैसे 'v20.11.0'।",
            reason:
              "WHY: Version-specific features conditionally use करने के लिए।",
          },
          {
            ln: "15",
            code: "process.platform",
            desc: "Operating system बताता है: 'linux', 'win32', 'darwin' (Mac)।",
            reason:
              "WHY: Platform-specific code लिखने के लिए — file paths, shell commands OS पर depend करते हैं।",
          },
          {
            ln: "16",
            code: "process.cwd()",
            desc: "Current Working Directory — जिस folder से node command run हुई उसका path।",
            reason: "WHY: Relative file paths resolve करने के लिए।",
          },
          {
            ln: "17",
            code: "process.pid",
            desc: "Process ID — OS द्वारा assign किया गया unique number।",
            reason: "WHY: Process monitoring, logging, debugging में useful।",
          },
          {
            ln: "20",
            code: "process.argv",
            desc: "Command line arguments का array। [0]=node path, [1]=script path, [2] onwards = user args।",
            reason:
              "WHY: CLI tools बनाने के लिए। User से command line पर input लेना।",
          },
        ],
        output: `Hello from Node.js!
undefined
object
object
Node Version : v20.11.0
OS Platform  : linux
Current Dir  : /home/user/myproject
Process ID   : 12345
[ '/usr/bin/node', '/home/user/myproject/app.js', 'hello', 'world' ]`,
        diag: `📊 Node.js Architecture:

┌──────────────────────────────────────────┐
│          Your JavaScript Code            │
└─────────────────┬────────────────────────┘
                  │
┌─────────────────▼────────────────────────┐
│            Node.js APIs                  │
│   (fs, http, path, crypto, events...)    │
└──────────┬──────────────────┬────────────┘
           │                  │
  ┌────────▼────────┐  ┌──────▼──────────┐
  │   V8 Engine     │  │    libuv         │
  │ (JS Execute)    │  │ (Event Loop,     │
  │                 │  │  Async I/O,      │
  │                 │  │  Thread Pool)    │
  └─────────────────┘  └─────────────────┘
           │                  │
┌──────────▼──────────────────▼────────────┐
│       Operating System                   │
│  (Linux / Windows / macOS)               │
└──────────────────────────────────────────┘`,
        why: (
          <>
            <p>
              <strong>Node.js क्यों सीखें?</strong>
            </p>
            <ul>
              <li>
                <strong>Same Language:</strong> Frontend और Backend दोनों
                JavaScript
              </li>
              <li>
                <strong>Fast:</strong> V8 Engine + Non-blocking I/O
              </li>
              <li>
                <strong>NPM Ecosystem:</strong> 2 million+ packages
              </li>
              <li>
                <strong>Real-time Apps:</strong> Chat apps, live notifications
                के लिए perfect
              </li>
              <li>
                <strong>Jobs:</strong> Netflix, LinkedIn, Uber use करते हैं
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "Node.js क्या है? Browser JavaScript से कैसे अलग है?",
            a: "Node.js एक JavaScript runtime है जो V8 engine use करता है server-side code run करने के लिए। Browser JS में DOM/window होता है, Node.js में नहीं। Node.js में file system, HTTP servers, process access होता है।",
          },
          {
            q: "Node.js single-threaded है फिर भी fast कैसे है?",
            a: "Node.js का Event Loop और libuv का non-blocking async I/O इसे fast बनाते हैं। Heavy I/O operations background thread pool में होते हैं। Main thread block नहीं होता।",
          },
          {
            q: "process.argv क्या है?",
            a: "Command line arguments का array। process.argv[0]=node, process.argv[1]=script path, process.argv[2] onwards user arguments। CLI tools बनाने में use होता है।",
          },
        ],
      },
      {
        head: "⚡ 1.2 Event Loop — Node.js का दिल",
        theory: (
          <>
            <p>
              Event Loop वह mechanism है जो Node.js को{" "}
              <strong>non-blocking</strong> बनाता है। यह single-thread होते हुए
              भी thousands of concurrent requests handle करता है।
            </p>
            <p>
              <strong>Execution Order:</strong>
            </p>
            <ol>
              <li>Synchronous code (Call Stack) — सबसे पहले</li>
              <li>process.nextTick() — Microtask, highest priority</li>
              <li>Promise.then() — Microtask</li>
              <li>setTimeout() / setInterval() — Timer phase</li>
              <li>setImmediate() — Check phase</li>
            </ol>
            <div className="alert a-warn">
              <strong>⚠️ याद रखो:</strong> Microtasks (nextTick, Promise) हर
              phase के बाद run होते हैं — setTimeout से पहले!
            </div>
          </>
        ),
        code: `// ══ Event Loop Order Demo ══

console.log("1. Start — Sync Code");

setTimeout(() => {
  console.log("5. setTimeout(0ms) — Timer Phase");
}, 0);

setImmediate(() => {
  console.log("6. setImmediate — Check Phase");
});

Promise.resolve().then(() => {
  console.log("3. Promise.then — Microtask");
});

process.nextTick(() => {
  console.log("2. process.nextTick — Microtask (Priority!)");
});

console.log("4. End — Sync Code");


// ══ Blocking vs Non-Blocking ══
const fs = require('fs');

// ❌ BLOCKING — Server रुक जाता है!
const dataSync = fs.readFileSync('file.txt', 'utf8');
console.log("Sync (Blocking):", dataSync);

// ✅ NON-BLOCKING — Server नहीं रुकता
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) { console.error(err.message); return; }
  console.log("Async (Non-Blocking):", data);
});

console.log("यह line async read का wait नहीं करती!");`,
        exps: [
          {
            ln: "3",
            code: "console.log('1. Start')",
            desc: "Synchronous code Call Stack में directly जाता है और सबसे पहले execute होता है।",
            reason:
              "WHY: JS single-threaded है। Sync code को Event Loop की ज़रूरत नहीं।",
          },
          {
            ln: "5-7",
            code: "setTimeout(() => {...}, 0)",
            desc: "0ms delay होने पर भी setTimeout callback तुरंत नहीं चलता — Timer phase में queue होता है।",
            reason: "WHY: Sync code और microtasks के बाद ही run होगा।",
          },
          {
            ln: "13-15",
            code: "Promise.resolve().then(...)",
            desc: "Promises Microtask queue में जाते हैं — हर Event Loop phase के बाद execute होते हैं।",
            reason:
              "WHY: Microtasks को priority मिलती है — setTimeout/setImmediate से पहले।",
          },
          {
            ln: "17-19",
            code: "process.nextTick(...)",
            desc: "nextTick सबसे high priority Microtask है — Promise से भी पहले run होता है।",
            reason:
              "WHY: Critical operations जो immediately (current sync के बाद) होनी चाहिए।",
          },
          {
            ln: "26",
            code: "fs.readFileSync('file.txt', 'utf8')",
            desc: "Synchronous file read — पूरा Event Loop block हो जाता है।",
            reason:
              "WHY: Server code में NEVER use करें — सभी incoming requests block हो जाएंगी।",
          },
          {
            ln: "31",
            code: "fs.readFile(path, enc, callback)",
            desc: "Asynchronous file read — callback को Event Loop बाद में handle करता है।",
            reason:
              "WHY: Server में यही use करें। File read होते समय server other requests handle करता रहता है।",
          },
        ],
        output: `1. Start — Sync Code
4. End — Sync Code
2. process.nextTick — Microtask (Priority!)
3. Promise.then — Microtask
5. setTimeout(0ms) — Timer Phase
6. setImmediate — Check Phase
यह line async read का wait नहीं करती!
Async (Non-Blocking): [file content here]`,
        diag: `📊 Event Loop Execution Order:

┌──────────────────────────────────────┐
│  Call Stack (Sync Code runs here)    │
│  console.log() — immediate           │
└──────────────────┬───────────────────┘
                   │ Stack empty होने पर
                   ▼
┌──────────────────────────────────────┐
│  Microtask Queue (PRIORITY)          │
│  1. process.nextTick() callbacks     │
│  2. Promise.then() callbacks         │
└──────────────────┬───────────────────┘
                   ▼
┌──────────────────────────────────────┐
│  Event Loop Phases (libuv)           │
│  ① Timers   → setTimeout/setInterval │
│  ② I/O      → File/Network callbacks │
│  ③ Poll     → Wait for new I/O       │
│  ④ Check    → setImmediate()         │
│  ⑤ Close    → Cleanup callbacks      │
└──────────────────────────────────────┘`,
        why: (
          <>
            <p>
              <strong>Event Loop क्यों समझना ज़रूरी है?</strong>
            </p>
            <ul>
              <li>
                <strong>Performance:</strong> Blocking code server को slow करता
                है
              </li>
              <li>
                <strong>Bugs:</strong> Async code के unexpected order समझने के
                लिए
              </li>
              <li>
                <strong>Interview:</strong> Node.js का सबसे popular interview
                topic
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "Event Loop क्या है और कैसे काम करता है?",
            a: "Event Loop वह mechanism है जो JavaScript को asynchronous बनाता है। Order: Sync code → nextTick → Promises → setTimeout → setImmediate।",
          },
          {
            q: "setTimeout(fn, 0) और setImmediate में क्या difference है?",
            a: "setTimeout(fn,0) Timer phase में run होता है। setImmediate Check phase में I/O के बाद। I/O callback के अंदर setImmediate हमेशा पहले run होगा।",
          },
          {
            q: "Blocking और Non-Blocking code में क्या difference है?",
            a: "Blocking code Event Loop को block करता है। Non-blocking callback/promise use करता है। Server code में हमेशा non-blocking use करें।",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Chapter 2: Modules & NPM",
    sub: "CommonJS, ES Modules, Package Management",
    sections: [
      {
        head: "📦 2.1 CommonJS Modules — require() / exports",
        theory: (
          <>
            <p>
              Node.js में code को <strong>modules</strong> में organize करते
              हैं। हर file अपना अलग module होता है।
            </p>
            <ul>
              <li>
                <code>module.exports</code> — दूसरों को export करने के लिए
              </li>
              <li>
                <code>require()</code> — किसी module को import करने के लिए
              </li>
            </ul>
            <p>
              हर file में automatically available: <code>__filename</code>,{" "}
              <code>__dirname</code>, <code>module</code>, <code>exports</code>,{" "}
              <code>require</code>
            </p>
          </>
        ),
        code: `// ─── FILE: mathUtils.js ───

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Zero से divide नहीं कर सकते!");
  return a / b;
}
const PI = 3.14159;

module.exports = { add, multiply, divide, PI };

// ─── FILE: app.js ───
const math = require('./mathUtils');

console.log(math.add(10, 5));        // 15
console.log(math.multiply(4, 3));    // 12
console.log(math.PI);                // 3.14159

const { add, divide } = require('./mathUtils');
console.log(add(20, 30));            // 50

const path = require('path');
const os   = require('os');

console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));    // app.js
console.log(path.extname(__filename));     // .js
console.log(path.join(__dirname, 'data', 'file.txt'));
console.log(os.hostname());
console.log(os.platform());
console.log(os.cpus().length);`,
        exps: [
          {
            ln: "3-5",
            code: "function add(a, b) { return a + b; }",
            desc: "Normal function define किया। अभी यह private है — इस file में ही accessible है।",
            reason:
              "WHY: Module का अपना scope होता है। Export बिना दूसरी files नहीं देख सकतीं।",
          },
          {
            ln: "11",
            code: "module.exports = { add, multiply, divide, PI }",
            desc: "module.exports को object assign — यही दूसरों को मिलेगा जब require() करेंगे।",
            reason: "WHY: Encapsulation — सिर्फ वही expose करो जो ज़रूरी है।",
          },
          {
            ln: "14",
            code: "const math = require('./mathUtils')",
            desc: "'./' relative path से same directory में mathUtils.js file import होती है।",
            reason:
              "WHY: './' मतलब current directory। बिना './' के Node built-in/npm module ढूंढेगा।",
          },
          {
            ln: "20",
            code: "const { add, divide } = require('./mathUtils')",
            desc: "Destructuring से सिर्फ ज़रूरी functions import करते हैं।",
            reason: "WHY: Cleaner code। Unused functions import नहीं होतीं।",
          },
          {
            ln: "22",
            code: "const path = require('path')",
            desc: "path Node.js का built-in core module है — npm install नहीं करना।",
            reason: "WHY: File paths को OS-safe बनाने के लिए।",
          },
          {
            ln: "28",
            code: "path.join(__dirname, 'data', 'file.txt')",
            desc: "Multiple path parts को OS-correct separator से join करता है।",
            reason:
              "WHY: हमेशा path.join use करो — manually '/' से OS issues होते हैं।",
          },
        ],
        output: `15\n12\n3.14159\n50\n/home/user/project/app.js\n/home/user/project\napp.js\n.js\n/home/user/project/data/file.txt\nmy-computer\nlinux\n4`,
        diag: `📊 Module System Flow:

mathUtils.js              app.js
┌─────────────────┐      ┌──────────────────────┐
│ function add()  │      │                      │
│ function mul()  │─────►│ require('./mathUtils')│
│ const PI        │      │                      │
│ module.exports  │      │ math.add(10, 5) → 15 │
│ = {add,mul,PI}  │      │ math.PI → 3.14159    │
└─────────────────┘      └──────────────────────┘

Paths:
'./utils'  → relative (same/sub folder)
'path'     → built-in Node module
'express'  → npm package (node_modules)`,
        why: (
          <>
            <p>
              <strong>Modules क्यों use करते हैं?</strong>
            </p>
            <ul>
              <li>
                <strong>Organization:</strong> बड़े codebase को manageable files
                में तोड़ना
              </li>
              <li>
                <strong>Reusability:</strong> एक बार लिखो, कहीं भी use करो
              </li>
              <li>
                <strong>Encapsulation:</strong> Private variables leak नहीं होते
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "require() कैसे काम करता है?",
            a: "require() पहले cache check करता है। नहीं मिला तो: 1) Module ढूंढता है, 2) File load करता है, 3) Code execute करता है, 4) module.exports return करता है, 5) Cache में save करता है।",
          },
          {
            q: "module.exports और exports में क्या difference है?",
            a: "exports module.exports का reference है। exports.fn = fn करना safe है। लेकिन exports = {} direct assignment काम नहीं करती। हमेशा module.exports = {} use करें।",
          },
          {
            q: "__dirname और process.cwd() में क्या difference है?",
            a: "__dirname वह directory है जहाँ current file है — हमेशा same रहता है। process.cwd() वह directory है जहाँ से node command run हुई।",
          },
        ],
      },
      {
        head: "📮 2.2 NPM — Node Package Manager",
        theory: (
          <>
            <p>
              <strong>NPM</strong> (Node Package Manager) दुनिया का सबसे बड़ा
              software registry है — 2 million+ packages।
            </p>
            <p>
              <strong>package.json</strong> आपके project का identity card है:
              name, version, dependencies, devDependencies, scripts।
            </p>
            <div className="alert a-warn">
              <strong>⚠️ .gitignore में node_modules/ add करें!</strong> यह बहुत
              बड़ा folder होता है। npm install से कभी भी दोबारा बनता है।
            </div>
          </>
        ),
        code: `// ══ Terminal Commands ══
// npm init -y              ← Default package.json बनाओ
// npm install express      ← dependencies में add
// npm install nodemon --save-dev  ← devDependencies में
// npm install -g nodemon   ← Global install
// npm uninstall express    ← Remove
// npm install              ← सब install (clone के बाद)

// ══ package.json ══
/*
{
  "name": "my-node-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev":   "nodemon index.js",
    "test":  "jest"
  },
  "dependencies": {
    "express":  "^4.18.2",
    "mongoose": "^7.6.3"
  },
  "devDependencies": {
    "nodemon": "^3.0.2",
    "jest":    "^29.7.0"
  }
}
*/

// ══ app.js ══
const express = require('express');
const app  = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express + NPM!</h1>');
});

app.listen(PORT, () => {
  console.log('Server on http://localhost:' + PORT);
});`,
        exps: [
          {
            ln: "2",
            code: "npm init -y",
            desc: "npm init package.json create करता है। -y flag सभी questions का default answer देता है।",
            reason: "WHY: package.json project का configuration file है।",
          },
          {
            ln: "3",
            code: "npm install express",
            desc: "Express npm registry से download होकर node_modules में save होता है।",
            reason:
              "WHY: अब require('express') काम करेगा। Version automatically track होती है।",
          },
          {
            ln: "4",
            code: "npm install nodemon --save-dev",
            desc: "nodemon development tool है — --save-dev से devDependencies में जाता है।",
            reason: "WHY: Production server पर nodemon नहीं चाहिए।",
          },
          {
            ln: "14",
            code: '"start": "node index.js"',
            desc: "npm start यह script run करेगी।",
            reason: "WHY: Scripts से complex commands याद नहीं रखने पड़ते।",
          },
          {
            ln: "20",
            code: '"express": "^4.18.2"',
            desc: "^ (caret) = 4.x.x में latest compatible version। Breaking changes नहीं आते।",
            reason: "WHY: Minor updates और patches automatically मिलते हैं।",
          },
        ],
        output: `// npm init -y:\nWrote to /home/user/project/package.json\n\n// npm install express:\nadded 57 packages in 2.3s\n\n// npm run dev:\n[nodemon] starting 'node index.js'\nServer on http://localhost:3000`,
        diag: `📊 NPM Install Flow:

npm install express
        │
        ▼ npmjs.com से Download
  node_modules/express/
        │
        ▼ Update
  package.json → "express": "^4.18.2"
        │
        ▼ Lock exact version
  package-lock.json

Version Symbols:
^4.18.2 → 4.x.x (minor+patch updates)
~4.18.2 → 4.18.x (only patch updates)
4.18.2  → exact version only`,
        why: (
          <>
            <p>
              <strong>NPM क्यों essential है?</strong>
            </p>
            <ul>
              <li>
                <strong>Don't Reinvent:</strong> Authentication, validation सब
                packages से
              </li>
              <li>
                <strong>Versioning:</strong> Exact versions lock — team में सब
                same code
              </li>
              <li>
                <strong>Scripts:</strong> Build, test, deploy एक command से
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "dependencies और devDependencies में क्या difference है?",
            a: "dependencies production में runtime पर चाहिए (express, mongoose)। devDependencies सिर्फ development में (nodemon, jest)। npm install --production से सिर्फ dependencies install होती हैं।",
          },
          {
            q: "package-lock.json का क्या काम है?",
            a: "Exact versions lock करता है। Different machines पर same versions install होती हैं। Git में commit करना चाहिए।",
          },
          {
            q: "npm install और npm ci में क्या difference है?",
            a: "npm install package.json से install करता है। npm ci package-lock.json से exactly same versions — CI/CD pipelines के लिए।",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Chapter 3: File System (fs) Module",
    sub: "Read, Write, Update, Delete Files",
    sections: [
      {
        head: "📁 3.1 fs Module — Files के साथ काम करना",
        theory: (
          <>
            <p>
              Node.js का <strong>fs (File System)</strong> module files और
              directories के साथ काम करने देता है। Built-in module है।
            </p>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Function</th>
                  <th>कब use करें</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Synchronous</td>
                  <td>readFileSync()</td>
                  <td>CLI tools, startup only</td>
                </tr>
                <tr>
                  <td>Callback Async</td>
                  <td>readFile()</td>
                  <td>Old style servers</td>
                </tr>
                <tr>
                  <td>Promise ✅</td>
                  <td>fs.promises.readFile()</td>
                  <td>Modern servers — Best!</td>
                </tr>
              </tbody>
            </table>
            <div className="alert a-bad">
              <strong>🚫 Server में readFileSync use मत करो!</strong> Event Loop
              block होता है!
            </div>
          </>
        ),
        code: `const fs         = require('fs');
const fsPromises = require('fs').promises;
const path       = require('path');

// ══ 1. FILE READ ══
// 1a. Synchronous — BLOCKING (servers में avoid!)
const data = fs.readFileSync('hello.txt', 'utf8');
console.log("Sync Read:", data);

// 1b. Callback Async
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) { console.error("Error:", err.message); return; }
  console.log("Callback Read:", data);
});

// 1c. Promise + async/await — BEST PRACTICE
async function readFile() {
  try {
    const content = await fsPromises.readFile('hello.txt', 'utf8');
    console.log("Promise Read:", content);
  } catch (err) {
    console.error("Read Error:", err.message);
  }
}
readFile();

// ══ 2. FILE WRITE ══
fs.writeFile('output.txt', 'Hello Node.js!', 'utf8', (err) => {
  if (err) { console.error(err); return; }
  console.log("File written!");
});

fs.appendFile('log.txt', new Date() + ': App started\n', (err) => {
  if (err) { console.error(err); return; }
  console.log("Log appended!");
});

// ══ 3. FILE DELETE ══
fs.unlink('temp.txt', (err) => {
  if (err) { console.error("Delete Error:", err.message); return; }
  console.log("File deleted!");
});

// ══ 4. DIRECTORIES ══
fs.mkdir('uploads', { recursive: true }, (err) => {
  if (err && err.code !== 'EEXIST') return;
  console.log("Folder created!");
});

fs.readdir('./', (err, files) => {
  if (err) { console.error(err); return; }
  console.log("Files:", files);
});

fs.stat('hello.txt', (err, stats) => {
  if (err) { console.error(err); return; }
  console.log("Size:", stats.size, "bytes");
  console.log("Is File?", stats.isFile());
  console.log("Modified:", stats.mtime);
});`,
        exps: [
          {
            ln: "1",
            code: "const fs = require('fs')",
            desc: "fs Node.js का built-in module है। require() से import करना ज़रूरी है।",
            reason:
              "WHY: Built-in होने के बावजूद automatically available नहीं होता।",
          },
          {
            ln: "7",
            code: "fs.readFileSync('hello.txt', 'utf8')",
            desc: "Synchronous file read। 'utf8' से binary Buffer को text string में convert करता है।",
            reason: "WHY: बिना 'utf8' के raw Buffer मिलता है।",
          },
          {
            ln: "11-14",
            code: "fs.readFile(path, enc, (err, data) => {})",
            desc: "Async callback pattern। Error-first: पहले error check करो, फिर data।",
            reason: "WHY: Error-first callback Node.js convention है।",
          },
          {
            ln: "19",
            code: "await fsPromises.readFile('hello.txt', 'utf8')",
            desc: "Modern async/await। try-catch से errors handle होती हैं cleanly।",
            reason: "WHY: Callback nesting (callback hell) से बचने के लिए।",
          },
          {
            ln: "27",
            code: "fs.writeFile('output.txt', content, enc, cb)",
            desc: "File create करता है या existing content को पूरी तरह replace करता है।",
            reason:
              "WHY: Fresh content लिखने के लिए। Careful — पुराना data permanently जाएगा!",
          },
          {
            ln: "32",
            code: "fs.appendFile('log.txt', content, cb)",
            desc: "File के end में content add करता है। File नहीं है तो create करता है।",
            reason: "WHY: Logs append करने के लिए।",
          },
          {
            ln: "38",
            code: "fs.unlink('temp.txt', cb)",
            desc: "File permanently delete करता है। Recycle bin नहीं जाती!",
            reason: "WHY: Temp files cleanup के लिए।",
          },
          {
            ln: "43",
            code: "fs.mkdir('uploads', { recursive: true }, cb)",
            desc: "Directory create करता है। recursive:true — nested folders बना सकता है।",
            reason:
              "WHY: बिना recursive:true के parent folder नहीं होगा तो error।",
          },
        ],
        output: `Sync Read: Hello from file!\nPromise Read: Hello from file!\nFile written!\nLog appended!\nFile deleted!\nFolder created!\nFiles: ['app.js', 'hello.txt', 'output.txt', 'uploads']\nSize: 42 bytes\nIs File? true\nModified: 2024-01-15T10:30:00.000Z\nCallback Read: Hello from file!`,
        diag: `📊 fs Operations:

READ:    hello.txt ──readFile()──► String
WRITE:   String ──writeFile()──► output.txt (replaces)
APPEND:  String ──appendFile()──► log.txt (adds to end)
DELETE:  old.txt ──unlink()──► ❌ Permanently Gone

Performance:
  readFileSync  │ Event Loop BLOCKED  🔴
  readFile      │ Event Loop FREE     ✅
  fsPromises    │ Event Loop FREE     ✅`,
        why: (
          <>
            <p>
              <strong>fs module क्यों important है?</strong>
            </p>
            <ul>
              <li>
                <strong>Logs:</strong> Application logs files में save करना
              </li>
              <li>
                <strong>Config:</strong> JSON config files read करना
              </li>
              <li>
                <strong>Upload:</strong> User-uploaded files handle करना
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "Server में readFileSync क्यों नहीं use करते?",
            a: "readFileSync Event Loop को block करती है। File read होने तक कोई और request process नहीं होती। हमेशा async versions use करें।",
          },
          {
            q: "fs.writeFile और fs.appendFile में क्या difference है?",
            a: "writeFile पूरी file replace करता है। appendFile end में add करता है। Logs के लिए appendFile, fresh content के लिए writeFile।",
          },
          {
            q: "Buffer और String में क्या difference है?",
            a: "Buffer raw binary data है। readFile बिना encoding के Buffer देता है। 'utf8' encoding से Buffer automatically String में convert होता है।",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Chapter 4: HTTP Module & Server",
    sub: "Server बनाना, Routing, Request & Response",
    sections: [
      {
        head: "🌐 4.1 HTTP Server बनाना",
        theory: (
          <>
            <p>
              Node.js का <strong>http</strong> module built-in web server बनाने
              देता है।
            </p>
            <table>
              <thead>
                <tr>
                  <th>Status Code</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>200 OK</td>
                  <td>Success</td>
                </tr>
                <tr>
                  <td>201 Created</td>
                  <td>Resource create हुआ</td>
                </tr>
                <tr>
                  <td>400 Bad Request</td>
                  <td>Client की गलती</td>
                </tr>
                <tr>
                  <td>401 Unauthorized</td>
                  <td>Login चाहिए</td>
                </tr>
                <tr>
                  <td>404 Not Found</td>
                  <td>Page नहीं मिला</td>
                </tr>
                <tr>
                  <td>500 Server Error</td>
                  <td>Server की गलती</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
        code: `const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method + ' ' + req.url);

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  }

  else if (req.url === '/api/users' && req.method === 'GET') {
    const users = [
      { id: 1, name: 'Rahul', city: 'Mumbai' },
      { id: 2, name: 'Priya', city: 'Delhi'  }
    ];
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(users));
  }

  else if (req.url === '/api/users' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const user = JSON.parse(body);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Created!', user }));
    });
  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found', url: req.url }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('Server: http://localhost:' + PORT);
});`,
        exps: [
          {
            ln: "3",
            code: "http.createServer((req, res) => {...})",
            desc: "Server create करता है। हर request आने पर callback function call होगा।",
            reason: "WHY: req में आया data, res से response भेजते हैं।",
          },
          {
            ln: "6",
            code: "if (req.url === '/' && req.method === 'GET')",
            desc: "URL और Method दोनों check करके routing करते हैं।",
            reason:
              "WHY: Same URL पर GET और POST different operations हो सकते हैं।",
          },
          {
            ln: "7",
            code: "res.writeHead(200, { 'Content-Type': 'text/html' })",
            desc: "200=OK status। Content-Type header browser को बताता है data किस format में है।",
            reason:
              "WHY: Header send होना ज़रूरी है वरना browser data properly parse नहीं करेगा।",
          },
          {
            ln: "8",
            code: "res.end('<h1>Home Page</h1>')",
            desc: "Response body send करके connection close करता है।",
            reason:
              "WHY: बिना end() के browser wait करता रहेगा — timeout होगा।",
          },
          {
            ln: "17",
            code: "'Access-Control-Allow-Origin': '*'",
            desc: "CORS header — दूसरे domains से API access allow करता है।",
            reason: "WHY: Frontend अलग domain पर हो तो CORS error आएगा।",
          },
          {
            ln: "23-24",
            code: "req.on('data', chunk => { body += chunk })",
            desc: "POST body streaming में chunks में आती है।",
            reason: "WHY: बड़े data को efficiently handle करने के लिए।",
          },
          {
            ln: "25",
            code: "req.on('end', () => { JSON.parse(body) })",
            desc: "end event जब fire हो सभी chunks आ चुके हैं — अब parse करो।",
            reason:
              "WHY: पहले end का wait करो — बीच में parse करने पर incomplete data।",
          },
        ],
        output: `Server: http://localhost:3000\nGET /\nGET /api/users\n\n// Response:\n[{"id":1,"name":"Rahul","city":"Mumbai"},{"id":2,"name":"Priya","city":"Delhi"}]`,
        diag: `📊 HTTP Request-Response:

Browser                    Node.js Server
  │  GET /api/users            │
  │ ──────────────────────────►│
  │                            │ URL + Method check
  │                            │ JSON.stringify
  │  200 OK + JSON             │
  │ ◄──────────────────────────│

POST Flow:
  POST + Body chunks ──► req.on('data')
                    ──► req.on('end') → parse
                    ◄── 201 Created`,
        why: (
          <>
            <p>
              <strong>HTTP module क्यों समझें?</strong>
            </p>
            <ul>
              <li>
                <strong>Foundation:</strong> Express, Fastify सब http module के
                ऊपर बने हैं
              </li>
              <li>
                <strong>Interview:</strong> "Express बिना server बनाओ" common
                question
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "HTTP Status Codes कौन से important हैं?",
            a: "200 OK, 201 Created, 204 No Content, 301 Redirect, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error।",
          },
          {
            q: "POST request body कैसे receive करते हैं?",
            a: "req.on('data') से chunks collect करो, req.on('end') पर complete body मिलती है। फिर JSON.parse() करो।",
          },
          {
            q: "CORS क्या है और कैसे fix करते हैं?",
            a: "Browser security feature। Different origin से API call को browser block करता है। Fix: 'Access-Control-Allow-Origin' header add करो।",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Chapter 5: Express.js Framework",
    sub: "Routes, Middleware, REST API Design",
    sections: [
      {
        head: "🚀 5.1 Express.js — The Web Framework",
        theory: (
          <>
            <p>
              <strong>Express.js</strong> Node.js का सबसे popular web framework
              है। Install: <code>npm install express</code>
            </p>
            <div className="alert a-ok">
              <strong>✅ REST API Methods:</strong> GET (read), POST (create),
              PUT (update), DELETE (delete)
            </div>
          </>
        ),
        code: `const express = require('express');
const app = express();

// ══ MIDDLEWARE ══
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Custom Logger Middleware
app.use((req, res, next) => {
  console.log('[' + new Date().toISOString() + '] ' + req.method + ' ' + req.url);
  next();  // ज़रूरी — अगले middleware/route पर जाओ
});

// ══ ROUTES ══
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express!</h1>');
});

// Query params: GET /api/users?city=Mumbai
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Rahul', city: 'Mumbai' },
    { id: 2, name: 'Priya', city: 'Delhi'  },
    { id: 3, name: 'Amit',  city: 'Mumbai' }
  ];
  const { city } = req.query;
  if (city) return res.json(users.filter(u => u.city === city));
  res.json(users);
});

// Route params: GET /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'Rahul', city: 'Mumbai' });
});

// POST — Create
app.post('/api/users', (req, res) => {
  const { name, city, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  const newUser = { id: Date.now(), name, city, email };
  res.status(201).json({ message: 'User created!', user: newUser });
});

// PUT — Update
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User ' + id + ' updated', updates: req.body });
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User ' + id + ' deleted' });
});

// ══ ERROR HANDLING ══
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(3000, () => console.log('Express: http://localhost:3000'));`,
        exps: [
          {
            ln: "1-2",
            code: "const express = require('express'); const app = express()",
            desc: "Express import करके app instance बनाते हैं।",
            reason:
              "WHY: app एक object है जो http.createServer को wrap करता है।",
          },
          {
            ln: "5",
            code: "app.use(express.json())",
            desc: "Built-in middleware जो JSON request body को parse करके req.body में रखता है।",
            reason: "WHY: बिना इसके req.body undefined होगा।",
          },
          {
            ln: "10-13",
            code: "app.use((req, res, next) => { next() })",
            desc: "Custom middleware हर request पर run होता है। next() call ज़रूरी।",
            reason:
              "WHY: Logging, authentication, rate limiting middleware में।",
          },
          {
            ln: "26",
            code: "const { city } = req.query",
            desc: "URL query parameters (?city=Mumbai) req.query object में होते हैं।",
            reason: "WHY: Filtering, searching, pagination के लिए।",
          },
          {
            ln: "31",
            code: "const { id } = req.params",
            desc: "URL route parameters (:id) req.params में होते हैं।",
            reason:
              "WHY: Specific resource access। /users/123 → req.params.id === '123'।",
          },
          {
            ln: "37",
            code: "const { name, city, email } = req.body",
            desc: "POST body का data req.body में होता है (express.json() के बाद)।",
            reason: "WHY: Client का sent data यहाँ से access करते हैं।",
          },
          {
            ln: "39",
            code: "if (!name || !email) return res.status(400)",
            desc: "Input validation — required fields check।",
            reason: "WHY: हमेशा input validate करो।",
          },
          {
            ln: "54-57",
            code: "app.use((err, req, res, next) => {...})",
            desc: "4 parameters वाला middleware error handler है।",
            reason:
              "WHY: Centralized error handling — हर route में try-catch नहीं लिखना।",
          },
        ],
        output: `Express: http://localhost:3000\n\nGET /api/users → [{...all users}]\nGET /api/users?city=Mumbai → [{Rahul},{Amit}]\nGET /api/users/1 → {id:"1",name:"Rahul"}\nPOST /api/users → {"message":"User created!",...}\nDELETE /api/users/1 → {"message":"User 1 deleted"}`,
        diag: `📊 Express Middleware Pipeline:

Request आया
      ▼
┌─────────────────────────┐
│   express.json()        │  Body parse
└───────────┬─────────────┘
            │ next()
            ▼
┌─────────────────────────┐
│   Logger Middleware     │  Log करो
└───────────┬─────────────┘
            │ next()
            ▼
┌─────────────────────────┐
│   Route Handler         │  Response भेजो
└─────────────────────────┘

REST API:
GET    /users      → List all
POST   /users      → Create new
GET    /users/:id  → Get one
PUT    /users/:id  → Update one
DELETE /users/:id  → Delete one`,
        why: (
          <>
            <p>
              <strong>Express.js क्यों use करते हैं?</strong>
            </p>
            <ul>
              <li>
                <strong>Simplicity:</strong> Raw http module से 10x कम code
              </li>
              <li>
                <strong>Industry Standard:</strong> 90% Node.js backends में
                Express है
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "Express में Middleware क्या है?",
            a: "Middleware एक function है जो (req, res, next) parameters लेता है। app.use() से register करते हैं। next() call करके आगे pass करते हैं।",
          },
          {
            q: "req.params, req.query, req.body में क्या difference है?",
            a: "req.params: URL path parameters (:id). req.query: URL query string (?key=val). req.body: Request body (POST/PUT data), express.json() middleware चाहिए।",
          },
          {
            q: "Express में error handling कैसे करते हैं?",
            a: "4 parameter middleware (err,req,res,next) error handler है। किसी route में error हो तो next(err) call करो।",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Chapter 6: Events & EventEmitter",
    sub: "Custom Events, Observer Pattern",
    sections: [
      {
        head: "🎯 6.1 EventEmitter — Event-Driven Architecture",
        theory: (
          <>
            <p>
              Node.js <strong>Event-Driven Architecture</strong> पर based है।{" "}
              <code>EventEmitter</code> class से custom events बना सकते हैं।
            </p>
            <ul>
              <li>
                <code>emit()</code> — Event fire करना
              </li>
              <li>
                <code>on()</code> — Event listen करना
              </li>
              <li>
                <code>once()</code> — सिर्फ एक बार
              </li>
              <li>
                <code>off()</code> — Listener remove करना
              </li>
            </ul>
            <div className="alert a-bad">
              <strong>🚫 'error' event special है!</strong> Listener नहीं होगा
              तो Node.js crash हो जाएगा।
            </div>
          </>
        ),
        code: `const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log('Hello, ' + name + '!');
});

emitter.emit('greet', 'Rahul');

// Once — सिर्फ एक बार
emitter.once('login', (user) => {
  console.log('First login: ' + user);
});
emitter.emit('login', 'Ram');  // ✅ Runs
emitter.emit('login', 'Ram');  // ❌ Doesn't run


// ══ Custom Class ══
class OrderSystem extends EventEmitter {
  constructor() {
    super();
    this.orders = [];
  }

  placeOrder(item, price) {
    const order = { id: Date.now(), item, price, status: 'pending' };
    this.orders.push(order);
    this.emit('order:placed', order);
    return order;
  }

  processOrder(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) {
      this.emit('error', new Error('Order not found'));
      return;
    }
    order.status = 'processing';
    this.emit('order:processing', order);
    setTimeout(() => {
      order.status = 'completed';
      this.emit('order:completed', order);
    }, 1000);
  }
}

const shop = new OrderSystem();

shop.on('order:placed',     (o) => console.log('📦 Placed:', o.item, '₹' + o.price));
shop.on('order:processing', (o) => console.log('⚙️ Processing:', o.id));
shop.on('order:completed',  (o) => console.log('✅ Done:', o.item));
shop.on('error', (err) => console.error('❌ Error:', err.message));

const order1 = shop.placeOrder('Laptop', 45000);
shop.processOrder(order1.id);`,
        exps: [
          {
            ln: "1",
            code: "const EventEmitter = require('events')",
            desc: "events Node.js का built-in module है। EventEmitter class यहाँ से आती है।",
            reason:
              "WHY: http, fs, streams सब internally EventEmitter use करते हैं।",
          },
          {
            ln: "4-6",
            code: "emitter.on('greet', (name) => {...})",
            desc: "'greet' event के लिए listener register करते हैं।",
            reason:
              "WHY: on() = subscribe। जब भी 'greet' emit होगा, यह function call होगा।",
          },
          {
            ln: "8",
            code: "emitter.emit('greet', 'Rahul')",
            desc: "'greet' event fire करते हैं।",
            reason: "WHY: emit() = publish। Decoupled architecture।",
          },
          {
            ln: "11",
            code: "emitter.once('login', ...)",
            desc: "once() सिर्फ पहली बार execute होता है। फिर automatically remove।",
            reason: "WHY: One-time events जैसे initialization के लिए perfect।",
          },
          {
            ln: "20",
            code: "class OrderSystem extends EventEmitter",
            desc: "EventEmitter extend करके custom class बनाते हैं।",
            reason: "WHY: Class में on/emit सब automatically available।",
          },
          {
            ln: "51",
            code: "shop.on('error', (err) => {...})",
            desc: "Error listener — हमेशा add करना ज़रूरी है।",
            reason:
              "WHY: बिना error listener के Node.js process crash हो जाएगा।",
          },
        ],
        output: `Hello, Rahul!\nFirst login: Ram\n📦 Placed: Laptop ₹45000\n⚙️ Processing: 1705123456789\n✅ Done: Laptop   (1 second baad)`,
        diag: `📊 EventEmitter — Observer Pattern:

       EMIT                      LISTEN
  ┌──────────┐              ┌──────────────┐
  │  Order   │ 'placed' ───►│ Email Service│
  │  System  │              └──────────────┘
  │          │ 'placed' ───►│ SMS Service  │
  │          │              └──────────────┘
  └──────────┘ 'completed'─►│ Analytics    │
                             └──────────────┘
Benefits: Loose Coupling, Extensibility`,
        why: (
          <>
            <p>
              <strong>EventEmitter क्यों use करते हैं?</strong>
            </p>
            <ul>
              <li>
                <strong>Decoupling:</strong> Components loose coupled होते हैं
              </li>
              <li>
                <strong>Node.js Core:</strong> Streams, HTTP server सब
                EventEmitter पर based
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "EventEmitter में error event special क्यों है?",
            a: "error event के लिए listener नहीं होगा तो Node.js automatically uncaught exception throw करता है और process crash हो जाता है।",
          },
          {
            q: "on() और once() में क्या difference है?",
            a: "on() हर बार event emit होने पर callback call करता है। once() सिर्फ पहली बार, फिर automatically remove।",
          },
          {
            q: "EventEmitter memory leak कब होती है?",
            a: "बहुत ज़्यादा listeners add करने से। Default limit 10 है। Unused listeners को off() से remove करना ज़रूरी है।",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Chapter 7: Streams",
    sub: "Readable, Writable, Transform Streams",
    sections: [
      {
        head: "💧 7.1 Streams — Data का Efficient Flow",
        theory: (
          <>
            <p>
              <strong>Streams</strong> data को छोटे chunks में process करते हैं
              — पूरा data memory में load नहीं होता।
            </p>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Example</th>
                  <th>Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Readable</td>
                  <td>createReadStream()</td>
                  <td>File से read</td>
                </tr>
                <tr>
                  <td>Writable</td>
                  <td>createWriteStream()</td>
                  <td>File में write</td>
                </tr>
                <tr>
                  <td>Duplex</td>
                  <td>TCP Socket</td>
                  <td>Read + Write</td>
                </tr>
                <tr>
                  <td>Transform</td>
                  <td>zlib.createGzip()</td>
                  <td>Data modify</td>
                </tr>
              </tbody>
            </table>
            <div className="alert a-ok">
              <strong>✅ Memory Efficiency:</strong> 1GB file को Streams से
              process करते समय सिर्फ 64KB memory use होती है!
            </div>
          </>
        ),
        code: `const fs   = require('fs');
const zlib = require('zlib');
const { Transform, pipeline } = require('stream');

// ══ 1. Readable Stream ══
const readStream = fs.createReadStream('input.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024  // 64KB chunks
});

readStream.on('data', (chunk) => {
  console.log('Chunk: ' + chunk.length + ' bytes');
});
readStream.on('end', () => console.log('Read complete!'));
readStream.on('error', (err) => console.error(err.message));

// ══ 2. Writable Stream ══
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello, ');
writeStream.write('Node.js Streams!\n');
writeStream.end();
writeStream.on('finish', () => console.log('Writing complete!'));

// ══ 3. PIPE ══
fs.createReadStream('input.txt')
  .pipe(fs.createWriteStream('copy.txt'))
  .on('finish', () => console.log('File copied!'));

// ══ 4. Pipeline — Safe chain ══
pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('output.txt.gz'),
  (err) => {
    if (err) console.error('Pipeline failed:', err.message);
    else console.log('File compressed!');
  }
);

// ══ 5. Transform Stream ══
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

pipeline(
  fs.createReadStream('input.txt'),
  upperCase,
  fs.createWriteStream('upper.txt'),
  (err) => {
    if (err) console.error(err);
    else console.log('Transform complete!');
  }
);`,
        exps: [
          {
            ln: "6-9",
            code: "fs.createReadStream('input.txt', { highWaterMark: 64*1024 })",
            desc: "Readable stream। highWaterMark = chunk size (default 64KB)।",
            reason:
              "WHY: बड़ी files को chunks में read करते हैं। Memory efficient।",
          },
          {
            ln: "11-13",
            code: "readStream.on('data', (chunk) => {...})",
            desc: "हर chunk आने पर यह callback fire होता है।",
            reason:
              "WHY: Chunk मिलते ही process करो — सारा data buffer में नहीं रखते।",
          },
          {
            ln: "24-26",
            code: "createReadStream().pipe(createWriteStream())",
            desc: "reader का output automatically writer को feed होता है। Backpressure handle होता है।",
            reason: "WHY: Manual data event और write() से ज़्यादा safe।",
          },
          {
            ln: "29-36",
            code: "pipeline(read, compress, write, callback)",
            desc: "pipeline() chain में streams connect करता है।",
            reason:
              "WHY: pipe() से better — error handling और memory leak prevention automatic।",
          },
          {
            ln: "39-43",
            code: "new Transform({ transform(chunk, enc, callback) })",
            desc: "Custom Transform stream जो data modify करता है।",
            reason:
              "WHY: Encryption, compression, formatting — data बदलते हुए flow जारी।",
          },
          {
            ln: "41",
            code: "this.push(chunk.toString().toUpperCase())",
            desc: "Transformed data को downstream push करते हैं।",
            reason: "WHY: push() से downstream को data मिलता है।",
          },
        ],
        output: `Chunk: 65536 bytes\nChunk: 32768 bytes\nRead complete!\nWriting complete!\nFile copied!\nFile compressed!\nTransform complete!`,
        diag: `📊 Streams vs Regular Read:

❌ readFile — 1GB file:
  Disk ──────────────────► RAM (1GB) → Process

✅ Streams — 1GB file:
  Disk ──64KB──► Process ──64KB──► Output
  (सिर्फ 64KB RAM में!)

Pipeline:
  input.txt → [Read] → [UPPERCASE] → upper.txt
  input.txt → [Read] → [Gzip]      → output.gz`,
        why: (
          <>
            <p>
              <strong>Streams क्यों important हैं?</strong>
            </p>
            <ul>
              <li>
                <strong>Memory:</strong> 1GB file → 64KB RAM
              </li>
              <li>
                <strong>Speed:</strong> Process जल्दी शुरू
              </li>
              <li>
                <strong>Real Use:</strong> Video streaming, file upload/download
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "Stream क्या है? Regular file read से कैसे different?",
            a: "Stream data को chunks में process करता है। 1GB file: readFile=1GB RAM, Stream=64KB RAM।",
          },
          {
            q: "pipe() और pipeline() में क्या difference है?",
            a: "pipe() basic — error हो तो cleanup नहीं। pipeline() proper error handling और memory leak prevention।",
          },
          {
            q: "Backpressure क्या है?",
            a: "जब writable stream readable से slow हो। Streams automatically handle करते हैं — fast stream रुकता है slow के wait में।",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Chapter 8: Database — MongoDB + Mongoose",
    sub: "Schema, Model, CRUD Operations",
    sections: [
      {
        head: "🗄️ 8.1 MongoDB + Mongoose",
        theory: (
          <>
            <p>
              <strong>MongoDB</strong> एक NoSQL database है जो JSON-like
              documents store करता है। Install:{" "}
              <code>npm install mongoose</code>
            </p>
            <table>
              <thead>
                <tr>
                  <th>SQL</th>
                  <th>MongoDB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table</td>
                  <td>Collection</td>
                </tr>
                <tr>
                  <td>Row</td>
                  <td>Document</td>
                </tr>
                <tr>
                  <td>Column</td>
                  <td>Field</td>
                </tr>
                <tr>
                  <td>JOIN</td>
                  <td>populate()</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
        code: `const mongoose = require('mongoose');

// ══ 1. Connect ══
async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/myapp');
    console.log('✅ MongoDB Connected!');
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  }
}

// ══ 2. Schema ══
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true, minLength: [2, 'Min 2 chars']
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true, lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email']
  },
  age:  { type: Number, min: 0, max: 120 },
  role: { type: String, enum: ['user','admin','moderator'], default: 'user' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

userSchema.methods.getInfo = function() {
  return this.name + ' (' + this.email + ')';
};

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// ══ 3. Model ══
const User = mongoose.model('User', userSchema);

// ══ 4. CRUD ══
async function crudExamples() {
  // CREATE
  const user = await User.create({
    name: 'Rahul Kumar', email: 'rahul@example.com', age: 25
  });

  // READ
  const all    = await User.find();
  const active = await User.find({ isActive: true });
  const admins = await User.find({ role: 'admin' }).select('name email');

  const byId   = await User.findById('65a1b2c3d4e5f6g7');
  const young  = await User
    .find({ age: { $lt: 30 } })
    .sort({ name: 1 })
    .limit(10)
    .select('-password');

  // UPDATE
  const updated = await User.findByIdAndUpdate(
    user._id, { age: 26 },
    { new: true, runValidators: true }
  );

  // DELETE
  await User.findByIdAndDelete(user._id);
  await User.deleteMany({ isActive: false });
}

// ══ 5. Express + Mongoose ══
const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(400).json({ error: err.message });
  }
});

connectDB().then(() => app.listen(3000));`,
        exps: [
          {
            ln: "5",
            code: "await mongoose.connect('mongodb://localhost:27017/myapp')",
            desc: "MongoDB server से connection establish करता है।",
            reason: "WHY: App start होने पर DB connect करना ज़रूरी है।",
          },
          {
            ln: "9",
            code: "process.exit(1)",
            desc: "DB connect न हो तो app बंद करो।",
            reason: "WHY: DB के बिना app काम नहीं करेगा।",
          },
          {
            ln: "15-29",
            code: "new mongoose.Schema({...})",
            desc: "Schema data structure, types, और validation rules define करता है।",
            reason:
              "WHY: Schema-less MongoDB में structure enforce करना ज़रूरी है।",
          },
          {
            ln: "23",
            code: "unique: true, lowercase: true",
            desc: "unique = duplicate नहीं। lowercase = automatically lowercase store।",
            reason:
              "WHY: Email हमेशा lowercase store करो — case sensitivity bugs avoid।",
          },
          {
            ln: "28",
            code: "timestamps: true",
            desc: "Mongoose automatically createdAt और updatedAt add करता है।",
            reason: "WHY: Manually manage नहीं करना पड़ता।",
          },
          {
            ln: "41",
            code: "const User = mongoose.model('User', userSchema)",
            desc: "'User' → MongoDB में 'users' collection।",
            reason: "WHY: Model CRUD methods provide करता है।",
          },
          {
            ln: "50",
            code: "{ age: { $lt: 30 } }",
            desc: "MongoDB query operators: $lt, $gt, $gte, $lte, $in।",
            reason: "WHY: Complex queries के लिए।",
          },
          {
            ln: "54",
            code: "{ new: true, runValidators: true }",
            desc: "new:true = updated document return। runValidators = update पर भी validation।",
            reason: "WHY: Default में पुराना document return होता है।",
          },
          {
            ln: "75",
            code: "if (err.code === 11000)",
            desc: "MongoDB duplicate key error code।",
            reason: "WHY: unique field duplicate हो तो 11000 error।",
          },
        ],
        output: `✅ MongoDB Connected!\n\n// GET /users\n[{"_id":"...","name":"Rahul Kumar","email":"rahul@example.com","age":25}]\n\n// POST /users (duplicate email)\n{"error":"Email already exists"}`,
        diag: `📊 Mongoose Flow:

Schema → Model → MongoDB Collection

userSchema           User = model(      MongoDB:
{name,email,age} → 'User', schema) → users collection

CRUD:
  User.create()           → INSERT
  User.find()             → SELECT *
  User.findById()         → SELECT WHERE _id
  User.findByIdAndUpdate()→ UPDATE WHERE _id
  User.findByIdAndDelete()→ DELETE WHERE _id

Query Operators:
  { age: { $lt: 30 } }             → age < 30
  { role: { $in: ['admin','mod'] }}→ role IN list`,
        why: (
          <>
            <p>
              <strong>MongoDB + Mongoose क्यों?</strong>
            </p>
            <ul>
              <li>
                <strong>Flexible:</strong> SQL tables जैसी rigid structure नहीं
              </li>
              <li>
                <strong>MERN Stack:</strong> MongoDB+Express+React+Node — most
                popular stack
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "Mongoose Schema और Model में क्या difference है?",
            a: "Schema data structure और validation rules define करता है। Model Schema से MongoDB collection के साथ interact करता है। Schema=blueprint, Model=factory।",
          },
          {
            q: "findById और findOne में क्या difference है?",
            a: "findById('id') shorthand है findOne({_id: id}) का। दोनों null return करते हैं अगर नहीं मिला।",
          },
          {
            q: "Mongoose Validation कैसे काम करती है?",
            a: "Schema में defined rules automatically check होती हैं save/create पर। findByIdAndUpdate पर runValidators:true ज़रूरी है।",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Chapter 9: Authentication & Security",
    sub: "JWT, bcrypt, Middleware Auth",
    sections: [
      {
        head: "🔐 9.1 JWT Authentication System",
        theory: (
          <>
            <p>
              <strong>JWT (JSON Web Token)</strong> stateless authentication के
              लिए। JWT के 3 parts: <code>header.payload.signature</code>
            </p>
            <p>
              Install: <code>npm install jsonwebtoken bcryptjs</code>
            </p>
            <div className="alert a-bad">
              <strong>🚫 कभी नहीं:</strong> Plain text password store करना।
              Secret key hardcode करना। JWT में password रखना।
            </div>
          </>
        ),
        code: `const jwt    = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');
const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'change-in-production';

// ══ 1. PASSWORD HASHING ══
async function hashPassword(plain) {
  const salt   = await bcrypt.genSalt(12);
  const hashed = await bcrypt.hash(plain, salt);
  return hashed;
}

async function verifyPassword(plain, hashed) {
  return await bcrypt.compare(plain, hashed);
}

// ══ 2. JWT TOKEN ══
function generateToken(userId, role) {
  return jwt.sign({ id: userId, role }, JWT_SECRET, { expiresIn: '7d' });
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { valid: true, data: decoded };
  } catch (err) {
    return { valid: false, error: err.message };
  }
}

// ══ 3. REGISTER ══
const users = [];

app.post('/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: 'All fields required' });
    if (password.length < 8)
      return res.status(400).json({ error: 'Password min 8 chars' });

    const exists = users.find(u => u.email === email);
    if (exists) return res.status(400).json({ error: 'Email already registered' });

    const hashedPassword = await hashPassword(password);
    const newUser = { id: Date.now(), name, email, password: hashedPassword, role: 'user' };
    users.push(newUser);

    const { password: _, ...safe } = newUser;
    res.status(201).json({ message: 'Registered!', user: safe });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ══ 4. LOGIN ══
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user || !(await verifyPassword(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user.id, user.role);
    res.json({ message: 'Login successful!', token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ══ 5. AUTH MIDDLEWARE ══
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ error: 'No token provided' });

  const token  = authHeader.split(' ')[1];
  const result = verifyToken(token);
  if (!result.valid)
    return res.status(401).json({ error: 'Invalid or expired token' });

  req.user = result.data;
  next();
}

function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({ error: 'Access denied' });
    next();
  };
}

app.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Your profile', user: req.user });
});

app.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin only!' });
});

app.listen(3000, () => console.log('Auth server on :3000'));`,
        exps: [
          {
            ln: "7",
            code: "process.env.JWT_SECRET || 'change-in-production'",
            desc: "Secret key environment variable से लेते हैं।",
            reason:
              "WHY: Secret को code में hardcode करना dangerous है। .env file use करो।",
          },
          {
            ln: "11",
            code: "bcrypt.genSalt(12)",
            desc: "Salt generate करता है cost factor 12 के साथ।",
            reason:
              "WHY: Salt हर password को unique बनाता है। Cost 12 = ~250ms।",
          },
          {
            ln: "12",
            code: "bcrypt.hash(plain, salt)",
            desc: "Password को one-way hash में convert करता है।",
            reason: "WHY: Plain text passwords store करना security crime है।",
          },
          {
            ln: "17",
            code: "bcrypt.compare(plain, hashed)",
            desc: "Plain text को hash से compare करता है।",
            reason:
              "WHY: Hash को decrypt नहीं कर सकते। compare() internally hash करके match करता है।",
          },
          {
            ln: "21",
            code: "jwt.sign({ id, role }, JWT_SECRET, { expiresIn: '7d' })",
            desc: "Payload को secret से sign करके JWT token बनाता है।",
            reason: "WHY: Token में expiry ज़रूरी।",
          },
          {
            ln: "49",
            code: "const { password: _, ...safe } = newUser",
            desc: "Destructuring से password field exclude करते हैं response से।",
            reason: "WHY: Password (hashed भी) client को भेजना dangerous है।",
          },
          {
            ln: "57",
            code: "if (!user || !(await verifyPassword(...)))",
            desc: "User नहीं मिला और wrong password — same error message।",
            reason:
              "WHY: Specific error attacker को hint देगा। Same generic message।",
          },
          {
            ln: "66",
            code: "authHeader.startsWith('Bearer ')",
            desc: "Authorization header format check।",
            reason: "WHY: Bearer token standard format है।",
          },
          {
            ln: "72",
            code: "req.user = result.data",
            desc: "Decoded user info को request object पर attach करते हैं।",
            reason:
              "WHY: अगले route handlers में req.user से user info मिलेगी।",
          },
        ],
        output: `// POST /auth/login\n{"token":"eyJhbGci...","user":{"id":1,"name":"Rahul","email":"rahul@ex.com"}}\n\n// GET /profile (valid token)\n{"message":"Your profile","user":{"id":1,"role":"user"}}\n\n// GET /admin (regular user)\n{"error":"Access denied"}`,
        diag: `📊 JWT Auth Flow:

Register:
  POST /register → hash(password) → DB save

Login:
  POST /login → bcrypt.compare()
             → jwt.sign()
             ← { token }

Protected Request:
  GET /profile
  Authorization: Bearer eyJ...
        │
        ▼ authenticate middleware
        │ jwt.verify(token)
        │ req.user = decoded
        ▼ Route Handler

JWT Structure:
  eyJhbGci.eyJ1c2VySWQ.SflKxwXX
  └Header─┘└─Payload──┘└─Sig───┘`,
        why: (
          <>
            <p>
              <strong>JWT Auth क्यों?</strong>
            </p>
            <ul>
              <li>
                <strong>Stateless:</strong> Server पर session store नहीं
              </li>
              <li>
                <strong>Mobile:</strong> Mobile apps के लिए perfect
              </li>
              <li>
                <strong>Microservices:</strong> Different services में same
                token verify
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "JWT में क्या store करना चाहिए और क्या नहीं?",
            a: "Store करो: userId, role, email। मत करो: password, credit card। JWT payload base64 encoded है — encrypted नहीं।",
          },
          {
            q: "bcrypt का cost factor क्यों important है?",
            a: "Cost factor hashing को slow बनाता है। 12 = ~250ms। यह brute-force attacks से protect करता है। 10-12 recommended।",
          },
          {
            q: "Token refresh कैसे करते हैं?",
            a: "Two-token system: Access token (15min) और Refresh token (7 days)। Access expire होने पर refresh token से new access token मिलता है।",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Chapter 10: Production & Deployment",
    sub: "Environment Variables, Security, Clustering",
    sections: [
      {
        head: "🚀 10.1 Production-Ready Node.js Application",
        theory: (
          <>
            <p>Production deploy से पहले:</p>
            <ul>
              <li>
                <strong>Environment Variables</strong> — Secrets code से अलग
              </li>
              <li>
                <strong>Security</strong> — helmet, cors, rate limiting
              </li>
              <li>
                <strong>Process Manager</strong> — PM2 से auto-restart
              </li>
              <li>
                <strong>Clustering</strong> — Multiple CPU cores
              </li>
            </ul>
            <div className="alert a-ok">
              <strong>✅ PM2 Commands:</strong> pm2 start app.js | pm2 start
              app.js -i max | pm2 logs | pm2 monit
            </div>
          </>
        ),
        code: `// ─── .env ───
// PORT=3000
// NODE_ENV=production
// MONGODB_URI=mongodb+srv://user:pass@cluster/db
// JWT_SECRET=super-secret-key

// ─── config.js ───
require('dotenv').config();
const config = {
  port:      process.env.PORT || 3000,
  env:       process.env.NODE_ENV || 'development',
  mongoUri:  process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  isDev:     process.env.NODE_ENV !== 'production'
};
module.exports = config;

// ─── app.js ───
const express   = require('express');
const helmet    = require('helmet');
const cors      = require('cors');
const rateLimit = require('express-rate-limit');
const morgan    = require('morgan');
const config    = require('./config');

const app = express();

app.use(helmet());  // 15+ security headers
app.use(cors({
  origin: ['https://myapp.com'],
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // 15 min
  max: 100,
  message: 'Too many requests!'
});
app.use('/api', limiter);

app.use(morgan(config.isDev ? 'dev' : 'combined'));
app.use(express.json({ limit: '10mb' }));

app.use('/api/users', require('./routes/users'));

// Health Check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime:  process.uptime(),
    memory:  process.memoryUsage(),
    version: process.version
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.statusCode || 500;
  res.status(status).json({
    error: config.isDev ? err.message : 'Internal Server Error'
  });
});

// ══ GRACEFUL SHUTDOWN ══
const server = app.listen(config.port, () => {
  console.log('Server on port ' + config.port);
});

process.on('SIGTERM', () => {
  server.close(() => {
    mongoose.connection.close(() => process.exit(0));
  });
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  server.close(() => process.exit(1));
});

// ══ CLUSTERING ══
const cluster = require('cluster');
const os      = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log('Forking ' + cpus + ' workers...');
  for (let i = 0; i < cpus; i++) cluster.fork();
  cluster.on('exit', (worker) => {
    console.log('Worker ' + worker.id + ' died. Restarting...');
    cluster.fork();
  });
} else {
  require('./app');
  console.log('Worker ' + process.pid + ' started');
}`,
        exps: [
          {
            ln: "2-5",
            code: ".env file",
            desc: ".env file में environment variables store करते हैं।",
            reason:
              "WHY: Secrets code में hardcode करना dangerous। .gitignore में add करो।",
          },
          {
            ln: "8",
            code: "require('dotenv').config()",
            desc: "dotenv .env file read करके process.env में variables add करता है।",
            reason: "WHY: process.env.PORT से config access होगा।",
          },
          {
            ln: "26",
            code: "app.use(helmet())",
            desc: "helmet 15+ security HTTP headers set करता है।",
            reason: "WHY: XSS, clickjacking attacks से protect करता है।",
          },
          {
            ln: "27-30",
            code: "cors({ origin: [...] })",
            desc: "Specific origins को API access allow करते हैं।",
            reason: "WHY: Production में * allow करना dangerous।",
          },
          {
            ln: "32-36",
            code: "rateLimit({ windowMs, max })",
            desc: "15 minutes में 100 requests से ज़्यादा आने पर block।",
            reason: "WHY: DDoS attacks, brute force से protect करता है।",
          },
          {
            ln: "44-49",
            code: "app.get('/health', ...)",
            desc: "Health check endpoint — monitoring tools check करते हैं।",
            reason: "WHY: Kubernetes, AWS Load Balancer use करते हैं।",
          },
          {
            ln: "53",
            code: "config.isDev ? err.message : 'Internal Server Error'",
            desc: "Development में detailed error, production में generic।",
            reason: "WHY: Production में stack trace देना security risk।",
          },
          {
            ln: "58-61",
            code: "process.on('SIGTERM', ...)",
            desc: "SIGTERM signal पर graceful shutdown।",
            reason: "WHY: Abrupt shutdown में in-progress requests fail।",
          },
          {
            ln: "72",
            code: "if (cluster.isMaster)",
            desc: "Master process workers spawn करता है — एक per CPU core।",
            reason:
              "WHY: Node.js single-threaded है। Clustering से multiple cores use होते हैं।",
          },
          {
            ln: "77",
            code: "cluster.on('exit', () => { cluster.fork() })",
            desc: "Worker crash होने पर नया worker start।",
            reason:
              "WHY: High availability — एक worker crash से service down नहीं होती।",
          },
        ],
        output: `Forking 4 workers...\nWorker 12345 started\nWorker 12346 started\n\n// GET /health:\n{"status":"OK","uptime":1234.56}\n\n// Rate limit exceeded:\n{"error":"Too many requests!"}`,
        diag: `📊 Production Architecture:

Internet
    │
    ▼
┌──────────────┐
│ Nginx/Proxy  │  SSL, Load Balance
└──────┬───────┘
       │
┌──────▼───────────────────────┐
│  Node.js Cluster             │
│  Worker1  Worker2            │
│  Worker3  Worker4            │
└──────┬───────────────────────┘
       │
┌──────▼──────┐  ┌─────────────┐
│  MongoDB    │  │ Redis Cache │
└─────────────┘  └─────────────┘

PM2:
  pm2 start app.js -i max  → Cluster mode
  pm2 logs                 → View logs
  pm2 monit                → Monitor`,
        why: (
          <>
            <p>
              <strong>Production practices क्यों?</strong>
            </p>
            <ul>
              <li>
                <strong>Security:</strong> Unprotected apps hack हो जाते हैं
              </li>
              <li>
                <strong>Reliability:</strong> Crashes handle — 24/7 uptime
              </li>
              <li>
                <strong>Performance:</strong> Multiple cores use
              </li>
            </ul>
          </>
        ),
        ivw: [
          {
            q: "Node.js Clustering क्या है?",
            a: "Cluster module से multiple processes spawn होते हैं — हर process एक CPU core पर। 4-core machine पर 4x throughput। PM2 automatically handle करता है।",
          },
          {
            q: "Graceful shutdown क्यों important है?",
            a: "Abrupt shutdown में in-progress requests fail। Graceful: नई requests लेना बंद → existing complete → DB close → exit।",
          },
          {
            q: "helmet.js क्या करता है?",
            a: "helmet 15+ security HTTP headers set करता है: XSS-Protection, X-Frame-Options, Strict-Transport-Security, Content-Security-Policy।",
          },
        ],
      },
    ],
  },
];

// ─── SYNTAX HIGHLIGHT ───────────────────────────────────────────────────────

function highlight(code) {
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped
    .replace(/(\/\/[^\n]*)/g, '<span class="cmt">$1</span>')
    .replace(
      /\b(const|let|var|function|class|return|if|else|for|while|async|await|new|require|module|exports|try|catch|throw|typeof|extends|super|this)\b/g,
      '<span class="kw">$1</span>',
    )
    .replace(/(`[^`]*`)/g, '<span class="str">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="str">$1</span>')
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="str">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>');
}

// ─── SUB-COMPONENTS ─────────────────────────────────────────────────────────

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const html = highlight(code);
  const handleCopy = useCallback(() => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);
  return (
    <div className="code-wrap">
      <div className="code-hdr">
        <span className="code-lang">JAVASCRIPT / NODE.JS</span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>
      <pre className="code-body">
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}

function ExplanationBox({ exps }) {
  if (!exps?.length) return null;
  return (
    <div className="exp-box">
      <div className="exp-title">💡 Line-by-Line Explanation with Reason</div>
      {exps.map((e, i) => (
        <div className="line-exp" key={i}>
          <span className="ln">Line {e.ln}</span>
          <code className="lc">{e.code}</code>
          <div className="ld">{e.desc}</div>
          <div className="lr">💡 {e.reason}</div>
        </div>
      ))}
    </div>
  );
}

function OutputBox({ output }) {
  if (!output) return null;
  return (
    <div className="out-box">
      <div className="out-title">🖥️ OUTPUT</div>
      <pre className="out-body">{output}</pre>
    </div>
  );
}

function DiagramBox({ diag }) {
  if (!diag) return null;
  return (
    <div className="diag-box">
      <div className="diag-title">📐 DIAGRAM</div>
      <pre className="diag-body">{diag}</pre>
    </div>
  );
}

function WhyBox({ why }) {
  if (!why) return null;
  return (
    <div className="why-box">
      <div className="why-title">🎯 WHY IMPORTANT?</div>
      <div className="why-body">{why}</div>
    </div>
  );
}

function InterviewBox({ ivw }) {
  if (!ivw?.length) return null;
  return (
    <div className="ivw-box">
      <div className="ivw-title">📝 INTERVIEW QUESTIONS</div>
      {ivw.map((q, i) => (
        <div className="q-card" key={i}>
          <div className="q-text">
            Q{i + 1}. {q.q}
          </div>
          <div className="a-text">
            <strong>Answer:</strong> {q.a}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

const ICONS = ["⚡", "📦", "📁", "🌐", "🚀", "🎯", "💧", "🗄️", "🔐", "🚢"];

export default function NodeTextbook() {
  const [cur, setCur] = useState(0);

  const goTo = useCallback((i) => {
    setCur(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const ch = BOOK[cur];
  const progress = Math.round(((cur + 1) / BOOK.length) * 100);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Source+Code+Pro:wght@400;600;700&family=Inter:wght@400;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --paper: #f8f7f4; --ink: #1a1a1a;
          --green: #16a34a; --green2: #15803d;
          --warn: #d97706; --red: #dc2626;
          --blue: #2563eb; --border: #e2e8f0; --codebg: #f1f5f9;
        }
        body { background: var(--paper); color: var(--ink); font-family: 'Merriweather', serif; line-height: 1.8; }

        .nb-wrap { max-width: 860px; margin: 0 auto; padding: 20px; }

        /* Cover */
        .nb-cover {
          background: linear-gradient(135deg, #14532d, #166534, #1e3a1e);
          color: #fff; padding: 60px 40px; border-radius: 14px;
          text-align: center; margin-bottom: 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,.3); position: relative; overflow: hidden;
        }
        .nb-cover::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(45deg,rgba(255,255,255,.03) 0,rgba(255,255,255,.03) 1px,transparent 1px,transparent 10px);
        }
        .nb-cover h1 { font-size: 40px; font-weight: 900; margin-bottom: 10px; position: relative; }
        .nb-cover .sub { font-family: 'Inter', sans-serif; font-size: 15px; opacity: .85; margin-bottom: 8px; position: relative; }
        .nb-cover .tag { display: inline-block; background: rgba(255,255,255,.15); padding: 4px 14px; border-radius: 20px; font-size: 12px; font-family: 'Inter', sans-serif; position: relative; }

        /* Progress */
        .prog-wrap { background: #e2e8f0; height: 8px; border-radius: 4px; margin-bottom: 24px; overflow: hidden; }
        .prog-fill { height: 100%; background: linear-gradient(90deg, var(--green), #4ade80); transition: width .5s ease; }

        /* TOC */
        .index-box { background: #fff; border: 2px solid var(--border); border-radius: 14px; padding: 28px; margin-bottom: 28px; box-shadow: 0 4px 12px rgba(0,0,0,.06); }
        .index-box h2 { font-size: 24px; color: var(--green); border-bottom: 3px solid var(--green); padding-bottom: 10px; margin-bottom: 18px; }
        .ch-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 10px; }
        .ch-card { padding: 13px 15px; background: var(--codebg); border: 2px solid var(--border); border-radius: 10px; cursor: pointer; transition: all .25s; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13px; display: flex; align-items: center; gap: 10px; }
        .ch-card:hover { background: var(--green); color: #fff; border-color: var(--green); transform: translateX(4px); }
        .ch-card.active { background: var(--green); color: #fff; border-color: var(--green); }
        .ch-num { background: #fff; color: var(--green); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; flex-shrink: 0; font-size: 13px; }
        .ch-card.active .ch-num { background: rgba(255,255,255,.9); }

        /* Page */
        .nb-page { background: #fff; border: 2px solid var(--border); border-radius: 14px; padding: 38px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,.08); animation: pageIn .4s ease; }
        @keyframes pageIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .page-hdr { border-bottom: 3px solid var(--green); padding-bottom: 14px; margin-bottom: 28px; }
        .page-title { font-size: 26px; color: var(--green); font-weight: 900; margin-bottom: 6px; }
        .page-sub { font-size: 14px; color: #64748b; font-family: 'Inter', sans-serif; font-weight: 600; }

        /* Section */
        .sec { margin-bottom: 40px; }
        .sec-head { font-size: 19px; color: var(--warn); font-weight: 700; display: flex; align-items: center; gap: 8px; padding: 10px 16px; background: linear-gradient(90deg, #fef3c7, transparent); border-left: 4px solid var(--warn); border-radius: 4px; margin-bottom: 16px; }
        .theory { font-size: 15px; line-height: 1.9; color: #334155; }
        .theory p { margin-bottom: 14px; }
        .theory strong { color: var(--ink); font-weight: 700; }
        .theory em { color: var(--green); font-style: normal; font-weight: 600; }
        .theory ul, .theory ol { margin-left: 28px; margin-bottom: 14px; }
        .theory li { margin-bottom: 8px; }

        /* Table */
        table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px; box-shadow: 0 2px 8px rgba(0,0,0,.08); }
        thead { background: var(--green); color: #fff; }
        th, td { padding: 11px 14px; border: 1px solid var(--border); text-align: left; }
        tbody tr:nth-child(even) { background: #f8fafc; }
        tbody tr:hover { background: #dcfce7; }
        code { font-family: 'Source Code Pro', monospace; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 13px; color: #0f172a; }

        /* Code block */
        .code-wrap { margin: 20px 0; background: #1e293b; border-radius: 12px; overflow: hidden; border: 2px solid #334155; box-shadow: 0 8px 20px rgba(0,0,0,.18); }
        .code-hdr { background: #0f172a; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; }
        .code-lang { font-family: 'Inter', sans-serif; font-size: 11px; color: #94a3b8; font-weight: 700; letter-spacing: 1px; }
        .copy-btn { background: #166534; color: #fff; border: none; padding: 4px 12px; border-radius: 4px; font-size: 11px; cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 600; transition: all .2s; }
        .copy-btn:hover { background: #15803d; }
        .code-body { padding: 20px; overflow-x: auto; font-family: 'Source Code Pro', monospace; font-size: 13.5px; line-height: 1.8; color: #e2e8f0; white-space: pre; }
        .kw  { color: #c792ea; font-weight: 700; }
        .str { color: #c3e88d; }
        .num { color: #f78c6c; }
        .cmt { color: #697098; font-style: italic; }

        /* Explanation */
        .exp-box { background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 2px solid #3b82f6; border-radius: 12px; padding: 20px; margin: 20px 0; }
        .exp-title { font-family: 'Inter', sans-serif; font-size: 16px; color: #1d4ed8; font-weight: 700; margin-bottom: 14px; }
        .line-exp { background: #fff; padding: 14px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 2px 6px rgba(0,0,0,.05); }
        .ln { display: inline-block; background: #3b82f6; color: #fff; padding: 2px 8px; border-radius: 4px; font-family: 'Source Code Pro', monospace; font-size: 11px; font-weight: 700; margin-right: 6px; }
        .lc { font-family: 'Source Code Pro', monospace; font-size: 12px; background: #f1f5f9; padding: 4px 8px; border-radius: 4px; display: inline-block; margin: 6px 0; color: #1e293b; }
        .ld { font-size: 14px; color: #334155; line-height: 1.7; margin-top: 4px; }
        .lr { font-size: 13px; color: #059669; margin-top: 6px; padding-left: 10px; border-left: 3px solid #059669; font-weight: 600; }

        /* Output */
        .out-box { background: #f1f5f9; border: 2px solid #64748b; border-radius: 12px; padding: 18px; margin: 18px 0; }
        .out-title { font-family: 'Inter', sans-serif; font-size: 13px; color: #475569; font-weight: 700; margin-bottom: 10px; }
        .out-body { background: #1e293b; color: #10b981; padding: 14px; border-radius: 8px; font-family: 'Source Code Pro', monospace; font-size: 13px; line-height: 1.7; white-space: pre-wrap; }

        /* Diagram */
        .diag-box { background: #fff; border: 2px solid var(--warn); border-radius: 12px; padding: 22px; margin: 22px 0; }
        .diag-title { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--warn); font-weight: 700; margin-bottom: 14px; text-align: center; }
        .diag-body { font-family: 'Source Code Pro', monospace; font-size: 12.5px; line-height: 2; color: #334155; overflow-x: auto; white-space: pre; }

        /* Why */
        .why-box { background: linear-gradient(135deg, #fef3c7, #fde68a); border: 2px solid var(--warn); border-radius: 12px; padding: 18px; margin: 18px 0; }
        .why-title { font-family: 'Inter', sans-serif; font-size: 17px; color: #92400e; font-weight: 700; margin-bottom: 10px; }
        .why-body { font-size: 14px; color: #78350f; line-height: 1.8; }
        .why-body ul { margin-left: 22px; margin-bottom: 10px; }
        .why-body li { margin-bottom: 6px; }

        /* Interview */
        .ivw-box { background: linear-gradient(135deg, #fdf2f8, #fce7f3); border: 2px solid #ec4899; border-radius: 12px; padding: 18px; margin: 18px 0; }
        .ivw-title { font-family: 'Inter', sans-serif; font-size: 17px; color: #9f1239; font-weight: 700; margin-bottom: 14px; }
        .q-card { background: #fff; padding: 14px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #ec4899; }
        .q-text { font-weight: 700; color: #831843; margin-bottom: 6px; font-size: 14px; }
        .a-text { font-size: 13px; color: #334155; line-height: 1.7; }

        /* Alerts */
        .alert { padding: 12px 16px; margin: 12px 0; border-radius: 6px; font-size: 14px; line-height: 1.7; }
        .a-info { background: #dbeafe; border-left: 4px solid #3b82f6; color: #1e40af; }
        .a-ok   { background: #d1fae5; border-left: 4px solid #059669; color: #065f46; }
        .a-warn { background: #fef3c7; border-left: 4px solid #d97706; color: #78350f; }
        .a-bad  { background: #fee2e2; border-left: 4px solid #dc2626; color: #7f1d1d; }

        /* Nav */
        .nav-btns { display: flex; justify-content: space-between; margin-top: 30px; padding-top: 18px; border-top: 2px solid var(--border); }
        .nav-btn { background: var(--green); color: #fff; border: none; padding: 12px 26px; border-radius: 8px; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px; cursor: pointer; transition: all .3s; }
        .nav-btn:hover { background: var(--green2); transform: translateY(-2px); box-shadow: 0 4px 14px rgba(22,163,74,.3); }
        .nav-btn:disabled { background: #cbd5e1; cursor: not-allowed; transform: none; box-shadow: none; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 4px; }

        @media (max-width: 700px) {
          .nb-page { padding: 22px 16px; }
          .nb-cover h1 { font-size: 28px; }
          .ch-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="nb-wrap">
        {/* Cover */}
        <div className="nb-cover">
          <h1>📗 Node.js</h1>
          <div className="sub">Complete Textbook — Basic to Advanced</div>
          <div className="sub" style={{ marginBottom: 14 }}>
            Theory • Line-by-Line Code Explanation • Diagrams • Interview
            Questions
          </div>
          <span className="tag">10 Chapters • Hindi + English Explanation</span>
        </div>

        {/* Progress */}
        <div className="prog-wrap">
          <div className="prog-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* TOC */}
        <div className="index-box">
          <h2>📑 Table of Contents</h2>
          <div className="ch-grid">
            {BOOK.map((ch, i) => (
              <div
                key={ch.id}
                className={`ch-card ${i === cur ? "active" : ""}`}
                onClick={() => goTo(i)}
              >
                <div className="ch-num">{ICONS[i] || ch.id}</div>
                <div>{ch.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter page */}
        <div className="nb-page" key={cur}>
          <div className="page-hdr">
            <div className="page-title">{ch.title}</div>
            <div className="page-sub">{ch.sub}</div>
          </div>

          {ch.sections.map((s, si) => (
            <div className="sec" key={si}>
              <h2 className="sec-head">{s.head}</h2>
              <div className="theory">{s.theory}</div>
              {s.code && <CodeBlock code={s.code} />}
              {s.exps && <ExplanationBox exps={s.exps} />}
              {s.output && <OutputBox output={s.output} />}
              {s.diag && <DiagramBox diag={s.diag} />}
              {s.why && <WhyBox why={s.why} />}
              {s.ivw && <InterviewBox ivw={s.ivw} />}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="nav-btns">
          <button
            className="nav-btn"
            disabled={cur === 0}
            onClick={() => goTo(cur - 1)}
          >
            ← पिछला Chapter
          </button>
          <button
            className="nav-btn"
            disabled={cur === BOOK.length - 1}
            onClick={() => goTo(cur + 1)}
          >
            अगला Chapter →
          </button>
        </div>
      </div>
    </>
  );
}
