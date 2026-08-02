let arr = [1, 3, 2, 5, 6, 9, 7, 8, 4];

//1. two pointer approach
function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
  return array;
}

// console.log(reverseArray(arr)); // Output: [4, 8, 7, 9, 6, 5, 2, 3, 1]

//2. using built-in method
function reverseArrayBuiltIn(array) {
  return array.reverse();
}
// console.log(reverseArrayBuiltIn(arr)); // Output: [4, 8, 7, 9, 6, 5, 2, 3, 1]

//3. using recursion
function reverseArrayRecursive(array) {
  if (array.length === 0) {
    return [];
  } else {
    return [array.pop()].concat(reverseArrayRecursive(array));
  }
}
// console.log(reverseArrayRecursive([...arr])); // Output: [4, 8, 7, 9, 6, 5, 2, 3, 1]
