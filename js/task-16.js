/* процедурне програмування
const summ = 20000;
const month = 12;
const p = 1000;

const credit = (sum, date, p) => {
  return sum + p * date;
};
console.log(credit(summ, month, p));

об'єктно орієнтоване програмування

const credit = {
  summ: 20000,
  month: 12,
  p: 1000,
  result() {
    return this.summ + this.p * this.month;
  },
};
console.log(credit.result());



class Bank {
  static type = "private";
  constructor(options) {
    this.summ = options.summ;
    this.month = options.manth;
    this.p = options.p;
  }
  credit() {
    return console.log("I am Privat");
  }
}
const userBank = new Bank({
  summ: 30000,
  month: 5,
  p: 500,
});
userBank.credit();

class NewBank extends Bank {
  constructor(options) {
    super(options);
    this.card = options.card;
  }
  credit() {
    super.credit();
    return console.log("I am Aval");
  }
}
const aval = new NewBank({
  summ: 30000,
  month: 5,
  p: 500,
  card: true,
});
console.log(aval.credit());



class User {
  constructor(props) {
    this.name = props.name;
  }
  firstName = "";
  lastName = "";
  age = "";
  city = "";

  set name(newName) {
    const nameRow = newName.split("");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }
  get name() {
    return `First name: ${this.firstName} last name: ${this.lastName}`;
  }
}

const Liza = new User({
  name: "Liza Mala",
});

const Dasha = new User({
  name: "Dasha Happy",
});

console.log(Liza);
console.log(Dasha);


const a = {
  x: 1,
  y: 2,
};

const b = Object.create(a);

console.log(b);


const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
  this.sales = function () {
    this.sales += 1;
  };
};

const ann = new Manager("Anna", 5);
const ivan = new Manager("Ivan", 10);

Manager.prototype.sale = function () {
  this.sales += 1;
};

console.log(ann.sales);
ann.sales();

console.dir(Manager);

class CoffeMachine {
  water = 0;
  constructor(power) {
    this.power = power;
  }
  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._water = value;
  }
}
let coffeeMachine = new CoffeMachine(100);

coffeeMachine.waterAmount = 20;
console.log(coffeeMachine);

*/
