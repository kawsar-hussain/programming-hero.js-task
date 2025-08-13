//? You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function count(numbers, num) {
  let newArray = [];
  for (const number of numbers) {
    if (number == num) {
      newArray.push(number);
    }
  }
  return newArray.length;
}

const numbers = [5, 6, 11, 12, 98, 5];
console.log(count(numbers, 25));
