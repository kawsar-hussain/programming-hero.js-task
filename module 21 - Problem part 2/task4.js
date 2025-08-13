// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

function findAveragePhonePrice(products) {
  let sum = 0;
  let avrg = [];
  for (const product of products) {
    sum += product.price;
    avrg.push(product.price);
  }
  avrg = sum / avrg.length;
  return avrg;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const average = Math.round(findAveragePhonePrice(phones));
console.log(average);
