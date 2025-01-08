/*
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");

btn1.addEventListener("click", () => console.log("click"));
btn2.addEventListener("contextmenu", () => console.log("contextmenu"));
btn3.addEventListener("mouseover", () => console.log("mouseover"));
btn4.addEventListener("mousedown", () => console.log("mousedown"));
btn5.addEventListener("mousemove", () => console.log("mousemove"));
btn6.addEventListener("keydown", () => console.log("keydown"));

const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const clickBtn = document.querySelector("#click");

const handleClick = () => {
  console.log("Hello");
};

addBtn.addEventListener("click", () => {
  clickBtn.addEventListener("click", handleClick);
});

removeBtn.addEventListener("click", () => {
  clickBtn.removeEventListener("click", handleClick);
});


*/

const clickBtn = document.querySelector("#click");
const infoClick = (event) => {
  console.log("event", event);
};

clickBtn.addEventListener("click", infoClick);
