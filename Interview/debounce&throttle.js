function message(text) {
  console.log(`hello ${text}`);
}

// debounce

const debounce = (fn, delay) => {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// const debounceResult = debounce(message, 1000);
// debounceResult("javed");
// debounceResult("Hasan");
// debounceResult("jack");
// debounceResult("sparrow");
// Only the last call to debounceResult will execute after 1000ms, printing "hello sparrow"

// throttle

const throttle = (fn, delay) => {
  let currentTime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - currentTime >= delay) {
      currentTime = now;
      fn(...args);
    }
  };
};

const throttleResult = throttle(message, 1000);
// throttleResult("javed");
// setTimeout(() => {
//   console.log("500ms:", Date.now());
//   throttleResult("Hasan"); // T=500ms ✗
// }, 500);

// setTimeout(() => {
//   console.log("1000ms:", Date.now());
//   throttleResult("jack"); // T=1000ms ✓
// }, 1000);

// setTimeout(() => {
//   console.log("2100ms:", Date.now());
//   throttleResult("sparrow"); // T=2100ms ✓
// }, 2100);
