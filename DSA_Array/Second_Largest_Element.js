const arr = [5,5];

const secondLargest = (arr) => {
  if (arr.length === 1) return -1;
  let firstLargest = arr[0];
  let secondLargest = arr[1];
  for (let num of arr) {
    if (firstLargest === secondLargest && secondLargest === num)
      secondLargest = -1;
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num < firstLargest && num > secondLargest) secondLargest = num;
  }
  return secondLargest;
};

console.log(secondLargest(arr));
