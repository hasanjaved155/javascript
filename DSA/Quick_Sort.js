let arr = [5, 7, 2, 3, 8, 1, 9, 4];
let start = 0;
let end = arr.length - 1;

function quick_Sort(arr, start, end) {
  if (start >= end) return;

  let pivotIndex = check(arr, start, end);

  quick_Sort(arr, start, pivotIndex - 1);
  quick_Sort(arr, pivotIndex + 1, end);
}

function check(arr, start, end) {
  let pivot = arr[end];
  let index = start;

  for (i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }

  [arr[index], arr[end]] = [arr[end], arr[index]];
  return index;
}

quick_Sort(arr, start, end);
console.log(arr);
