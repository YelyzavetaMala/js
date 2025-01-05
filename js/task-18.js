let elem = document.getElementById("elem");

elem.style.background = "green";

let elements = document.querySelectorAll("ul>li:last-child");

for (element of elements) {
  console.log(element);
}

let element = document.getElementsByTagName("div");
console.log(element);

let textHidden = document.getElementById("textHidden");
textHidden.hidden = true;

let message = document.getElementById("message");
console.log(message.value);

let text = document.querySelector(".text-message");
console.log(text.textContent);
text.textContent = "hello, olga";
