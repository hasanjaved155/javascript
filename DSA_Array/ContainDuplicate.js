const arr = [3, 2, 3, 5];

function containDuplicat(arr) {
  let set = new Set();

  for (const element of arr) {
    if (set.has(element)) {
      return true;
    }

    set.add(element);
  }

  return false;
}

console.log(containDuplicat(arr));
