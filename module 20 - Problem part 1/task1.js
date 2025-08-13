//? Write a function to convert temperature from Celsius to Fahrenheit.

function toFahrenheit(temperature) {
  let Fahrenheit = (temperature * 9) / 5 + 32;
  return Fahrenheit;
}

let temperature = 30;
let result = toFahrenheit(temperature);
console.log(temperature, "Degree =", result, "Fahrenheit");
