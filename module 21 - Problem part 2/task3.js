//? Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop, tablet, mobile) {
  const sum = laptop + tablet + mobile;
  return sum;
}

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

console.log(calculateElectronicsBudget(laptop, tablet, mobile));
