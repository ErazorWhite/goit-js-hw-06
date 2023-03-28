function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const btnChangeColor = document.querySelector(".change-color");
const label = document.querySelector(".color");

function onChangeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  label.textContent = newColor;
}

btnChangeColor.addEventListener("click", onChangeColor);