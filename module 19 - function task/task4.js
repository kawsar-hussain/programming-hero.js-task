function count_zero(numbers) {
  let zeroArray = [];
  for (const number of numbers) {
    if (number === 0) {
      zeroArray.push(number);
    }
  }
  return zeroArray.length;
}

let numbers = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0];
let count = count_zero(numbers);
console.log(count);
