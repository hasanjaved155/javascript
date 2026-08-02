let arr = [6, 3, 9, 5, 2, 8];

let start = 0;
let end = arr.length - 1;

function merge_Sort(arr, start, end) {
  // no element
  if (start > end) return [];

  // single element
  if (start === end) {
    return [arr[start]];
  }

  let mid = Math.floor(start + (end - start) / 2);
  let leftArray = merge_Sort(arr, start, mid);
  let rightArray = merge_Sort(arr, mid + 1, end);

  return sortedMergeArray(leftArray, rightArray);
}

function sortedMergeArray(leftArray, rightArray) {
  let i = 0,
    j = 0,
    n = leftArray.length,
    m = rightArray.length;
  let ans = [];
  while (i < n && j < m) {
    if (leftArray[i] < rightArray[j]) {
      ans.push(leftArray[i]);
      i++;
    } else {
      ans.push(rightArray[j]);
      j++;
    }
  }
  while (i < n) {
    ans.push(leftArray[i]);
    i++;
  }
  while (j < m) {
    ans.push(rightArray[j]);
    j++;
  }
  return ans;
}

let sortedArr = merge_Sort(arr, start, end);
console.log(sortedArr);
