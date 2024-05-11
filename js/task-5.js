function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const colorChanger = document.querySelector(".change-color");
const colorHex = document.querySelector(".color");

colorChanger.addEventListener("click", colorChange);

function colorChange() {
  bodyEl.style.background = colorHex.textContent = getRandomHexColor();
}

