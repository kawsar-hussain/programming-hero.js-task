for (let i = 55; i <= 85; i += 2) {
  if (i % 5 === 0) {
    console.log("divisible by 5= " + i);
    continue;
  }
  console.log(i);
}
