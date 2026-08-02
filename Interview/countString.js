const str = "hello javed how are you";
const vowels = ["a", "e", "i", "o", "u"];

const obj = {};
function countVowels(str) {
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
    // obj[char] = (obj[char]??0) + 1;
    //-------------------or------------------//

    if (char === " ") continue;

    // if (char in obj) {
    //   obj[char]++;
    // } else {
    //   obj[char] = 1;
    // }
    //-------------------or------------------//
    // obj[char] = (obj[char] ?? 0) + 1;
    obj[char] = (obj[char] ? obj[char] : 0) + 1;
    //---------------------------or------------------//
    // obj[char] = (char in obj ? obj[char] : 0) + 1;
    //-------------------or------------------//
    // obj[char] = (obj[char] || 0) + 1;
  }

  return count;
}
console.log(countVowels(str)); // Output: 9
console.log(obj);
