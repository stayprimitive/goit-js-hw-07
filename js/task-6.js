const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyteBtn = document.querySelector("button[data-destroy]");

let amount = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  let example = "";
  for (let i = 0; i < amount; i++) {
    example += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  boxesEl.insertAdjacentHTML("beforeend", example);
}
function destroyBoxes() {
  boxesEl.innerHTML = "";
}

inputEl.addEventListener("input", (event) => {
  amount = event.target.value;
});

createBtn.addEventListener("click", () => {
boxesEl.innerHTML = '';
  if (inputEl.value !== "") {
    createBoxes(amount);
  } else {
    alert("Enter your number");
  }
  inputEl.value = ``;
});

destroyteBtn.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = "";
});