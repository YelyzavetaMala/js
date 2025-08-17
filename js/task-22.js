function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

multiply(17, 6, 25);

function multiply1(x, y, z) {
  const product = x * y * z;
  return product;
}

const result = multiply1(2, 3, 5);
console.log(result);
