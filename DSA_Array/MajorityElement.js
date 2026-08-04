const arr = [2, 2, 1, 1, 1, 2, 2];

function majorityElement(arr) {
  let map = new Map();

  for (let value of arr) {
    map.has(value) ? map.set(value, map.get(value) + 1) : map.set(value, 1);
  }

  for (let [key, value] of map) {
    if (value > arr.length / 2) return key;
  }
  return -1;
}

// console.log(majorityElement(arr));

function Boyer_Moore(arr) {
  let candidate = null;
  let count = 0;

  for (const member of arr) {
    if (count === 0) candidate = member;
    if (member === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

console.log(Boyer_Moore(arr));
