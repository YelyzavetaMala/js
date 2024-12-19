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
*/

function hello() {
  console.log(this);
}

const user = {
  name: "Ivan",
  age: 30,
  hello: hello,
  sayHelloWindow: hello.bind(windo),
  info: function () {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
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

user.info.bind(Ann)();
user.info.bind(Nata)();
