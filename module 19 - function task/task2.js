const number = 11;

function identifyTheNumber(number) {
  let result = "";
  if (number % 2 !== 0) {
    result = number * 2;
    return result;
  } else {
    result = number / 2;
    return result;
  }
}

let result = identifyTheNumber(number);
console.log(result);
