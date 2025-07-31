let i = 1;
let square = 0;

while (i <= 100) {
  if ((square = i * i > 100)) {
    break;
  }
  square = i * i;
  console.log(square);
  i++;
}
