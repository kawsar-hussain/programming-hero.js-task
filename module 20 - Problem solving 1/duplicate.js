// let listOfFruits = ["mango", "banana", "apple", "mango", "date", "apple"];

// function duplicate(items) {
//   let uniqueArray = [];
//   for (const item of items) {
//     if (uniqueArray.includes(item)) {
//       continue;
//     }
//     uniqueArray.push(item);
//   }
//   return uniqueArray;
// }
// let uniqueItems = duplicate(listOfFruits);
// console.log(uniqueItems);

let listOfFruits = ["mango", "banana", "apple", "Mango", "date", "apple"];

function duplicate(items) {
  let uniqueArray = [];
  for (const item of items) {
    if (uniqueArray.includes(item) === false) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
}
let uniqueItems = duplicate(listOfFruits);
console.log(uniqueItems);
