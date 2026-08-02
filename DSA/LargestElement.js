let arr = [10, 20, 3, 60, 8];

function largestElement(array) {
  return Math.max(...array);
}

//console.log(largestElement(arr)); // Output: 60

// Alternative approach using reduce
function largestElementReduce(array) {
  return array.reduce(
    (max, current) => (current > max ? current : max),
    array[0],
  );
}
//console.log(largestElementReduce(arr)); // Output: 60

// Another approach using sorting
function largestElementSort(array) {
  const sortedArray = array.sort((a, b) => b - a);
  return sortedArray[0];
}
// console.log(largestElementSort(arr)); // Output: 60

// Using a loop to find the largest element
function largestElementLoop(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
// console.log(largestElementLoop(arr)); // Output: 60

// Using ES6 spread operator with Math.max
function largestElementSpread(array) {
  return Math.max.apply(null, array);
}
// console.log(largestElementSpread(arr)); // Output: 60
