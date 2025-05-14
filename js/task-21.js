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
