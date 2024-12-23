function createURL(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}
const comUrl = createURL("com");
const comUa = createURL("ua");
console.log(comUrl("google"));
console.log(comUa("fb"));

/*
function abc() {
  console.log("В функції");
  console.log(this);
}
abc();
document.querySelector("p").onclick = abc;

function changeColor() {
  console.log(this);
  this.style.background = "green";
}
document.querySelector("div").onclick = changeColor;


function changeColor() {
  this.style.background = "green";
}
let user = document.querySelectorAll("div");
user.forEach(function (element) {
  element.onclick = changeColor;
});


function hello() {
  console.log(this);
}

const user = {
  name: "Ivan",
  age: 30,
  hello: hello,
  sayHelloWindow: hello.bind(windo),
  info: function (city) {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`City is ${city}`);
  },
};
user.sayHelloWindow();
user.info();

const Ann = {
  name: "Ann",
  age: 23,
};
const Nata = {
  name: "Natalia",
  age: 50,
};

user.info.bind(Ann)("Kyiv");
const nataInfo = user.info.bind(Nata, "Odesa")();
nataInfo();


const userInfo = {
  name: "name",
  age: 98,
  logInfo: function (job) {
    console.group(`${name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`Age is : ${this.age}`);
    console.log(`Job is : ${job}`);
    console.groupEnd();
  },
};

const Vano = {
  name: "Ivan",
  age: 45,
};
userInfo.logInfo.call(Vano, "developer");


const message = function (name, stars) {
  console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
};

const Bukovel = { hotel: "Bukovel" };
const Turist = { hotel: "Turist" };

message.call(Bukovel, "Ivan", "5");
message.call(Turist, "Ivan", "3");

message.apply(Bukovel, ["Ivan", "5"]);

message.bind(Bukovel, "Ivan", "5")();


const cart = {
  showItems() {
    console.log("В корзині: ", this.items);
  },
};
const woman = {
  items: ["Сукня, туфлі"],
};
const man = {
  items: ["Костюм, сорочка"],
};
const child = {
  items: ["Майка, шорти"],
};


document
  .querySelector("#wom")
  .addEventListener("click", cart.showItems.bind(woman));

document
  .querySelector("#man")
  .addEventListener("click", cart.showItems.bind(man));


document
  .querySelector("#kid")
  .addEventListener("click", cart.showItems.bind(child));

  */

const infoCar = {
  name: "audi",
  model: "rs7",
  color: "black",
  showInfo: function () {
    console.log(
      "Car: " + this.name + " model: " + this.model + " color: " + this.color
    );
  },
};

car2 = {
  name: "opel",
  model: "xxx",
  color: "red",
};

infoCar.showInfo();
infoCar.showInfo.bind(car2)();
infoCar.showInfo.call(car2);
infoCar.showInfo.apply(car2);
