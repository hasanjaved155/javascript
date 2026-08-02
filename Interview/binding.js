//-----------------1.implicit binding-----------------//
// "use strict";

// console.log(this);

function greet() {
  console.log(this);
}
// greet(); // undefined (in strict mode) or global object (in non-strict mode)

const user = {
  name: "Ali",
  showName: function () {
    console.log(this.name);
  },
};

// console.log(this);
user.showName(); // Ali

// console.log(user.showName)
const fn = user.showName;
// fn(); // undefined (or error in strict)

//-----------------2.explicit binding-----------------//

// const car = {
//   name: "BMW",
//   price: 200,
//   start: () => {
//     const startCar = () => {
//       console.log(this);
//       console.log(`Starting the car ${this.name}`);
//     };
//     startCar();
//   },
// };

// car.start();

const car = {
  name: "BMW",
  price: 200,
  startCar: () => {
    console.log(this);
    console.log(`Starting the car ${this.name}`);
  },
};

car.startCar();
