const statement = "I am a hard working person";

let reverseStatement = statement.split(" ");
// let finalResult = "";

// for (const reverse of reverseStatement) {
//   finalResult = reverse + " " + finalResult;
// }
// console.log(finalResult);

reverseStatement.reverse();
reverseStatement = reverseStatement.join(" ");
console.log(reverseStatement);
