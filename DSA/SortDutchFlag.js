let arr = [1, 1, 0, 1, 2, 2, 0, 1, 1, 2];

function sortDutchFlag(arr) {
  let start = 0,
    mid = 0,
    end = arr.length - 1;
  while (mid <= end) {
    if (arr[mid] === 0) {
      [arr[start], arr[mid]] = [arr[mid], arr[start]];
      start++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[end], arr[mid]] = [arr[mid], arr[end]];
      end--;
    }
  }
  return arr;
}

console.log(sortDutchFlag(arr));
