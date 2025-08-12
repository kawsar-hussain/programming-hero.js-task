function minPrice(productPrice) {
  let min = productPrice[0];
  for (const product of productPrice) {
    if (product < min) {
      min = product;
    }
  }
  return min;
}

const productPrice = [25000, 30000, 18000, 50000, 15000, 35000];
const minPricesProduct = minPrice(productPrice);
console.log(minPricesProduct);
