let arr = [1, 2, 2, 4, 2, 6, 2, 7, 2];
function majorityCandidateVote(arr) {
  let count = 1;
  let candidate = arr[0];
  // Finding the candidate
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    }
  }
  // Verifying the candidate
  count = 0;
  //   arr.forEach((num) => num === candidate && count++);

  arr.forEach((num) => {
    if (num === candidate) {
      count++;
    }
  });

  return count > Math.floor(arr.length / 2) ? candidate : -1;
}

// console.log(majorityCandidateVote(arr));

function majorityCandidateWin(arr) {
  let map = {};

  arr.forEach((element) => {
    map[element] = (map[element] || 0) + 1;
  });

  // console.log(map);
  // for (let i = 0; i < arr.length; i++) {
  //   if (map[arr[i]] > arr.length / 2) {
  //     return arr[i];
  //   }
  // }

  // Object.entries(map).forEach(([key, value]) => {
  //   console.log(key, value);
  //   if (value > arr.length / 2) {
  //     return key;
  //   }
  // });

  for (const [key, value] of Object.entries(map)) {
    if (value > arr.length / 2) {
      return key;
    }
  }
}

console.log(majorityCandidateWin(arr));
