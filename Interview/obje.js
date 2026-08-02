const obj = {
  a: 1,
  b: 2,
  sum: function () {
    return this.a + this.b;
  },
  startTimer: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.a + this.b);
    }, 1000);
  },
  startTimer2: function () {
    setTimeout(function () {
      console.log(this);
      console.log(this.a + this.b);
    }, 1000);
  },
  sum2: () => {
    console.log(this);
    return this.a + this.b;
  },
};

obj.startTimer(); // 3
console.log(obj.sum()); // 3

// const res = obj.sum.bind(obj)
// console.log(res());

//////--------or--------------//

const res = obj.sum;
// res();
// console.log(res());

// const res = obj.sum();
// console.log(res);
