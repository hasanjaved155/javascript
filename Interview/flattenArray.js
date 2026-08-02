const myArr = [[1, 2], [3, 4, 5], ["Hello", true], [5, [true, false]], 99, 100];

function flattenArray(arr) {
  const result = arr.reduce((acc, curr) => acc.concat(curr), []);
  return result;
}
// console.log(flattenArray(myArr));

// const res = myArr.flat(Infinity);
// console.log(res);

const res = myArr.flat(1);
// console.log(res);

function flattenArray2(arr) {
  const result = [];
  const stack = [...arr];

  while (stack.length) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
    } else {
      result.push(current);
    }
  }
  return result.reverse();
}

console.log(flattenArray2(myArr));
