let i = 1;
let sum = 0;

while (i <= 20) {
  sum = sum + i;
  i++;
  if (sum > 100) {
    break;
  }
}

console.log(sum);
