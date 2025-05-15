let num = -3;

if (num > 0) {
  console.log(false);
} else {
  console.log(true);
}

let world = true;

if (world === "test") {
  console.log(true);
} else {
  console.log(false);
}

let sum = 10;

if (sum >= 10) {
  console.log(sum - 5);
} else {
  console.log(sum + 5);
}

const student = {
  getInfo: function () {
    console.log(`Name is : ${this.name}`);
    console.log(`Спеціальність: ${this.specialty}`);
    console.log(`Середній бал: ${this.averageGrade}`);
    console.log(`Пропущено занять: ${this.missedClasses}`);
  },
};
const student1 = {
  name: "Марія",
  specialty: "Інформатика",
  averageGrade: 4.7,
  missedClasses: 3,
};

const student2 = {
  name: "Олег",
  specialty: "Економіка",
  averageGrade: 4.2,
  missedClasses: 1,
};

const student3 = {
  name: "Ірина",
  specialty: "Медицина",
  averageGrade: 4.9,
  missedClasses: 0,
};

student.getInfo.call(student1);
student.getInfo.apply(student2);

function shop(productName, pricePerKg, quantityKg) {
  const totalCost = pricePerKg * quantityKg;
  return `${productName}: ${totalCost.toFixed(2)} грн`;
}
console.log(shop("banana", 30, 4.5));
console.log(shop("cherry", 58, 1.3));
console.log(shop("orange", 89, 3.4));

class Abonent {
  constructor(name, number) {
    this._name = name;
    this._number = number;
  }

  // setter для оновлення номера
  set updateNumber(newNumber) {
    this._number = newNumber;
  }

  // getter для виведення даних
  get info() {
    return `Ім'я: ${this._name}, Номер: ${this._number}`;
  }
}

// Створення трьох абонентів
const user1 = new Abonent("Оля", "0931234567");
const user2 = new Abonent("Іван", "0677654321");
const user3 = new Abonent("Марія", "0509876543");

// Вивід даних
console.log(user1.info);
console.log(user2.info);
console.log(user3.info);

// Оновлення номера
user2.updateNumber = "0660001122";
console.log("Оновлений номер Івана:", user2.info);
