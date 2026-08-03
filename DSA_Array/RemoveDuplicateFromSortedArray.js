const arr = [1, 1, 2, 3, 3, 3, 4, 5, 5, 6];

// function removeDuplicate(arr) {
//   return arr.filter((value, index) => arr.indexOf(value) === index);
// }

// console.log(removeDuplicate(arr));

function removeDuplicate(arr) {
  if (arr.length === 0) return 0;
  let pointer = 0;
  for (const num of arr) {
    if (num !== arr[pointer]) {
      pointer++;
      arr[pointer] = num;
    }
  }
  return arr.slice(0, pointer + 1);
}

console.log(removeDuplicate(arr));
