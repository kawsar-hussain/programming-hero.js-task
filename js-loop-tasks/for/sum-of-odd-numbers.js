let sum = 0;
for (let i = 91; i <= 129; i++) {
  console.log(String(sum) + " + " + String(i) + " = " + sum);
  sum += i;
}
console.log("Total: " + sum);
