console.time('label');
const errorMsg = "the # is not even";
for (let number = 2; number <= 100000; number++) {
  console.log(`the # is ${number}`);
}
// for (let number = 2; number <= 900000; number++) {
//   console.log(`the # is ${number}`);
// }

console.timeEnd('label'); // 27432 ms