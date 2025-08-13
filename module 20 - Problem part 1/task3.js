//? Write a function to count the number of vowels in a string.

function countStr(str) {
  console.log(str);
  let vowerArray = [];
  for (const st of str) {
    if (st === "a" || st === "e" || st === "i" || st === "o" || st === "u") {
      vowerArray.push(st);
    }
  }
  return vowerArray.length;
}

const str = "Write a function to count the number of vowels in a string.";
const count = countStr(str);
console.log(count);
