let arr = [1, 2, 3, 4, 5, 6];
let k = 3;

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;

  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

let rotateArraybyK = rotateArray(arr, k);
console.log(rotateArraybyK);
