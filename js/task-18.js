let elem = document.getElementById("elem");

elem.style.background = "green";

let elements = document.querySelectorAll("ul>li:last-child");

for (element of elements) {
  console.log(element);
}
