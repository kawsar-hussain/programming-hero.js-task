const brandSpecs = [
  { brand: "apple", price: 150000, camera: "20mp", battery: "4820mAh" },
  { brand: "samsung", price: 120000, camera: "20mp", battery: "4820mAh" },
  { brand: "realmi", price: 15000, camera: "20mp", battery: "4820mAh" },
  { brand: "xiaomi", price: 18000, camera: "20mp", battery: "4820mAh" },
  { brand: "motorola", price: 25000, camera: "20mp", battery: "4820mAh" },
];

const prices = brandSpecs.map((item) => item.price);
console.log(prices);
