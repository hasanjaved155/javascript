const obj = {
  a: 1,
  b: true,
  c: "Hello",
  d: { m: 100, n: false },
  e: [99, 88],
};

const res = [];

for (let key in obj) {
  res.push([key, obj[key]]);
}

// console.log(res);

const sentence = "Hello World";
let ans = "";

// Sol 1:
for (let char of sentence) {
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    ans = ans + char.toUpperCase();
  } else {
    ans = ans + char.toLowerCase();
  }
  // console.log(char.charCodeAt(0));
}

console.log(ans);

// Sol 2:

// let ans2 = "";
// for (let char of sentence) {
//     if (char === char.toUpperCase()) {
//         ans2 += char.toLowerCase();
//     } else {
//         ans2 += char.toUpperCase();
//     }
// }

// console.log(ans2);

// sol 3:

let ans2 = "";

for (let char of sentence) {
  if (char.toLowerCase() === char) {
    ans2 += char.toUpperCase();
  } else {
    ans2 += char.toLowerCase();
  }
}

// console.log(ans2);

/////////////////////////////----/////////////////////////////////////////////

// sol1
// const sentence1 = "I dont repeat mistakes i date mistakes mistakes date repeat";

// function removeDuplicateWords(sentence) {
//     const words = sentence.split(" ");
//     const set = new Set(words);

//     let res = [];
//     for (let word of set) {
//         res.push(word);
//     }

//     return res.join(" ");
// }

// sol2

const sentence1 = "I dont repeat mistakes i date mistakes mistakes date repeat";

function removeDuplicateWords(sentence) {
  const words = sentence.split(" ");
  const map = new Map();
  const res = [];
  for (let word of words) {
    if (!map.has(word)) {
      map.set(word, 1);
      res.push(word);
    }
  }
  return res.join(" ");
}

console.log(sentence1);
console.log(removeDuplicateWords(sentence1));
