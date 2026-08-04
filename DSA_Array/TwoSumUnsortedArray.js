const arr = [3, 2, 4, 5];
let target = 6;

function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i];
    }

    map.set(arr[i], i);
  }

  return [];
}

console.log(twoSum(arr, target));
