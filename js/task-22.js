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
