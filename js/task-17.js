/*

class CircleBox {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = "none";
  }
  show() {
    this.$el.style.display = "block";
  }
}

class CircleItem extends CircleBox {
  constructor(option) {
    super(option.selector);
    this.$el.style.width = option.size + "px";
    this.$el.style.heigth = option.size + "px";
    this.$el.style.borderRadius = "50%";
    this.$el.style.background = option.color;
  }
}

const CirclRed = new CircleItem({
  selector: "#circlRed",
  color: "red",
  size: 50,
});

const CirclGreen = new CircleItem({
  selector: "#circlGreen",
  color: "green",
  size: 70,
});

const circlBlack = new CircleItem({
  selector: "#circlBlack",
  color: "black",
  size: 30,
});





function Car(name, color) {
  this.name = name;
  this.color = color;
}

Car.prototype.message = function () {
  console.log(`${this.name} is ${this.color} color`);
};
Car.prototype.start = function () {
  console.log(`${this.name} is start! `);
};

const Audi = new Car("audi", "red");
const opel = new Car("opel", "green");




let message = {
  messageHello() {
    console.log(`Hello, ${this.name}`);
  },
  messageBey() {
    console.log(`Bye, ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, message);

new User("Ivan").messageHello();

*/
