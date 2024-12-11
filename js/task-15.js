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
*/

function changeColor() {
  this.style.background = "green";
}
let user = document.querySelectorAll("div");
user.forEach(function (element) {
  element.onclick = changeColor;
});
