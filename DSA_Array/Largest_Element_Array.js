const arr = [2, 5, 1, 9, 7];

function findLargest(arr) {
  var max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}
console.log(findLargest(arr));
