let arr = [1, 2, 3, 4, 5, 6];
let target = 5;

function targetMatch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum > target) end--;
    else if (sum < target) start++;
    else return [start, end];
  }
}

console.log(targetMatch(arr, target));
