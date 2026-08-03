const arr = [0, 4, 1, 0, 5, 2, 0];

const zeroAtEnd = (arr) => {
  let pointer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[pointer];
      arr[pointer] = arr[i];
      arr[i] = temp;
      pointer++;
    }
  }
  return arr;
};

// console.log(zeroAtEnd(arr));

const zeroAtEnd2 = function (arr) {
  let pointer = 0;

  for (const num of arr) {
    if (num !== 0) {
      arr[pointer] = num;
      pointer++;
    }
  }

  for (let i = pointer; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};

console.log(zeroAtEnd2(arr));
