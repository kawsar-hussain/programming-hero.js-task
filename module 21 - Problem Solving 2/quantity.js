function wearingCost(shirt, pant, shoe) {
  const perShirt = 400;
  const perPant = 700;
  const perShoe = 1100;

  const totalShirtPrice = perShirt * shirt;
  const totalPantPrice = perPant * pant;
  const totalShoePrice = perShoe * shoe;

  const totalCost = totalShirtPrice + totalPantPrice + totalShoePrice;

  return totalCost;
}

const totalCost = wearingCost(1, 2, 1);
console.log(totalCost);
