localStorage.setItem("name", "Liza");
const a = localStorage.getItem("name");
console.log(a);

function check() {
  let val = document.getElementsByName("radio");
  if (val[0].checked) {
    console.log("Female");
  } else {
    console.log("Male");
  }
}

const form = document.querySelector(".form");
const nameInput = document.querySelector(".inputName");
const lastNameInput = document.querySelector(".inputLastName");
const age = document.querySelector("#age");
let male = document.getElementsByName("radio");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const info = {
    name: nameInput.value,
    lastName: lastNameInput.value,
    age: age.value,
    male: male[0].checked,
  };
  console.log(info);
}
