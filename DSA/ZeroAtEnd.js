let arr = [1, 0, 4, 0, 0, 6, 7, 4];

//two pointer approach
//move zero at end
function moveZeroToEnd(array) {
  let pointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      if (i === 0) {
        pointer++;
        continue;
      }
      [array[i], array[pointer]] = [array[pointer], array[i]];
      pointer++;
    }
  }
  return array;
}

// console.log(moveZeroToEnd(arr)); // Output: [1, 4, 6, 7, 4, 0, 0]

// move zero at start

//two pointer approach
function moveZeroAtStart(array) {
  let pointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      if (i === 0) {
        pointer++;
        continue;
      }
      [array[i], array[pointer]] = [array[pointer], array[i]];
      pointer++;
    }
  }
  return array;
}

console.log(moveZeroAtStart(arr)); // Output: [1, 4, 6, 7, 4, 0, 0]
