function average(num) {
  let sum = 0;
  let avrg = 0;
  for (const number of num) {
    sum += number;
  }
  avrg = sum / num.length;
  return parseInt(avrg);
}

let numbers = [55, 66, 85, 99, 25, 58, 95, 75, 58];
let avrg = average(numbers);
console.log(avrg);
