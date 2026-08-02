const fs = require("fs");

//----------------1. synchronous call----------------------//
// fs.writeFileSync("./test.txt", "hey javed whatsapp");

// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", "hey there\n");
// fs.cpSync("./test.txt", "./copy.txt");//copying file
// fs.unlinkSync("./copy.txt");//deleting file

// console.log(fs.statSync("./test.txt"));

//---------------2. asynchronous call---------------------//
// fs.writeFile(
//   "./test.txt",
//   "hey javed whatsapp!! What are you doing??",
//   (err) => {},
// );

// fs.readFile("./test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFile("./test.txt", "hey javed\n", (err) => {});
