const myScore = 79;
const friendScore = 45;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("go for launce");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("good luck next time");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("I won't see my friend message");
  } else {
    console.log("you are available for eating block dear friend");
  }
} else {
  console.log("mai bahut peresan main hoo");
}

//
