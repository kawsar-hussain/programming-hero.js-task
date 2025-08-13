// function sumOfOddNumbers(numbers) {
//   let sum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }

// const numbers = [42, 13, 58, 65, 81];

// console.log(sumOfOddNumbers(numbers));

//!average of all odd numbers

function sumOfOddNumbers(numbers) {
  let sum = 0;
  let avg = 0;
  let oddArray = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sum += numbers[i];
      oddArray.push(numbers[i]);
    }
  }

  avg = sum / oddArray.length;
  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 105];

console.log(sumOfOddNumbers(numbers));
