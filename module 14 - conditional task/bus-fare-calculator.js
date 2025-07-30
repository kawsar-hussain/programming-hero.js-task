const price = 800;
const age = 70;
const student = true;

if (age < 10) {
  console.log("ticket is free");
} else if (student) {
  console.log(price / 2);
} else if (age >= 60) {
  console.log(price - (price * 15) / 100);
} else {
  console.log("you have to pay = " + price);
}
