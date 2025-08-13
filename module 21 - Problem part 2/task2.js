//? Find the friend with the smallest name.

function smallestName(names) {
  let smallestName = names[0];
  for (const name of names) {
    if (smallestName.length > name.length) {
      smallestName = name;
    }
  }
  return smallestName;
}

const names = ["rahim", "robin", "rafi", "ron", "rashed"];
console.log(smallestName(names));
