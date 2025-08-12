function odd_even(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let number = 7;
let result = odd_even(number);
console.log(result);
