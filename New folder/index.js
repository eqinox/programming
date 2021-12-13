// const arr = [1, 3, 3, 5, 8];
// let heplArray = new Set();
// let result = false;
// for (let item of arr) {
//   if (heplArray.indexOf(item) === -1) {
//     heplArray.push(item);
//   } else {
//     result = true;
//     break;
//   }
// }

// console.log(result);

// 5 * 4 * 3 *2 * 1

function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
