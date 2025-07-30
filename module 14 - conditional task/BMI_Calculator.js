const weight = 58;
const height = 1.6509999999999998;
const BMI = weight / height ** 2;

if (BMI < 18.5) {
  console.log("You are under weight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("you are over weight");
} else {
  console.log("you are obese");
}
