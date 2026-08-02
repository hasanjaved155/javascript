// "use strict";
function Human(name, age) {
  this.name = name;
  this.age = age;
  // return 2;
}

const person = new Human("Javed", 24);
// console.log(person) // Human { name: 'Javed', age: 24 }
const person2 = Human("Jack", 30);
// console.log(person2); // undefined
// console.log(name); // Jack
// console.log(age); // 30
// console.log(global.name);

////////////////////--------------------------------//////////////////////

function sum(a, b) {
  "use strict";
  a = 100;
  b = 200;

  return arguments[0] + arguments[1];
}

let x = 10;
let y = 20;

// console.log(sum(x,y)) //300

function addNum(x, y) {
  const res = x + y;
  console.log(res);
}
// addNum(3, 4); //function call
// // ....5000 line
// // addNum(100, 200);

// addNum(5, 6);//11

// addNum(2.3, 4.5);//6.8

// addNum(true, 50);//51

// addNum(true, false);//1

// addNum(true, "hello");//truehello

// addNum(40, []);//40

////////////////////////////----------------[----------------]//////////////////////

// Function expression
// const squareRoot = function (num) {
//     return Math.sqrt(num);
// }

// console.log(squareRoot);
// console.log(squareRoot(9));

////////////////////////////////----------------[----------------]//////////////////////

// const arr = [1,2,3,4,5]

// arr.slice(1,3)
// console.log(arr);

////////////////-----------------[----------------]//////////////////////

const num = 100;

// console.log(num++);

// console.log(message);

// num.fly();
