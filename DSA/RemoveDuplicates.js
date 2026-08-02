let arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(array) {
  return [...new Set(array)];
}

// console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]

// Alternative approach using filter
function removeDuplicatesFilter(array) {
  return array.filter((item, index) => {
    console.log(array.indexOf(item));
    return array.indexOf(item) === index;
  });
}

console.log(removeDuplicatesFilter(arr)); // Output: [1, 2, 3, 4, 5]

// another approach pointer technique
let position = 0;
function removeDuplicatesInPlace(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[position]) {
      position++;
      array[position] = array[i];
    }
  }
  return array.slice(0, position + 1);
}

//console.log(removeDuplicatesInPlace(arr)); // Output: [1, 2, 3, 4, 5]

// Using a Map to preserve order
function removeDuplicatesMap(array) {
  const map = new Map();
  array.forEach((element) => {
    map.set(element, 1);
  });
  return Array.from(map.keys());
}

// console.log(removeDuplicatesMap(arr));
