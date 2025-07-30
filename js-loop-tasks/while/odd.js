// let i = 61;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }

let i = 61;
while (i <= 100) {
  if (i % 2 == 0) {
    // ! why i++ is needed here
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// for (i = 61; i <= 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }
