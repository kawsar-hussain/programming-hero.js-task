//? Find the lowest number in the array below.

const numbers = [167, 190, 120, 165, 137];

function minNumber(num) {
  let min = num[0];
  for (const number of num) {
    if (min > number) {
      min = number;
    }
  }
  return min;
}

console.log(minNumber(numbers));
