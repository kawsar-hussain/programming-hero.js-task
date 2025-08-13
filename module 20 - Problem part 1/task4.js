//? Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function findLongestWord(string) {
  let array = string.split(" ");
  let max = array[0];
  for (const word of array) {
    if (max.length < word.length) {
      max = word;
    }
  }
  return max;
}

const str = "I am learning Programming to become a programmer";
const longestWord = findLongestWord(str);
console.log(longestWord);
