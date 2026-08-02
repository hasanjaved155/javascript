let arr = [1, 2, 5, 3, 8, 7, 6];
function missingNumber(array) {
  const n = array.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = array.reduce((total, currentElement) => total + currentElement, 0);
  return total - sum;
}

console.log(missingNumber(arr)); // Output: 4
