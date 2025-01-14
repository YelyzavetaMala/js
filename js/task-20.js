/*
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
const ageCheckbox = document.querySelector("#age");
const maleRadio = document.querySelector("#male");
const femaleRadio = document.querySelector("#female");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const sex = maleRadio.checked
    ? "Male"
    : femaleRadio.checked
    ? "Female"
    : "Not selected";

  const info = {
    name: nameInput.value,
    lastName: lastNameInput.value,
    sex: sex,
    age: ageCheckbox.checked ? "Yes" : "No",
  };

  console.log(info);
  localStorage.setItem("info", JSON.stringify(info));
}

if (localStorage.getItem("info")) {
  const ls = JSON.parse(localStorage.getItem("info"));
  nameInput.value = ls.name;
  lastName.value = ls.lastName;
}


let form = document.querySelector("#form");
let formData = {};

form.addEventListener("input", function (event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem("formData", JSON.stringify(formData));
});

if (localStorage.getItem("formData")) {
  formData = JSON.parse(localStorage.getItem("formData"));
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}
*/
