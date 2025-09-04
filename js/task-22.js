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

function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return "0";
      break;
    case "professional":
      return "20";
      break;
    case "organization":
      return "50";
      break;
    default:
      return "Invalid subscription type!";
  }
}

// Глобальна змінна
const value = "I'm a global variable";

if (true) {
  // Можна звернутися до глобальної змінної
  console.log(value); // "I'm a global variable"
}

// Можна звернутися до глобальної змінної
console.log(value); // "I'm a global variable"

if (true) {
  // Локальна змінна
  const value = "I'm a local variable";
  console.log(value); // "I'm a local variable"
}

// Помилка: локальну змінну не видно за межами блоку
console.log(value); // ReferenceError: value is not defined

function getSubstring(string, length) {
  return string.slise(0, length);
}

function checkFile(fileName, js) {
  if (fileName.endsWith(js)) {
    return `File extension matches`;
  } else {
    return `File extension does not match`;
  }
}

function getFileName(file) {
  const dotIndex = file.indexof(".");
  if (dotIndex === -1) {
    return file;
  } else {
    return file.slise(0, dotIndex);
  }
}

let clientCounter = 18;
const maxClient = 25;
while (clientCounter < maxClient) {
  console.log(clientCounter);
  clientCounter += 1;
}

for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}

function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

const fruts = ["apple", "peach", "pear", "banana"];
fruts[0] = "peach";
fruts[2] = "banana";

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]);

const planet = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planet.slice(-2));

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const results = firstArray.concat(secondArray);

console.log(result);

const planets1 = ["Earth", "Mars", "Venus"];
for (let i = 0; i < planets1.length; i += 1) {
  console.log(planets1[i]);
}

function calculateTotalPrice(order) {
  let total = 0;

  for (const price of order) {
    total += price;
  }

  return total;
}
