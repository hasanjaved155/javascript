import { useState } from "react";

const topics = [
  {
    id: "core",
    title: "Core Language",
    icon: "⚙️",
    color: "#FF6B35",
    questions: [
      {
        q: "What are the different data types in JavaScript?",
        level: "Easy",
        answer:
          "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, null — plus the non-primitive type 'object' (which includes arrays and functions).",
      },
      {
        q: "What is the difference between == and === in JavaScript?",
        level: "Easy",
        answer:
          "== checks for equality with type coercion (e.g., '5' == 5 is true), while === checks for strict equality without coercion (e.g., '5' === 5 is false).",
      },
      {
        q: "Explain type coercion with examples.",
        level: "Medium",
        answer:
          "Type coercion is automatic type conversion. Example: '5' + 3 = '53' (number coerced to string), but '5' - 3 = 2 (string coerced to number). Use explicit conversion to avoid bugs.",
      },
      {
        q: "What is the difference between var, let, and const?",
        level: "Easy",
        answer:
          "var is function-scoped and hoisted. let is block-scoped and not hoisted to a usable state. const is block-scoped, not hoisted, and cannot be reassigned (but objects/arrays it refers to can be mutated).",
      },
      {
        q: "What is hoisting in JavaScript?",
        level: "Medium",
        answer:
          "Hoisting moves variable and function declarations to the top of their scope during compilation. var is hoisted and initialized as undefined. let/const are hoisted but remain in the 'temporal dead zone' until declared.",
      },
      {
        q: "What is the Temporal Dead Zone (TDZ)?",
        level: "Medium",
        answer:
          "The TDZ is the period between entering a scope and the actual declaration of a let/const variable. Accessing the variable in this zone throws a ReferenceError.",
      },
      {
        q: "What is NaN and how do you check for it?",
        level: "Easy",
        answer:
          "NaN means 'Not a Number'. Interestingly, typeof NaN === 'number'. Use Number.isNaN() (not isNaN()) to reliably check for it, since isNaN() coerces values first.",
      },
      {
        q: "What is the difference between null and undefined?",
        level: "Easy",
        answer:
          "undefined means a variable was declared but not assigned. null is an intentional absence of value, set explicitly. typeof undefined === 'undefined', but typeof null === 'object' (a historical bug).",
      },
      {
        q: "How does JavaScript handle implicit type conversion?",
        level: "Medium",
        answer:
          "JS converts types automatically in operations. String + Number = String. Boolean in arithmetic becomes 0 or 1. null becomes 0. undefined becomes NaN. Objects call .valueOf() or .toString().",
      },
      {
        q: "What is the typeof operator and what are its quirks?",
        level: "Easy",
        answer:
          "typeof returns a string describing the type. Quirks: typeof null === 'object', typeof function(){} === 'function', and typeof undeclaredVar === 'undefined' (no error thrown).",
      },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    icon: "🔧",
    color: "#4ECDC4",
    questions: [
      {
        q: "What is a closure in JavaScript?",
        level: "Hard",
        answer:
          "A closure is when a function retains access to its outer scope even after the outer function has returned. Used for data privacy, factory functions, and maintaining state.",
      },
      {
        q: "What is the difference between arrow functions and regular functions?",
        level: "Medium",
        answer:
          "Arrow functions don't have their own 'this', 'arguments', or 'prototype'. They inherit 'this' from the enclosing lexical scope. They cannot be used as constructors.",
      },
      {
        q: "Explain call(), apply(), and bind().",
        level: "Medium",
        answer:
          "All three explicitly set 'this'. call() invokes immediately with args listed. apply() invokes immediately with args as array. bind() returns a new function with 'this' bound, called later.",
      },
      {
        q: "What is a higher-order function?",
        level: "Easy",
        answer:
          "A function that takes another function as an argument or returns a function. Examples: map, filter, reduce, setTimeout, addEventListener.",
      },
      {
        q: "What is currying in JavaScript?",
        level: "Hard",
        answer:
          "Currying transforms a function with multiple arguments into a sequence of functions each taking one argument. Example: add(1)(2)(3) instead of add(1,2,3). Useful for partial application.",
      },
      {
        q: "What is an IIFE and why use it?",
        level: "Medium",
        answer:
          "An Immediately Invoked Function Expression runs as soon as it's defined: (function(){})(). Used to create a private scope and avoid polluting the global namespace.",
      },
      {
        q: "What is memoization?",
        level: "Hard",
        answer:
          "Memoization caches function results for given inputs. On repeat calls with same args, it returns the cached result instead of recomputing. Implemented with a closure and a Map/object cache.",
      },
      {
        q: "What is function composition?",
        level: "Hard",
        answer:
          "Combining multiple functions where output of one becomes input of the next. compose(f, g)(x) = f(g(x)). Promotes reusable, declarative code. Libraries like Ramda offer utilities for this.",
      },
      {
        q: "Explain the arguments object.",
        level: "Medium",
        answer:
          "A local array-like object in regular functions containing all passed arguments. Not available in arrow functions. Can be converted to a real array with Array.from(arguments) or [...arguments].",
      },
      {
        q: "What is a pure function?",
        level: "Medium",
        answer:
          "A function that always returns the same output for the same input and has no side effects (doesn't modify external state). Makes code predictable, testable, and easier to reason about.",
      },
    ],
  },
  {
    id: "async",
    title: "Async JavaScript",
    icon: "⚡",
    color: "#FFE66D",
    questions: [
      {
        q: "What is the Event Loop?",
        level: "Hard",
        answer:
          "The event loop continuously checks the call stack. If empty, it moves tasks from the callback queue (macrotasks) to the stack. Microtasks (Promises) run before the next macrotask, after each task completes.",
      },
      {
        q: "What is the difference between microtasks and macrotasks?",
        level: "Hard",
        answer:
          "Macrotasks: setTimeout, setInterval, I/O. Microtasks: Promise.then, queueMicrotask, MutationObserver. Microtasks run after current task and before next macrotask — they have higher priority.",
      },
      {
        q: "Explain Promises in JavaScript.",
        level: "Medium",
        answer:
          "A Promise represents a future value with 3 states: pending, fulfilled, rejected. Use .then() for success, .catch() for errors, .finally() for cleanup. Avoids callback hell with chaining.",
      },
      {
        q: "What is async/await and how does it work?",
        level: "Medium",
        answer:
          "async/await is syntactic sugar over Promises. An async function always returns a Promise. await pauses execution until the Promise resolves. Use try/catch for error handling.",
      },
      {
        q: "What is callback hell and how do you avoid it?",
        level: "Medium",
        answer:
          "Callback hell is deeply nested callbacks making code hard to read/debug. Solutions: Promises chaining, async/await, modularizing callbacks into named functions.",
      },
      {
        q: "Explain Promise.all, Promise.race, Promise.allSettled, Promise.any.",
        level: "Hard",
        answer:
          "Promise.all: all must resolve, fails fast. Promise.race: first to settle wins. Promise.allSettled: waits for all, never rejects. Promise.any: first to fulfill wins, rejects only if all fail.",
      },
      {
        q: "How does setTimeout(fn, 0) work?",
        level: "Medium",
        answer:
          "It schedules fn as a macrotask, but it still runs after the current synchronous code and all microtasks finish. The '0' means minimum delay, not immediate execution.",
      },
      {
        q: "What is the difference between synchronous and asynchronous code?",
        level: "Easy",
        answer:
          "Synchronous code runs line-by-line, blocking execution. Asynchronous code allows other code to run while waiting (via callbacks, Promises, or async/await), non-blocking.",
      },
      {
        q: "How would you implement a Promise from scratch?",
        level: "Hard",
        answer:
          "Create a class with pending/fulfilled/rejected states. The constructor takes an executor(resolve, reject). .then() registers callbacks. Resolve/reject transition the state and call registered callbacks asynchronously.",
      },
      {
        q: "What is async generator and when would you use it?",
        level: "Hard",
        answer:
          "An async generator (async function*) can yield Promises and be iterated with for-await-of. Used for paginated API calls, streaming data, or any sequence of async values.",
      },
    ],
  },
  {
    id: "dom",
    title: "DOM & Browser",
    icon: "🌐",
    color: "#A8E6CF",
    questions: [
      {
        q: "What is event delegation?",
        level: "Medium",
        answer:
          "Instead of attaching listeners to each child, attach one listener to a parent. The event bubbles up from the target. Use event.target to identify the clicked element. Efficient for dynamic lists.",
      },
      {
        q: "What is event bubbling and capturing?",
        level: "Medium",
        answer:
          "Events propagate in 3 phases: capture (top-down), target, bubble (bottom-up). By default, listeners use bubble phase. Pass true as 3rd arg to addEventListener for capture phase. stopPropagation() halts it.",
      },
      {
        q: "What is the difference between innerHTML, innerText, and textContent?",
        level: "Easy",
        answer:
          "innerHTML parses HTML (XSS risk). innerText returns visible text, respects CSS (causes reflow). textContent returns all text including hidden elements, faster, no HTML parsing.",
      },
      {
        q: "How does debounce work and when do you use it?",
        level: "Hard",
        answer:
          "Debounce delays function execution until after a pause in calls. Uses setTimeout, cancels with clearTimeout on each call. Use for search input, window resize — prevents excessive firing.",
      },
      {
        q: "How does throttle work and when do you use it?",
        level: "Hard",
        answer:
          "Throttle ensures a function runs at most once per interval. Unlike debounce, it guarantees periodic execution. Use for scroll handlers, mouse move — maintains consistent rate.",
      },
      {
        q: "What is the virtual DOM?",
        level: "Medium",
        answer:
          "A lightweight in-memory representation of the real DOM. Frameworks like React diff the virtual DOM to find minimal changes, then batch-update the real DOM efficiently, improving performance.",
      },
      {
        q: "What is localStorage vs sessionStorage vs cookies?",
        level: "Medium",
        answer:
          "localStorage persists until cleared. sessionStorage clears when tab closes. Both are ~5MB, JS-only. Cookies are sent with HTTP requests, configurable expiry, ~4KB, can be httpOnly/secure.",
      },
      {
        q: "What is the difference between document.querySelector and getElementById?",
        level: "Easy",
        answer:
          "getElementById is faster (direct hash lookup) but only selects by ID. querySelector accepts any CSS selector but is slower. querySelectorAll returns all matches as a static NodeList.",
      },
      {
        q: "What is a MutationObserver?",
        level: "Hard",
        answer:
          "An API to watch for DOM changes (child additions, attribute changes, text changes). More efficient than polling. Used by frameworks for reactivity and performance monitoring tools.",
      },
      {
        q: "How do you prevent XSS attacks in the DOM?",
        level: "Hard",
        answer:
          "Avoid innerHTML with user input; use textContent instead. Sanitize inputs with libraries like DOMPurify. Use Content Security Policy (CSP) headers. Avoid eval(). Encode output properly.",
      },
    ],
  },
  {
    id: "es6",
    title: "ES6+ Features",
    icon: "✨",
    color: "#C7B8EA",
    questions: [
      {
        q: "Explain destructuring with examples.",
        level: "Easy",
        answer:
          "Destructuring extracts values from arrays/objects. Array: const [a, b] = [1, 2]. Object: const {name, age} = person. Supports defaults: const {x = 0} = obj. Rename: const {name: n} = obj.",
      },
      {
        q: "What is the spread operator and rest parameter?",
        level: "Easy",
        answer:
          "Spread (...) expands iterables: [...arr1, ...arr2], {...obj1, ...obj2}. Rest (...) collects remaining args into an array: function(a, ...rest). Rest must be the last parameter.",
      },
      {
        q: "What are template literals?",
        level: "Easy",
        answer:
          "Template literals use backticks and allow embedded expressions with ${expr}, multiline strings without \\n, and tagged templates for custom string processing.",
      },
      {
        q: "What are Symbols in JavaScript?",
        level: "Hard",
        answer:
          "Symbol() creates a unique, immutable primitive. Used as unique object keys to avoid property collisions. Well-known symbols (Symbol.iterator, Symbol.toPrimitive) customize object behavior.",
      },
      {
        q: "What are WeakMap and WeakSet?",
        level: "Hard",
        answer:
          "WeakMap/WeakSet hold weak references to objects. If the object has no other references, it can be garbage collected. Useful for caching/metadata without preventing GC. Keys must be objects.",
      },
      {
        q: "What is optional chaining (?.) and nullish coalescing (??)??",
        level: "Easy",
        answer:
          "?. safely accesses nested properties: obj?.a?.b returns undefined instead of throwing. ?? returns right side only when left is null/undefined (unlike || which also triggers on 0, '').",
      },
      {
        q: "What are JavaScript Modules (import/export)?",
        level: "Medium",
        answer:
          "ES modules use import/export for code splitting. Named exports: export const x. Default export: export default. Dynamic import: import('./module.js') returns a Promise. Runs in strict mode.",
      },
      {
        q: "What is a Proxy in JavaScript?",
        level: "Hard",
        answer:
          "Proxy wraps an object and intercepts operations via traps (get, set, has, deleteProperty, etc.). Used for validation, logging, reactive systems (Vue 3 uses Proxy for reactivity).",
      },
      {
        q: "What are generators in JavaScript?",
        level: "Hard",
        answer:
          "Generator functions (function*) can pause execution with yield and resume with .next(). They return an iterator. Used for lazy evaluation, infinite sequences, and coroutines.",
      },
      {
        q: "What is the for...of vs for...in loop?",
        level: "Medium",
        answer:
          "for...in iterates over enumerable property keys of an object (including inherited ones). for...of iterates over iterable values (arrays, strings, Maps, Sets, generators). Use for...of for arrays.",
      },
    ],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    icon: "🧩",
    color: "#FF8B94",
    questions: [
      {
        q: "How do you flatten a nested array in JavaScript?",
        level: "Medium",
        answer:
          "ES2019: arr.flat(Infinity). Recursive: function flatten(arr) { return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []); }",
      },
      {
        q: "How do you deep clone an object?",
        level: "Medium",
        answer:
          "structuredClone(obj) — modern standard. JSON.parse(JSON.stringify(obj)) — fails for functions, undefined, Date. Lodash _.cloneDeep(). Recursive custom function for full control.",
      },
      {
        q: "Implement a stack using JavaScript.",
        level: "Medium",
        answer:
          "Use an array: push() to add, pop() to remove from top. Or use a class with an array property and push/pop/peek/isEmpty methods. O(1) operations.",
      },
      {
        q: "Implement a queue using JavaScript.",
        level: "Medium",
        answer:
          "Use an array: push() to enqueue, shift() to dequeue (O(n)). Better: use a linked list or two stacks for O(1) operations. Class with enqueue/dequeue/peek methods.",
      },
      {
        q: "How do you check if a string is a palindrome?",
        level: "Easy",
        answer:
          "str === str.split('').reverse().join('') — simple. For efficiency: two pointers from both ends comparing characters, O(n) time O(1) space.",
      },
      {
        q: "How do you find duplicates in an array?",
        level: "Easy",
        answer:
          "Use a Set: const seen = new Set(); arr.filter(x => seen.has(x) || !seen.add(x)). Or reduce into an object counting occurrences. Both O(n) time.",
      },
      {
        q: "Explain Big O notation with JavaScript examples.",
        level: "Medium",
        answer:
          "O(1): object lookup obj[key]. O(n): array.forEach loop. O(n²): nested loops. O(log n): binary search. O(n log n): Array.sort(). Always aim for the most efficient solution.",
      },
      {
        q: "How would you implement binary search in JavaScript?",
        level: "Hard",
        answer:
          "On sorted array. Two pointers: left=0, right=arr.length-1. Mid = Math.floor((left+right)/2). If arr[mid]===target return mid. If less, left=mid+1. If more, right=mid-1. O(log n).",
      },
      {
        q: "How do you reverse a linked list in JavaScript?",
        level: "Hard",
        answer:
          "Iterative: maintain prev=null, current=head. For each node: save next, set current.next=prev, advance prev and current. Return prev. O(n) time, O(1) space.",
      },
      {
        q: "How do you implement debounce from scratch?",
        level: "Hard",
        answer:
          "function debounce(fn, delay) { let timer; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); }; } — clears and restarts timer on each call.",
      },
    ],
  },
  {
    id: "oop",
    title: "OOP & Patterns",
    icon: "🏗️",
    color: "#89CFF0",
    questions: [
      {
        q: "How does prototypal inheritance work in JavaScript?",
        level: "Hard",
        answer:
          "Every object has a [[Prototype]] (accessible via __proto__ or Object.getPrototypeOf). Property lookup traverses the prototype chain. Object.create(proto) creates object with given prototype.",
      },
      {
        q: "What is the difference between class and prototype-based inheritance?",
        level: "Hard",
        answer:
          "ES6 classes are syntactic sugar over prototype chains. Both use prototypal inheritance under the hood. Classes offer cleaner syntax, super keyword, and static methods, but behave the same at runtime.",
      },
      {
        q: "What is the difference between composition and inheritance?",
        level: "Hard",
        answer:
          "Inheritance: 'is-a' relationship, tight coupling, deep hierarchies. Composition: 'has-a', mixins/behaviors assembled. Prefer composition for flexibility: Object.assign({}, canFly, canSwim, baseAnimal).",
      },
      {
        q: "What is the Singleton pattern?",
        level: "Medium",
        answer:
          "Ensures only one instance of a class exists. Implemented with a class holding a static instance property, and a static getInstance() method that creates or returns the existing instance.",
      },
      {
        q: "What is the Observer pattern?",
        level: "Medium",
        answer:
          "Objects (observers) subscribe to a subject (publisher). When state changes, subject notifies all observers. Used in EventEmitter, React state, Redux. Core of event-driven architecture.",
      },
      {
        q: "What is the Factory pattern?",
        level: "Medium",
        answer:
          "A function/class that creates objects without specifying exact class. Centralizes creation logic, returns different types based on input. Useful when creation logic is complex or varies.",
      },
      {
        q: "What is the Module pattern?",
        level: "Medium",
        answer:
          "Uses IIFE + closure to create private state with a public API. Returns an object with exposed methods. Predecessor to ES modules. Encapsulates implementation details.",
      },
      {
        q: "Explain SOLID principles in JavaScript context.",
        level: "Hard",
        answer:
          "Single Responsibility: one class, one job. Open/Closed: extend without modifying. Liskov: subtypes replaceable. Interface Segregation: specific interfaces. Dependency Inversion: depend on abstractions.",
      },
      {
        q: "What is the difference between new keyword and Object.create()?",
        level: "Hard",
        answer:
          "new: creates object, sets prototype to Constructor.prototype, binds 'this', runs constructor, returns object. Object.create(proto): creates object with specified prototype, no constructor called.",
      },
      {
        q: "What is mixins in JavaScript?",
        level: "Hard",
        answer:
          "Mixins copy methods from one object to another's prototype without inheritance. Use Object.assign(Target.prototype, mixin). Allows multiple behavior composition without multiple inheritance.",
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced & Common Problems",
    icon: "🚀",
    color: "#FFA07A",
    questions: [
      {
        q: "Implement throttle from scratch.",
        level: "Hard",
        answer:
          "function throttle(fn, limit) { let lastCall = 0; return function(...args) { const now = Date.now(); if (now - lastCall >= limit) { lastCall = now; return fn.apply(this, args); } }; }",
      },
      {
        q: "What is the difference between deep and shallow copy?",
        level: "Medium",
        answer:
          "Shallow copy copies top-level properties only; nested objects are still referenced. Deep copy duplicates all nested objects. Spread/Object.assign = shallow. structuredClone/JSON method = deep.",
      },
      {
        q: "How does the 'this' keyword work in different contexts?",
        level: "Hard",
        answer:
          "Global: window/undefined(strict). Method: the object. Constructor: new object. Arrow: lexical (outer this). Call/apply/bind: explicitly set. Event handler: the element (unless arrow function).",
      },
      {
        q: "What is tail call optimization?",
        level: "Hard",
        answer:
          "When a recursive call is the last operation in a function, JS engines can reuse the stack frame. Requires strict mode and the call to be in tail position. Prevents stack overflow for deep recursion.",
      },
      {
        q: "Explain JavaScript's garbage collection.",
        level: "Hard",
        answer:
          "Uses mark-and-sweep algorithm. GC marks all reachable objects from roots (global, stack). Unmarked objects are unreachable and collected. WeakRef and WeakMap allow GC-able references.",
      },
      {
        q: "What are Web Workers?",
        level: "Hard",
        answer:
          "Web Workers run scripts in background threads, separate from main thread. Don't block UI. Communicate via postMessage/onmessage. No DOM access. Useful for CPU-intensive tasks like image processing.",
      },
      {
        q: "Implement a basic event emitter.",
        level: "Hard",
        answer:
          "Class with an events Map. on(event, fn) pushes fn to event's array. emit(event, ...args) calls all fns for that event. off(event, fn) removes the fn. Used in Node.js EventEmitter pattern.",
      },
      {
        q: "What is lazy loading and how do you implement it?",
        level: "Medium",
        answer:
          "Load resources only when needed. For modules: dynamic import(). For images: Intersection Observer API or native loading='lazy' attribute. Improves initial page load performance.",
      },
      {
        q: "How do you handle memory leaks in JavaScript?",
        level: "Hard",
        answer:
          "Common causes: forgotten timers/listeners, closures holding references, detached DOM nodes, global variables. Fix: clearTimeout/removeEventListener, avoid storing DOM refs in closures, use WeakMap.",
      },
      {
        q: "What is tree shaking?",
        level: "Medium",
        answer:
          "Dead code elimination by module bundlers (Webpack, Rollup). Removes unused exports from the final bundle. Requires ES modules (static analysis). Reduces bundle size significantly.",
      },
    ],
  },
];

const levelColors = {
  Easy: { bg: "#d4edda", text: "#155724", border: "#c3e6cb" },
  Medium: { bg: "#fff3cd", text: "#856404", border: "#ffeeba" },
  Hard: { bg: "#f8d7da", text: "#721c24", border: "#f5c6cb" },
};

export default function JSInterviewApp() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  const [expandedQ, setExpandedQ] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [bookmarked, setBookmarked] = useState(new Set());
  const [answered, setAnswered] = useState(new Set());
  const [showBookmarked, setShowBookmarked] = useState(false);

  const currentTopic = topics.find((t) => t.id === activeTopic);

  const filteredQuestions = currentTopic.questions.filter((q) => {
    const matchLevel = filter === "All" || q.level === filter;
    const matchSearch = q.q.toLowerCase().includes(search.toLowerCase());
    const matchBookmark =
      !showBookmarked || bookmarked.has(`${activeTopic}-${q.q}`);
    return matchLevel && matchSearch && matchBookmark;
  });

  const totalQ = topics.reduce((sum, t) => sum + t.questions.length, 0);

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        minHeight: "100vh",
        background: "#0f0f13",
        color: "#f0ece4",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          padding: "32px 24px 24px",
          borderBottom: "1px solid #2a2a3e",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            letterSpacing: "4px",
            color: "#FF6B35",
            textTransform: "uppercase",
            marginBottom: "8px",
            fontFamily: "monospace",
          }}
        >
          Interview Prep
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(24px, 5vw, 42px)",
            fontWeight: "700",
            background: "linear-gradient(90deg, #FF6B35, #FFE66D, #4ECDC4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          JavaScript Mastery
        </h1>
        <p style={{ color: "#888", margin: "8px 0 16px", fontSize: "14px" }}>
          {totalQ} curated questions across {topics.length} topics
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {["Easy", "Medium", "Hard"].map((l) => (
            <div
              key={l}
              style={{
                padding: "4px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontFamily: "monospace",
                background: filter === l ? levelColors[l].bg : "transparent",
                color: filter === l ? levelColors[l].text : "#888",
                border: `1px solid ${filter === l ? levelColors[l].border : "#333"}`,
                cursor: "pointer",
              }}
              onClick={() => setFilter((f) => (f === l ? "All" : l))}
            >
              {l}
            </div>
          ))}
          <div
            style={{
              padding: "4px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontFamily: "monospace",
              background: showBookmarked ? "#2a2a3e" : "transparent",
              color: showBookmarked ? "#FFE66D" : "#888",
              border: `1px solid ${showBookmarked ? "#FFE66D" : "#333"}`,
              cursor: "pointer",
            }}
            onClick={() => setShowBookmarked((b) => !b)}
          >
            ★ Bookmarked ({bookmarked.size})
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "0",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "220px",
            flexShrink: 0,
            padding: "20px 12px",
            borderRight: "1px solid #2a2a3e",
            minHeight: "calc(100vh - 160px)",
          }}
        >
          {topics.map((t) => {
            const doneCount = t.questions.filter((q) =>
              answered.has(`${t.id}-${q.q}`),
            ).length;
            return (
              <div
                key={t.id}
                onClick={() => {
                  setActiveTopic(t.id);
                  setExpandedQ(null);
                }}
                style={{
                  padding: "10px 12px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginBottom: "6px",
                  background:
                    activeTopic === t.id ? `${t.color}18` : "transparent",
                  borderLeft:
                    activeTopic === t.id
                      ? `3px solid ${t.color}`
                      : "3px solid transparent",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontSize: "11px", marginBottom: "2px" }}>
                  <span style={{ marginRight: "6px" }}>{t.icon}</span>
                  <span
                    style={{
                      color: activeTopic === t.id ? t.color : "#ccc",
                      fontWeight: activeTopic === t.id ? "600" : "400",
                      fontSize: "13px",
                    }}
                  >
                    {t.title}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    paddingLeft: "18px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: "3px",
                      background: "#2a2a3e",
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: `${(doneCount / t.questions.length) * 100}%`,
                        height: "100%",
                        background: t.color,
                        borderRadius: "2px",
                        transition: "width 0.3s",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#666",
                      fontFamily: "monospace",
                    }}
                  >
                    {doneCount}/{t.questions.length}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px 24px" }}>
          {/* Topic Header */}
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "28px" }}>{currentTopic.icon}</span>
            <div>
              <h2
                style={{
                  margin: 0,
                  color: currentTopic.color,
                  fontSize: "22px",
                }}
              >
                {currentTopic.title}
              </h2>
              <p style={{ margin: 0, color: "#666", fontSize: "13px" }}>
                {filteredQuestions.length} questions shown
              </p>
            </div>
            <input
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                marginLeft: "auto",
                background: "#1a1a2e",
                border: "1px solid #333",
                borderRadius: "8px",
                padding: "8px 14px",
                color: "#f0ece4",
                fontSize: "13px",
                outline: "none",
                width: "200px",
                fontFamily: "monospace",
              }}
            />
          </div>

          {/* Questions */}
          {filteredQuestions.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#555",
                padding: "60px 0",
                fontFamily: "monospace",
              }}
            >
              No questions match your filters.
            </div>
          ) : (
            filteredQuestions.map((q, i) => {
              const key = `${activeTopic}-${q.q}`;
              const isOpen = expandedQ === key;
              const isBookmarked = bookmarked.has(key);
              const isDone = answered.has(key);
              const lc = levelColors[q.level];
              return (
                <div
                  key={key}
                  style={{
                    background: isDone ? "#0d1a0d" : "#14141e",
                    border: `1px solid ${isOpen ? currentTopic.color + "55" : isDone ? "#1a3a1a" : "#2a2a3e"}`,
                    borderRadius: "12px",
                    marginBottom: "10px",
                    overflow: "hidden",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    onClick={() => setExpandedQ(isOpen ? null : key)}
                    style={{
                      padding: "14px 16px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        color: "#444",
                        fontSize: "12px",
                        fontFamily: "monospace",
                        paddingTop: "2px",
                        minWidth: "22px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        fontSize: "14px",
                        lineHeight: "1.5",
                        color: isDone ? "#7ab87a" : "#e0dcd4",
                      }}
                    >
                      {q.q}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          padding: "2px 8px",
                          borderRadius: "10px",
                          background: lc.bg,
                          color: lc.text,
                          fontFamily: "monospace",
                        }}
                      >
                        {q.level}
                      </span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setBookmarked((b) => {
                            const nb = new Set(b);
                            nb.has(key) ? nb.delete(key) : nb.add(key);
                            return nb;
                          });
                        }}
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          color: isBookmarked ? "#FFE66D" : "#444",
                          transition: "color 0.2s",
                        }}
                      >
                        {isBookmarked ? "★" : "☆"}
                      </span>
                      <span
                        style={{
                          color: currentTopic.color,
                          fontSize: "16px",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                          transition: "transform 0.2s",
                        }}
                      >
                        ▼
                      </span>
                    </div>
                  </div>
                  {isOpen && (
                    <div style={{ padding: "0 16px 16px 50px" }}>
                      <div
                        style={{
                          background: "#0d0d17",
                          borderLeft: `3px solid ${currentTopic.color}`,
                          padding: "14px 16px",
                          borderRadius: "0 8px 8px 0",
                          fontSize: "13px",
                          lineHeight: "1.7",
                          color: "#b0aaa4",
                          fontFamily: "monospace",
                        }}
                      >
                        {q.answer}
                      </div>
                      <div
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          gap: "8px",
                        }}
                      >
                        <div
                          onClick={() =>
                            setAnswered((a) => {
                              const na = new Set(a);
                              na.has(key) ? na.delete(key) : na.add(key);
                              return na;
                            })
                          }
                          style={{
                            padding: "6px 14px",
                            borderRadius: "6px",
                            background: isDone ? "#1a3a1a" : "#1a2a1a",
                            border: `1px solid ${isDone ? "#4a7a4a" : "#2a3a2a"}`,
                            color: isDone ? "#7ab87a" : "#555",
                            fontSize: "12px",
                            cursor: "pointer",
                            fontFamily: "monospace",
                          }}
                        >
                          {isDone ? "✓ Marked done" : "Mark as done"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Footer stats */}
      <div
        style={{
          borderTop: "1px solid #2a2a3e",
          padding: "16px 24px",
          textAlign: "center",
          color: "#555",
          fontSize: "12px",
          fontFamily: "monospace",
        }}
      >
        {answered.size} / {totalQ} questions completed ·{" "}
        {Math.round((answered.size / totalQ) * 100)}% overall progress
      </div>
    </div>
  );
}
